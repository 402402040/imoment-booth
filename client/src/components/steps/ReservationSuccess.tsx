import React from "react";
import backgroundCircle from "../../assets/background-circle.png";
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
              您填寫的E-mail，請前往確認。
              <br />
            </p>
          </div>
          <div className="qr-code"></div>
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
    </>
  );
};
