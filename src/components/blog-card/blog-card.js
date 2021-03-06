import React from "react";
import { Card } from "antd";

const BlogCard = ({ blogPost }) => {
  const { title, image, description, author } = blogPost;
  return (
    <Card
      cover={image}
      bordered={false}
    >
      <Card.Meta
        title={title}
        description={author}
      />
      {description}
    </Card>
  );
};

export default BlogCard;
