package models

import "time"

type Order struct {
	Username       string      `json:"username" gorm:"column:username"`
	Email          string      `json:"email" gorm:"column:email"`
	Age            string      `json:"age" gorm:"column:age"`
	Sex            SexType     `json:"sex" gorm:"column:sex"`
	Purpose        PurposeType `json:"purpose" gorm:"column:purpose"`
	NumberOfPerson int         `json:"number_of_person" gorm:"column:number_of_person"`
	CreateTime     time.Time   `json:"-" gorm:"column:create_time"`
	OrderDate      string      `json:"order_date" gorm:"column:order_date"`
	OrderStartTime int         `json:"order_start_time" gorm:"column:order_start_time"`
	OrderEndTime   int         `json:"order_end_time" gorm:"column:order_end_time"`
}

type SexType string

const (
	SexTypeMale   SexType = "male"
	SexTypeFemale SexType = "female"
	SexTypeOther  SexType = "other"
)

type PurposeType string

const (
	PurposeTypeLearning PurposeType = "learning"
	PurposeTypeWork     PurposeType = "work"
	PurposeTypeChat     PurposeType = "chat"
	PurposeTypeAlone    PurposeType = "alone"
)
