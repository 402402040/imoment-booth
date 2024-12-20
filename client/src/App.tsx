import React from "react";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order";
import { Navbar } from "./components/Navbar";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Navbar />
        <Content>
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
