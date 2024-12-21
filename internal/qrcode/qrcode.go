package qrcode

import (
	"github.com/skip2/go-qrcode"
)

type Qrcode struct {
	ID      int
	Content string
}

func GenerateQrcode(jsonContent string) ([]byte, error) {
	return qrcode.Encode(jsonContent, qrcode.Medium, 256)
}
