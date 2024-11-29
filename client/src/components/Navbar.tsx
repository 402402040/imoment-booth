import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

export const Navbar = (props: {}) => {
    const location = useLocation();

    const items: ItemType<MenuItemType>[] = [
        {
            key: "/",
            label: <Link to="/">服務介紹</Link>,
        },
        {
            key: "/order",
            label: <Link to="/order">預約方式</Link>,
        },
    ];
    return (
        <>
            <div className="demo-logo">imoment booth</div>
            <Menu
                theme="light"
                mode="horizontal"
                selectedKeys={[location.pathname]}
                items={items}
                style={{ flex: 1, minWidth: 0, maxWidth: "180px" }}
            />
        </>
    );
};
