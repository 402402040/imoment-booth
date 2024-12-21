package models

type QRCode struct {
	ID      uint   `gorm:"column:id,primaryKey"`
	Content string `gorm:"column:content,not null"`
	Image   []byte `gorm:"column:image,not null"`
}
