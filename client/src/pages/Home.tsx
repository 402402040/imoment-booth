import React from "react";
import { Link } from "react-router-dom";
import bg01 from "../assets/bg-01.png";
import bg02 from "../assets/bg-02.png";
import bg03 from "../assets/bg-3.png";
import title from "../assets/title.png";
import vector from "../assets/Vector.png";
import "./Home.css";

export const Home = (props: {}) => {
  return (
    <>
      <div style={{ width: "100%", position: "relative" }}>
        <img src={bg01} alt="" />
        <div id="introduction-anchor"></div>
      </div>
      <div></div>
      <Link to="/order">
        <div className="btn">立即線上預約</div>
      </Link>
      <div className="bg-img">
        <img src={bg02} alt="" />
      </div>
      <div className="bg-img_title">
        <div>
          <img src={title} alt="" />
        </div>
        <h2>靜音艙</h2>
      </div>
      <div>
        <div className="bg-img_item">
          <div>
            <img src={vector} alt="" />
          </div>
          <p>零接觸智能服務，線上預約最方便</p>
        </div>
        <div className="bg-img_item">
          <div>
            <img src={vector} alt="" />
          </div>
          <p>
            劇場級隔音效果，高級車等級使用隔音膠 <br />
            及雙層鋁蜂窩結構
          </p>
        </div>
        <div className="bg-img_item">
          <div>
            <img src={vector} alt="" />
          </div>
          <p>
            小空間魔術師，給您量身訂做的全方位靜
            <br />
            音方案
          </p>
        </div>
        <div className="bg-img_item">
          <div>
            <img src={vector} alt="" />
          </div>
          <p>
            業界最多國際、國內品質認證檢驗，給您
            <br />
            最安全的空間
          </p>
        </div>
        <div className="bg-img_item">
          <div>
            <img src={vector} alt="" />
          </div>
          <p>
            環保省電愛惜地球，全產品75%原料可回
            <br />
            收再利用
          </p>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img src={bg03} alt="" />
        <div id="reservation-anchor"></div>
      </div>
      <div></div>
      <div className="address">
        <h2>體驗位址</h2>
        <p style={{ textAlign: "center" }}>
          新北市林口區仁愛二路496號一樓 <br />
          全家便利商店 林口新創園店
        </p>
        <div style={{ textAlign: "center" }}>
          <iframe
            style={{ maxWidth: "90%", border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.7717510404827!2d121.3764386!3d25.0757242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a70055865085%3A0xe726e9707fdf2b97!2z5YWo5a625L6_5Yip5ZWG5bqXIOael-WPo-aWsOWJteWckuW6lw!5e0!3m2!1szh-TW!2stw!4v1733921129055!5m2!1szh-TW!2stw"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Link to="/order">
          <div className="btn" style={{ margin: "30px 0 50px 0" }}>
            立即線上預約
          </div>
        </Link>
      </div>
      <footer>
        <p>注意事項 :</p>
        <p>
          1.本服務由垣恆有限公司提供，若您有服務預約使用問題，請洽客服專線:
          0966-198092。
        </p>
        <p>2.靜音艙解鎖碼將於預約時間當下生效，並於預約結束時間失效。</p>
        <p>
          3.使用期間請避免跑跳、製造激烈吵鬧聲響，若影響周遭環境安寧，後果須請使用者自行負責。
        </p>
        <p>
          4.使用完畢，請自行將垃圾帶離並保持空間潔淨。若空間設備造成汙損、或損毀，將向該使用者收取$1,000~$5,000不等賠償金額。
        </p>
        <p>
          5.禁止在本服務空間內進行明火相關動作、危險物品、及各種違反法令、善良風俗等行為活動，違反者須自行負擔法律責任。
        </p>
        <p>
          6.離場前，請您愛護服務空間將電源關閉、物品歸位、艙門關閉;
          並妥善使用避免造成損壞，讓更多人可以一起享受智慧多元應用艙。
        </p>
      </footer>
    </>
  );
};
