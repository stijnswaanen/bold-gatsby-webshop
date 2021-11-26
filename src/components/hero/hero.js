import { Button } from "antd";
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
          {/* TODO: add links */}
        <Button type="primary">Discover products</Button>
        <Button>Blog</Button>
      </div>
    </div>
  );
};

export default Hero;
