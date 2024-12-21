package server

import (
	"fmt"
	"imoment-booth/internal/models"

	"github.com/gin-gonic/gin"
	"github.com/glebarez/sqlite"
	"gorm.io/gorm"
)

type Server struct {
	engine *gin.Engine
	db     *gorm.DB
}

func NewServer() *Server {
	return &Server{}
}

func (s *Server) Init() error {
	db, err := gorm.Open(sqlite.Open("sqlite.db"), &gorm.Config{})
	if err != nil {
		return fmt.Errorf("failed to open sqlite db")
	}
	s.db = db

	if err := s.db.AutoMigrate(&models.Order{}, &models.QRCode{}); err != nil {
		return fmt.Errorf("failed to auto migrate: %w", err)
	}

	s.engine = gin.Default()
	return nil
}

func (s *Server) Run() error {
	s.engine.Static("/static", "./client/build/static")
	s.engine.NoRoute(func(c *gin.Context) {
		c.File("./client/build/index.html")
	})
	api := s.engine.Group("/api")
	api.POST("/create_order", s.CreateOrder)
	api.GET("/avaliable_order_time", s.GetAvaliableOrderTime)

	return s.engine.Run(":8080")
}
