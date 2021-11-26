import React from "react";
import { Menu } from 'antd';

import * as styles from './nav-bar.module.scss';
import { Cart } from "../cart/cart";

const Navbar = () => (
  <Menu className={styles.menu} mode="horizontal">
    {/* TODO: create gatsby links for these items */}
    <Menu.Item key="home">Home</Menu.Item>
    <Menu.Item key="blog">Blog</Menu.Item>
    <Menu.Item key="products">Products</Menu.Item>
    <Menu.Item key="cart"><Cart /></Menu.Item>
  </Menu>
);

export default Navbar;
