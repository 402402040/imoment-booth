import React, { useState } from "react";
import { UserInfo, UserInfoForm } from "../components/steps/UserInfoForm";
import { OrderTimePicker } from "../components/steps/OrderTimePicker";
import { OrderDetail } from "../components/steps/OrderDetail";
import "./Order.css";
import { ReservationSuccess } from "../components/steps/ReservationSuccess";

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
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

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

  const handleOrderDetailFinish = (qrCodeUrl: string) => {
    setQrCodeUrl(qrCodeUrl);
    setStep(3);
  };

  return (
    <div>
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
          onFinish={handleOrderDetailFinish}
        ></OrderDetail>
      )}
      {step === 3 && (
        <ReservationSuccess qrCodeUrl={qrCodeUrl}></ReservationSuccess>
      )}
    </div>
  );
};
