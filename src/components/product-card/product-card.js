import React from "react";
import { Card } from "antd";
import * as styles from "./product-card.module.scss";

const ProductCard = ({ product }) => {
  const { name, image, description } = product;
  return (
    <Card cover={image} bordered={false}>
      <Card.Meta title={name} />
      {description && 
        <div className={styles.content}>
          {`${description.substring(0, 125)} ...`}
        </div>
      }
    </Card>
  );
};

export default ProductCard;
