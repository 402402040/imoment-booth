import React, { useState } from "react";
import { OrderInfo } from "../../pages/Order";
import { Button, Radio, Form, Spin, message } from "antd";
import { FormText } from "./FormText";
import { LoadingOutlined } from "@ant-design/icons";
import { convertToTime } from "../../util/convert";
import { useNavigate } from "react-router-dom";

export interface OrderDetailProps {
    orderInfo: OrderInfo;
    goBack: () => void;
}

export const OrderDetail = ({ orderInfo, goBack }: OrderDetailProps) => {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [loading, setLoading] = useState(false);

    const createOrder = async (orderInfo: OrderInfo) => {
        setLoading(true);
        try {
            const response = await fetch("/api/create_order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Specifies the request body is JSON
                },
                body: JSON.stringify(orderInfo),
            });

            if (!response.ok) {
                messageApi.open({
                    type: "error",
                    content: "預約失敗！請稍候重新再試一次",
                });
                return;
            }

            const json = await response.json();
            console.log(json);
            messageApi.open({
                type: "success",
                content: "預約成功！",
            });

            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (e) {
            messageApi.open({
                type: "error",
                content: "預約失敗！請稍候重新再試一次",
            });
        }
        setLoading(false);
    };

    return (
        <>
            {contextHolder}
            {loading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem",
                    }}
                >
                    <div>
                        <Spin indicator={<LoadingOutlined spin />} size="large" />
                    </div>
                </div>
            ) : (
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ ...orderInfo, remember: true }}
                    onFinish={() => createOrder(orderInfo)}
                    onFinishFailed={() => console.log("failed")}
                    autoComplete="off"
                    labelAlign="left"
                >
                    <Form.Item<OrderInfo> label="使用者名稱" name="username">
                        <FormText />
                    </Form.Item>

                    <Form.Item<OrderInfo> label="E-mail" name="email">
                        <FormText />
                    </Form.Item>

                    <Form.Item<OrderInfo> label="年齡" name="age">
                        <Radio.Group disabled>
                            <Radio value="0-15">
                                0-15 *建議國中以下孩童需由家長陪同使用本服務
                            </Radio>
                            <Radio value="16-25">16-25</Radio>
                            <Radio value="26-35">26-35</Radio>
                            <Radio value="36-45">36-45</Radio>
                            <Radio value="46-55">46-55</Radio>
                            <Radio value="56 above">56以上</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item<OrderInfo> label="性別" name="sex">
                        <Radio.Group disabled>
                            <Radio value="male">男</Radio>
                            <Radio value="female">女</Radio>
                            <Radio value="other">其他</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item<OrderInfo> label="使用目的" name="purpose">
                        <Radio.Group disabled>
                            <Radio value="learning">學習</Radio>
                            <Radio value="work">工作</Radio>
                            <Radio value="chat">聊天</Radio>
                            <Radio value="alone">獨處</Radio>
                            <Radio value="other">其他</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item<OrderInfo> label="使用人數" name="number_of_person">
                        <Radio.Group disabled>
                            <Radio value="1">1人</Radio>
                            <Radio value="2">2人</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item<OrderInfo> label="預約日期" name="order_date">
                        <FormText formatFunction={(value) => formatDate(value)} />
                    </Form.Item>

                    <Form.Item<OrderInfo> label="預約時段" name="order_start_time">
                        <FormText
                            formatFunction={() =>
                                formatTime(orderInfo.order_start_time, orderInfo.order_end_time)
                            }
                        ></FormText>
                    </Form.Item>

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <Form.Item label={null}>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button onClick={() => goBack()}>上一步</Button>
                            </div>
                        </Form.Item>
                        <Form.Item label={null}>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                <Button type="primary" htmlType="submit">
                                    確認預約
                                </Button>
                            </div>
                        </Form.Item>
                    </div>
                </Form>
            )}
        </>
    );
};

function formatDate(dateStr: string) {
    const [year, month, day] = dateStr.split("-"); // Split the date string by hyphen
    return `${year}年${parseInt(month)}月${parseInt(day)}日`; // Format the date
}

function formatTime(startTime: number, endTime: number) {
    return (
        <div>
            開始時間：{convertToTime(startTime)}&nbsp;&nbsp;&nbsp;結束時間：
            {convertToTime(endTime + 1)}
        </div>
    );
}