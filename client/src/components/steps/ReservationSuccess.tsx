import React from "react";
import backgroundCircle from "../../assets/background-circle.png";
import boothLogo from "../../assets/booth-logo.png"; 
import contactBg from "../../assets/contact-bg.png";
import { Link } from "react-router-dom";
import "./ReservationSucess.css";

export const ReservationSuccess = (props: { qrCodeUrl: string }) => {
  return (
    <>
      <div className="top-bg-circle">
        <img src={backgroundCircle} alt="" />
      </div>
      <div className="main-container">
        <div className="main-container">
          <h2>完成預約</h2>
          <div className="qr-code-description-container">
            <p>
              以下為您的預約解鎖QRcode，
              <br />
              建議您即刻截圖保存使用。
              <br />
              本服務同時亦將QRcode寄送至
              <br />
              若您預約完成後，未在收件匣收到您的預約通知信，請檢查您的電子信箱中的垃圾信件匣，看信件是否在垃圾信件匣中，並將其設定為非垃圾郵件。
              <br />
            </p>
          </div>
          <div className="qr-code">
          <img
              src={props.qrCodeUrl}  // 直接使用傳遞進來的 Base64 字串
              alt="QR Code"
            />
          </div>
          <div className="button-container">
            <button className="comfirm-button">
              <Link to="/">完成</Link>
            </button>
          </div>
        </div>
        <div className="bottom-bg-circle">
          <img src={backgroundCircle} alt="" />
        </div>
      </div>
      <div className="booth-info-container">
        <div className="booth-text-info-container">
          <div>
            <img style={{ width: "75%" }} src={boothLogo} alt="Booth Logo" />
          </div>
          <p className="booth-slogan">
            專業認證 業界第一<br />
            量身定做 業界第一
          </p>
          <p className="booth-sub-slogan">
            小空間。大世界<br />
            Your moment, your space.
          </p>
          <p className="booth-description">
            當你需要與聲隔絕時，<br />
            靜音艙，就是你的萬應室。<br />
            心之所嚮！靈光乍現！<br />
            可量身定做、靈活妝點；可自由移動，最佳定位；<br />
            可提高效率，事半功倍。<br />
            豐富多元的空間運用方案，等你來發想與體驗！<br />
            量身定做。優享空間<br />
            i清靜 - 靜音艙 / imoment-booth
          </p>
        </div>
        <div className="contact-info-container">
          <div className="contact-bg-container">
            <img src={contactBg} alt="Contact Background" />
            <p className="contact-info">
              諮詢電話 0966-198092<br />
              www.fateeternal.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
