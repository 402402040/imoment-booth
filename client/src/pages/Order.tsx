import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import { UserInfo, UserInfoForm } from "../components/steps/UserInfoForm";
import { OrderTimePicker } from "../components/steps/OrderTimePicker";
import { OrderDetail } from "../components/steps/OrderDetail";

export type OrderInfo = {
    username: string;
    email: string;
    age: string;
    sex: string;
    purpose: string;
    number_of_person: number;
    order_date: string;
    order_start_time: number;
    order_end_time: number;
};

export const Order = (props: {}) => {
    const [step, setStep] = useState(0);
    const [orderInfo, setOrderinfo] = useState<OrderInfo>({
        username: "",
        email: "",
        age: "",
        sex: "",
        purpose: "",
        number_of_person: 0,
        order_date: "",
        order_start_time: 0,
        order_end_time: 0,
    });

    const handleUserInfoFinish = (userInfo: UserInfo) => {
        const orderInfo: OrderInfo = {
            username: userInfo.username!,
            email: userInfo.email!,
            age: userInfo.age!,
            sex: userInfo.sex!,
            purpose: userInfo.purpose!,
            number_of_person: userInfo.numberOfPerson!,
            order_date: "",
            order_start_time: 0,
            order_end_time: 0,
        };

        setOrderinfo(orderInfo);
        setStep(1);
    };

    const handleOrderTimeFinish = (
        orderDate: string,
        startTime: number,
        endTime: number,
    ) => {
        orderInfo.order_date = orderDate;
        orderInfo.order_start_time = startTime;
        orderInfo.order_end_time = endTime;
        setOrderinfo(orderInfo);
        setStep(2);
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ maxWidth: "600px", width: "100%" }}>
                <Steps
                    style={{ marginBottom: "2rem" }}
                    current={step}
                    items={[
                        {
                            title: "填寫使用者資料",
                        },
                        {
                            title: "選擇時間",
                        },
                        {
                            title: "預約資訊確認",
                        },
                    ]}
                />

                {step === 0 && (
                    <UserInfoForm
                        userInfo={{
                            username: orderInfo?.username,
                            email: orderInfo?.email,
                            age: orderInfo?.age,
                            sex: orderInfo?.sex,
                            purpose: orderInfo?.purpose,
                            numberOfPerson: orderInfo?.number_of_person,
                        }}
                        onFinish={handleUserInfoFinish}
                    />
                )}
                {step === 1 && (
                    <OrderTimePicker
                        onFinish={handleOrderTimeFinish}
                        goBack={() => setStep(0)}
                        defaultStartTime={orderInfo.order_start_time}
                        defaultEndTime={orderInfo.order_end_time}
                    ></OrderTimePicker>
                )}
                {step === 2 && (
                    <OrderDetail
                        orderInfo={orderInfo}
                        goBack={() => setStep(1)}
                    ></OrderDetail>
                )}
            </div>
        </div>
    );
};
