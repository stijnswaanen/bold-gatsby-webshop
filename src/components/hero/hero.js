import { Button } from "antd";
import { Link } from "gatsby";
import React from "react";

import * as styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.header}>
      <h1>
        Ordina <strong>Bold</strong> X-mas sweater shop
      </h1>
      <p className={styles.header__text}>
        Welcome to the Ordina <strong>Bold</strong> X-mas sweater shop and blog.
      </p>
      <div style={{ display: 'flex' }}>
        <Link to="/products"><Button type="primary">Discover products</Button></Link>
        <Link to="/blog"><Button>Blog</Button></Link>
      </div>
    </div>
  );
};

export default Hero;
