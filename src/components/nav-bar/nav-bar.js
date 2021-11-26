import React from "react";
import { Menu } from 'antd';

import * as styles from './nav-bar.module.scss';
import { Cart } from "../cart/cart";
import { Link } from "gatsby";

const Navbar = () => (
  <Menu className={styles.menu} mode="horizontal">
    <Link to="/"><Menu.Item key="home">Home</Menu.Item></Link>
    <Link to="/blog"><Menu.Item key="blog">Blog</Menu.Item></Link>
    <Link to="/products"><Menu.Item key="products">Products</Menu.Item></Link>
    <Link to="/cart"><Menu.Item key="cart"><Cart /></Menu.Item></Link>
  </Menu>
);

export default Navbar;
