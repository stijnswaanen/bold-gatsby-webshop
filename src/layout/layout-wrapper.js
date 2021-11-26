import React from "react";
import { Layout } from "antd";
import Navbar from "../components/nav-bar/nav-bar";

import * as styles from "./layout-wrapper.module.scss";
import Logo from "../components/logo/logo";

const { Header, Content, Footer } = Layout;

const LayoutWrapper = ({ children }) => {
  const year = new Date().getFullYear();

  return (
    <Layout>
      <Header className={styles.header}>
        <Logo className={styles.header.logo} />
        <Navbar className={styles.header.navbar} />
      </Header>
      <Content>
        <div className={styles.content}>{children}</div>
      </Content>
      <Footer className={styles.footer}>Ordina Bold ©{year}</Footer>
    </Layout>
  );
};

export default LayoutWrapper;
