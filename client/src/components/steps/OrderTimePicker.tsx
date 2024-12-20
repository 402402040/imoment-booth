import React, { useEffect, useState } from "react";

import { DatePicker, Button, Divider, message, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { convertToTime } from "../../util/convert";

export interface OrderTimePickerProps {
  defaultStartTime: number | null;
  defaultEndTime: number | null;
  onFinish: (orderTime: string, startTime: number, endTime: number) => void;
  goBack: () => void;
}

export const OrderTimePicker = ({
  onFinish,
  goBack,
  defaultStartTime,
  defaultEndTime,
}: OrderTimePickerProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [orderDate, setOrderDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [avaliableOrderTime, setAvaliableOrderTime] = useState<boolean[]>([]);
  const [loading, setLoading] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(defaultStartTime);
  const [endTime, setEndTime] = useState<number | null>(defaultEndTime);
  const nowIndex = new Date(orderDate) > new Date() ? -1 : getNowIndex();

  useEffect(() => {
    fetchAvaliableOrderTime(orderDate);
  }, [orderDate]);

  const fetchAvaliableOrderTime = async (orderDate: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/avaliable_order_time?order_date=${orderDate}`,
      );
      const json = await response.json();
      setAvaliableOrderTime(json.avaliable_time);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const setStartTimeOrEndTime = (time: number) => {
    if (startTime === null) {
      setStartTime(time);
      return;
    }

    if (time < startTime) {
      setStartTime(time);
      setEndTime(null);
      return;
    }

    if (endTime === null) {
      if (time - startTime > 7) {
        messageApi.open({
          type: "warning",
          content: "一次最多只能連續租借四個小時！",
        });
        return;
      }

      for (let i = startTime; i < time; i++) {
        if (!avaliableOrderTime[i]) {
          messageApi.open({
            type: "warning",
            content: "選取的時間範圍中以有人租借了！",
          });
          return;
        }
      }
      setEndTime(time);
      return;
    }

    setStartTime(time);
    setEndTime(null);
  };

  return (
    <div className="main-container">
      <h2>預約服務 (2/3)選擇時間</h2>
      <DatePicker
        style={{ width: "100%", marginTop: "30px" }}
        format="YYYY-MM-DD"
        minDate={dayjs()}
        defaultValue={dayjs(orderDate, "YYYY-MM-DD")}
        onChange={(date) => setOrderDate(date!.format("YYYY-MM-DD"))}
      />
      <div className="options-container">
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
          <div style={{ height: "100%", overflowY: "auto" }}>
            <Divider orientation="left">凌晨</Divider>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              {avaliableOrderTime.map((avaliable, index) => {
                if (index > 11) {
                  return;
                }
                return (
                  <Button
                    type={
                      isSelect(startTime, endTime, index)
                        ? "primary"
                        : "default"
                    }
                    disabled={!avaliable || index < nowIndex}
                    onClick={() => setStartTimeOrEndTime(index)}
                  >
                    {convertToTime(index)}
                  </Button>
                );
              })}
            </div>

            <Divider orientation="left">上午</Divider>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              {avaliableOrderTime.map((avaliable, index) => {
                if (index <= 11 || index > 23) {
                  return;
                }
                return (
                  <Button
                    type={
                      isSelect(startTime, endTime, index)
                        ? "primary"
                        : "default"
                    }
                    disabled={!avaliable || index < nowIndex}
                    onClick={() => setStartTimeOrEndTime(index)}
                  >
                    {convertToTime(index)}
                  </Button>
                );
              })}
            </div>

            <Divider orientation="left">下午</Divider>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              {avaliableOrderTime.map((avaliable, index) => {
                if (index <= 23 || index > 35) {
                  return;
                }
                return (
                  <Button
                    type={
                      isSelect(startTime, endTime, index)
                        ? "primary"
                        : "default"
                    }
                    disabled={!avaliable || index < nowIndex}
                    onClick={() => setStartTimeOrEndTime(index)}
                  >
                    {convertToTime(index)}
                  </Button>
                );
              })}
            </div>

            <Divider orientation="left">晚上</Divider>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              {avaliableOrderTime.map((avaliable, index) => {
                if (index <= 35) {
                  return;
                }
                return (
                  <Button
                    type={
                      isSelect(startTime, endTime, index)
                        ? "primary"
                        : "default"
                    }
                    disabled={!avaliable || index < nowIndex}
                    onClick={() => setStartTimeOrEndTime(index)}
                  >
                    {convertToTime(index)}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="button-container">
        <button className="cancel-button" onClick={() => goBack()}>
          返回上一步
        </button>
        <button
          className="comfirm-button"
          onClick={() => {
            if (startTime === null || endTime === null) {
              messageApi.open({
                type: "warning",
                content: "請選取要租借的時間範圍！",
              });
              return;
            }

            onFinish(orderDate, startTime, endTime);
          }}
        >
          下一步
        </button>
      </div>
      {contextHolder}
    </div>
  );
};

function isSelect(
  startTime: number | null,
  endTime: number | null,
  index: number,
): boolean {
  if (startTime === index) {
    return true;
  }

  if (endTime === index) {
    return true;
  }

  if (
    startTime !== null &&
    endTime !== null &&
    index > startTime &&
    index < endTime
  ) {
    return true;
  }

  return false;
}

function getNowIndex(): number {
  const now = new Date();
  return now.getHours() * 2 + (now.getMinutes() === 30 ? 1 : 0);
}
