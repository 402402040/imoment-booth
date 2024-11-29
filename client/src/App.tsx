import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Navbar } from "./components/Navbar";

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
          }}
        >
          <Navbar />
        </Header>
        <Content className="mt-10 p-5 overflow-y-scroll h-screen justify-center lg:flex">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
