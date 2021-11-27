import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Button, Dropdown, Menu, Row, Col, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCartToken } from "../hooks/useCartToken";

import LayoutWrapper from "../layout/layout-wrapper";
import { useCart } from "../hooks/useCart";

const Product = ({ data }) => {
  const {
    productSweater: {
      title,
      body,
      field_image: { alt: altImage },
      relationships: {
        field_image: { localFile },
        variations,
      },
    },
  } = data;
  const { addProductToCart, addProductToCartStatus } = useCart();
  const [activeSize, setActiveSize] = React.useState({
    id: "",
    size: "",
    price: "",
    type: "",
  });
  const { cartToken } = useCartToken();

  // const getSizeLabel = (sizeTitle) => sizeTitle.split(" - ")[1];

  React.useEffect(() => {
    const defaultSize = variations.find(
      (product) => product.relationships.attribute_size.name === 'M'
    );
    setActiveSize({
      id: defaultSize.drupal_id,
      size: defaultSize.relationships.attribute_size.name,
      price: defaultSize.price.formatted,
      type: defaultSize.internal.type,
    });
  }, []);

  const handleSizeChange = (e) => {
    const activeProductVariation = variations.find(
      (product) => product.drupal_id === e.key
    );
    setActiveSize({
      id: e.key,
      size: activeProductVariation.relationships.attribute_size.name,
      price: activeProductVariation.price.formatted,
      type: activeProductVariation.internal.type,
    });
  };

  const addItemToCart = () => {
    addProductToCart({
      cartToken,
      activeSize,
    });
  };

  const sizeMenu = (
    <Menu onClick={handleSizeChange}>
      {variations.map((product) => (
        <Menu.Item key={product.drupal_id}>{product.relationships.attribute_size.name}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <LayoutWrapper>
      <h1>{title}</h1>
      <Row>
        <Col xs={24} md={8}>
          <GatsbyImage image={getImage(localFile)} alt={altImage} />
        </Col>
        <Col xs={24} md={16}>
          <div dangerouslySetInnerHTML={{ __html: body?.processed }} />
          <Space>
            <span><strong>{activeSize.price}</strong></span>
            <Dropdown
              overlay={sizeMenu}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button>
                {activeSize.size} <DownOutlined />
              </Button>
            </Dropdown>
            <Button
              onClick={addItemToCart}
              type="primary"
              icon={<ShoppingCartOutlined />}
            >
              Add to cart
            </Button>
          </Space>
        </Col>
      </Row>
    </LayoutWrapper>
  );
};

export default Product;

export const query = graphql`
  query Product($id: String) {
    productSweater(id: { eq: $id }) {
      id
      title
      field_image {
        alt
      }
      relationships {
        field_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: AUTO
                layout: CONSTRAINED
                width: 250
              )
            }
          }
        }
        variations {
          drupal_id
          price {
            formatted
          }
          relationships {
            attribute_size {
              name
            }
          }
          internal {
            type
          }
        }
      }
      body {
        processed
      }
    }
  }
`;
