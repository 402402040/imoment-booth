import React from "react";
import type { FormProps } from "antd";
import backgroundCircle from "../../assets/background-circle.png";
import { Button, Radio, Form, Input } from "antd";

export type UserInfo = {
  username?: string;
  email?: string;
  age?: string;
  sex?: string;
  purpose?: string;
  numberOfPerson?: number;
};

export interface UserInfoFormProps {
  userInfo: UserInfo;
  onFinish: (values: UserInfo) => void;
}

export const UserInfoForm = ({ userInfo, onFinish }: UserInfoFormProps) => {
  return (
    <>
      <div className="top-bg-circle">
        <img src={backgroundCircle} alt="" />
      </div>
      <div className="main-container">
        <h2>預約服務 (1/3)填寫使用者資料</h2>
        <Form
          name="basic"
          className="options-container"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ ...userInfo, remember: true }}
          onFinish={onFinish}
          onFinishFailed={() => console.log("failed")}
          autoComplete="off"
          labelAlign="left"
        >
          <Form.Item<UserInfo>
            label="使用者名稱"
            name="username"
            rules={[
              { required: true, message: "請輸入您的使用者名稱！" },
              {
                pattern: /^\S*$/,
                message: "使用者名稱不得有空白！",
              },
              {
                max: 10,
                message: "使用者名稱不得超過 10 個字元！",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item<UserInfo>
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: "請輸入您的 E-mail！" },
              { type: "email", message: "請輸入正確的 E-mail 格式" },
            ]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item<UserInfo>
            label="年齡"
            name="age"
            rules={[{ required: true, message: "請輸入您的年齡！" }]}
          >
            <Radio.Group>
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

          <Form.Item<UserInfo>
            label="性別"
            name="sex"
            rules={[{ required: true, message: "請輸入您的性別！" }]}
          >
            <Radio.Group>
              <Radio value="male">男</Radio>
              <Radio value="female">女</Radio>
              <Radio value="other">其他</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item<UserInfo>
            label="使用目的"
            name="purpose"
            rules={[{ required: true, message: "請輸入您的使用目地！" }]}
          >
            <Radio.Group>
              <Radio value="learning">學習</Radio>
              <Radio value="work">工作</Radio>
              <Radio value="chat">聊天</Radio>
              <Radio value="alone">獨處</Radio>
              <Radio value="other">其他</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item<UserInfo>
            label="使用人數"
            name="numberOfPerson"
            rules={[{ required: true, message: "請輸入您的使用人數！" }]}
          >
            <Radio.Group>
              <Radio value={1}>1人</Radio>
              <Radio value={2}>2人</Radio>
            </Radio.Group>
          </Form.Item>

          <div className="button-container">
            <button type="submit" className="comfirm-button">
              下一步
            </button>
          </div>
        </Form>
      </div>
      <div className="bottom-bg-circle">
        <img src={backgroundCircle} alt="" />
      </div>
    </>
  );
};
