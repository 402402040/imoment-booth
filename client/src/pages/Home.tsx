import React from "react";
import { Button, Skeleton } from "antd";
import mapImage from "../assets/map.png";
import { Link } from "react-router-dom";

export const Home = (props: {}) => {
    return (
        <div className="lg:w-3/4">
            <div className="flex justify-center border-2 border-gray-200 p-8 my-8">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "center",
                    }}
                >
                    <h2 className="text-xl">imoment-booth</h2>
                    <h2 className="text-xl mb-10">智慧多元應靜音倉</h2>

                    <h2 className="text-lg">2024/1/15~2024/4/14</h2>
                    <h2 className="text-lg">服務實證期間免費租借，一起來體驗</h2>
                    <h2 className="text-lg">你的小空間o大世界</h2>
                </div>
            </div>
            <div className="flex justify-center border-2 border-gray-200 p-8 my-8">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        textAlign: "center",
                    }}
                >
                    <h2 className="text-xl mb-10">服務介紹</h2>

                    <div className="flex flex-col justify-between text-left w-100 lg:flex-row">
                        <div className="flex-1 mb-10">
                            <h3 className="text-base mb-5">
                                急著找地方上線會議? 下班需要獨處一下? 課後需要家教空間?
                                你的短暫me time要去哪?
                            </h3>
                            <h3 className="text-base mb-5">
                                Enjoy your moment, your space!
                                來全家便利商店體驗最全面的便利生活!
                            </h3>
                            <h3 className="text-base mb-5">
                                除了採購飲食生鮮、生活作業之外， 還能提供你獨享寧靜小空間!
                            </h3>
                        </div>
                        <div className="flex-1 text-center">
                            <h3 className="text-base mb-10">+產品形象</h3>
                            <h3 className="text-base">可容納人數: 1-2人 </h3>
                            <h3 className="text-base">體驗地點: </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center border-2 border-gray-200 p-8 my-8">
                <div className="flex justify-center flex-col text-center">
                    <h2 className="text-xl mb-10">i清靜 靜音艙</h2>
                    <p className="text-lg mb-5">零接觸智能服務，線上 預約最方便</p>
                    <p className="text-lg mb-5">
                        劇場級隔音效果，高級車等級使用隔音膠及雙層呂蜂窩結構
                    </p>
                    <p className="text-lg mb-5">
                        小空間魔術師， 給您量身訂做的全方位靜音方案
                    </p>
                    <p className="text-lg mb-5">
                        業界最多國際、國內品質認證檢驗， 給您最安全的空間
                    </p>
                    <p className="text-lg mb-5">
                        環保省電愛惜地球，全產品75%原料可 回收再利用
                    </p>
                </div>
            </div>
            <div className="flex justify-center border-2 border-gray-200 p-8 my-8">
                <div className="w-100 flex flex-col justify-center lg:flex-row">
                    <div className="flex flex-col mr-10 justify-center mb-5">
                        <p className="text-base mb-5">體驗位址</p>
                        <p className="text-base">新北市林口區仁愛二路496號一樓</p>
                        <p className="text-base">全家便利商店 林口新創園店</p>
                    </div>

                    <div>
                        <img
                            src={mapImage}
                            style={{ maxWidth: "300px" }}
                            alt="Description of the image"
                        />
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button size="large">
                    <Link to="/order">預約體驗</Link>
                </Button>
            </div>

            <div className="flex justify-center flex-col border-2 border-gray-200 p-8 my-8">
                <h3 className="text-lg mb-5">注意事項 :</h3>
                <p className="text-base mb-2">
                    1.本服務由垣 恆有限公司提供，若您有服務預約使用問題，請洽客服專線:
                    0966-198092。
                </p>
                <p className="text-base mb-2">
                    2.靜音艙解鎖碼將於預約時間 當下生效，並於預約結束時間失效。
                </p>
                <p className="text-base mb-2">
                    3.使用期間請避免
                    跑跳、製造激烈吵鬧聲響，若影響周遭環境安寧，後果須請使用者自行負責。
                </p>
                <p className="text-base mb-2">
                    4.使用完畢，請自行將垃圾帶離並保持空間潔淨。
                    若空間設備造成汙損、或損毀，將向該使用者收取$1,000~$5,000不等賠償金額。
                </p>
                <p className="text-base mb-2">
                    5.禁止在本服務空間內進行明火相關動作、危險物品、及各種違反法令、善良風俗等行為活動，違反者須自行負擔法律責任
                    。
                </p>
                <p className="text-base mb-2">
                    6.離場前，請您愛護服務空間將電源關閉、物品歸位、艙門關閉;
                    並妥善使用避免造成損壞，讓更多人 以一起享受智慧多元應用艙。
                </p>
            </div>
        </div>
    );
};
