package server

import (
	"imoment-booth/internal/models"
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

	c.JSON(http.StatusOK, gin.H{"message": "create success"})
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
