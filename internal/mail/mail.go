package mail

import (
	"fmt"
	"net/smtp"
)

type MailBody struct {
	UserName    string
	Email       string
	PeopleCount int
	ReserveDate string
	ReserveTime string
	QRCode      string
}

var from = "fateeternal.service@gmail.com"
var password = "uqsysmhvezjkeplk"

func (m *MailBody) SendMail() error {
	to := []string{m.Email}
	cc := []string{"service@fateeternal.com"}
	subject := "Subject: 【i清靜】智慧多元應用艙-林口實證場域預約成功通知信\n"
	body := fmt.Sprintf(`
			<!DOCTYPE html>
			<html>
			<head>
				<title>預約成功通知</title>
			</head>
			<body>
				<p>親愛的用戶 您好</p>
				<p>感謝您對[i清靜]智慧多元應用艙的支持與愛護。</p>
				<p>您的預約資訊如下:</p>
				<ul>
					<li>使用者名稱: %s</li>
					<li>E-mail: %s</li>
					<li>使用人數: %d</li>
					<li>預約日期: %s</li>
					<li>預約時段: %s</li>
				</ul>
				<p>請於預約時間前往艙體位置，使用下列 QR Code 掃描解鎖艙體即可使用。</p>
				<img src="https://booking.fateeternal.com/api/qrcode/%s" alt="QR Code" />
				<p>全家便利商店 | 林口新創園店<br>
				新北市林口區仁愛二路496號一樓</p>
				<p>若有任何問題，歡迎聯絡客服專線: 0966-198092</p>
			</body>
			</html>
`, m.UserName, m.Email, m.PeopleCount, m.ReserveDate, m.ReserveTime, m.QRCode)

	message := "MIME-Version: 1.0\n" +
		"Content-Type: text/html; charset=\"UTF-8\"\n" +
		"To: " + m.Email + "\n" +
		"CC: " + cc[0] + "\n" +
		subject + body

	smtpHost := "smtp.gmail.com"
	smtpPort := "587"

	auth := smtp.PlainAuth("", from, password, smtpHost)
	allRecipients := append(to, cc...)
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, allRecipients, []byte(message))
	if err != nil {
		return err
	}

	fmt.Println("Email sent successfully!")
	return nil
}
