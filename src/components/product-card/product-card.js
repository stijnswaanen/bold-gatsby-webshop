import React from "react";
import { Card } from "antd";
import * as styles from "./product-card.module.scss";

const ProductCard = ({ product }) => {
  const { name, image, description } = product;
  return (
    <Card cover={<img src={image} alt={name} />} bordered={false}>
      <Card.Meta title={name} />
      {description && 
        <div className={styles.content} dangerouslySetInnerHTML={{__html: `${description.substring(0, 125)} ...`}}></div>
      }
    </Card>
  );
};

export default ProductCard;
