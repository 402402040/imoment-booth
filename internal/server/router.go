package server

import (
	"encoding/base64"
	"fmt"
	"imoment-booth/internal/models"
	"imoment-booth/internal/qrcode"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
)

func (s *Server) CreateOrder(c *gin.Context) {
	var order models.Order
	if err := c.ShouldBindJSON(&order); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	order.CreateTime = time.Now().UTC()

	if err := s.db.Create(&order).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	jsonContent := createQRcodeContent(order)
	qrCodeData, err := qrcode.GenerateQrcode(jsonContent)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create QR Code to database"})
		return
	}
	qrCode := models.QRCode{
		Content: jsonContent,
		Image:   qrCodeData,
	}
	if err := s.db.Create(&qrCode).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save QR Code to database"})
		return
	}

	qrCodeBase64 := "data:image/png;base64," + base64.StdEncoding.EncodeToString(qrCodeData)
	c.JSON(http.StatusOK, gin.H{
		"Data": qrCodeBase64, // 返回 base64 編碼的 QR code
	})
}

func (s *Server) GetAvaliableOrderTime(c *gin.Context) {
	orderDate := c.Query("order_date")
	var orders []models.Order
	if err := s.db.Where("order_date = ?", orderDate).Find(&orders).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	avaliableTime := []bool{}
	for i := 0; i < 48; i++ {
		avaliableTime = append(avaliableTime, true)
	}

	for _, order := range orders {
		for i := order.OrderStartTime; i < order.OrderEndTime; i++ {
			avaliableTime[i] = false
		}
	}

	c.JSON(http.StatusOK, gin.H{"avaliable_time": avaliableTime})
}

func createQRcodeContent(order models.Order) string {
	return fmt.Sprintf(
		`
		 {
		  "username": %s,
		  "order_date" %s,
		  "start_time": %d,
		  "end_time": %d
		 }
		`, order.Username, order.OrderDate, order.OrderStartTime, order.OrderEndTime)
}
