import React from "react";
import { Badge } from 'antd';
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../../hooks/useCart";

export const Cart = () => {
  const { cartData } = useCart();

  return (
    <>
        <Badge count={cartData.totalQuantity}>
          Cart <ShoppingCartOutlined />
        </Badge>
    </>
  );
};
