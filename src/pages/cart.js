import React from "react";
import { Row, Col, Table, Divider, Space, Statistic, Button } from "antd";
import { CreditCardOutlined, DeleteOutlined } from "@ant-design/icons";
import { useCart } from "../hooks/useCart";
import { useCartToken } from "../hooks/useCartToken";
import LayoutWrapper from "../layout/layout-wrapper";

const Cart = () => {
  const {
    cartData,
    removeProductFromCart,
    removeAllProductsFromCart,
    resetCart,
  } = useCart();
  const { cartToken } = useCartToken();
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
      render: (text, record) => (
        <Space size="middle">
          <p>{text}</p>
        </Space>
      ),
    },
    {
      title: "Total Price",
      key: "totalPrice",
      dataIndex: "totalPrice",
      render: (text, record) => (
        <Space size="middle">
          <p>{text}</p>
        </Space>
      ),
    },
    {
      title: "Delete Product",
      key: "deleteProduct",
      dataIndex: "deleteProduct",
      render: (text, record) => (
        <Space size="middle">
          <DeleteOutlined
            onClick={() =>
              removeProductFromCart({
                cartToken,
                orderId: cartData.id,
                orderItemId: record.id,
              })
            }
          />
        </Space>
      ),
    },
  ];
  return (
    <LayoutWrapper>
      <h1>Cart</h1>
      <Row justify="end">
        <Col>
          <Button
            type="default"
            danger
            onClick={() =>
              removeAllProductsFromCart({
                cartToken,
                orderId: cartData.id,
              })
            }
          >
            <DeleteOutlined />
            &nbsp;
            <span>Delete Cart</span>
          </Button>
        </Col>
      </Row>
      <h2>
        Total Items <strong>({cartData.totalQuantity})</strong>
      </h2>
      <br></br>
      <Table
        columns={columns}
        dataSource={cartData.orderItems}
        pagination={false}
        rowKey={(record) => record.id}
      />
      <Divider orientation="right" />
      <Row justify="end">
        <Col>
          <Statistic title="Total" value={cartData.totalPrice} />
          <Button
            style={{ marginTop: 16 }}
            type="primary"
            onClick={() => resetCart()}
          >
            Pay now <CreditCardOutlined />
          </Button>
        </Col>
      </Row>
    </LayoutWrapper>
  );
};

export default Cart;
