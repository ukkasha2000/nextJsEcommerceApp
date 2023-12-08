"use client";
import Link from "next/link";
import { Layout, Menu, Dropdown, Image } from "@/atoms";
import {
  HomeOutlined,
  InfoCircleOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Header } = Layout;

const categoriesMenu = (
  <Menu>
    <Menu.Item key="1">
      <Link href="/categories/iphones">Iphones</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/categories/accessories">Accessories</Link>
    </Menu.Item>
  </Menu>
);

const AppHeader = () => {
  const [selectedKeys, setSelectedKeys] = useState(["home"]);

  const handleMenuClick = (e) => {
    setSelectedKeys([e.key]);
  };
  return (
    <Header
      className="header"
      style={{ padding: "10px", height: "100%" }}
    >
      <div className="logo">
        <Link href="/home"></Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        selectedKeys={selectedKeys}
        onClick={handleMenuClick}
      >
        <Menu.Item key="0" disabled={true}>
          <Image
            src="/assets/images/ibsmain.png"
            alt="Iphones By Shah"
          />
        </Menu.Item>
        <Menu.Item
          key="home"
          style={{
            backgroundColor: selectedKeys.includes("home") ? "orange" : null,
            color: "white",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        >
          <HomeOutlined style={{fontSize: "16px", marginRight: "2px"}} />
          <Link href="/home" style={{fontSize: "16px"}}> Home </Link>
        </Menu.Item>
        <Menu.Item
          key="about"
          style={{
            backgroundColor: selectedKeys.includes("about") ? "orange" : null,
            color: "white",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        >
          <InfoCircleOutlined style={{fontSize: "16px", marginRight: "2px"}} />
          <Link href="/about" style={{fontSize: "16px"}}> About </Link>
        </Menu.Item>
        <Menu.Item
          key="categories"
          style={{
            backgroundColor: selectedKeys.includes("categories")
              ? "orange"
              : null,
            color: "white",
            borderRadius: "50%",
            marginRight: "20px",
          }}
        >
          <Dropdown overlay={categoriesMenu}>
            <Link className="ant-dropdown-link" href="/categories/iphones" style={{fontSize: "16px"}}>
              Categories
            </Link>
          </Dropdown>
        </Menu.Item>
        <Menu.Item
          key="contactUs"
          style={{
            marginRight: "auto",
            backgroundColor: selectedKeys.includes("contactUs")
              ? "orange"
              : null,
            color: "white",
            borderRadius: "50%",
          }}
        >
          <Link href="/contactUs" style={{fontSize: "16px"}}>Contact Us</Link>
        </Menu.Item>
        <Menu.Item
          key="cart"
          style={{
            backgroundColor: selectedKeys.includes("cart") ? "orange" : null,
            borderRadius: "50%",
          }}
        >
          <ShoppingCartOutlined
            style={{
              fontSize: "24px",
              color: "white",
              top: "5px",
              position: "relative",
            }}
          />
        </Menu.Item>
        <Menu.Item
          key="user"
          style={{
            backgroundColor: selectedKeys.includes("user") ? "orange" : null,
            borderRadius: "50%",
          }}
        >
          <UserOutlined
            style={{
              fontSize: "24px",
              color: "white",
              top: "5px",
              position: "relative",
            }}
          />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
