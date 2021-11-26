import * as React from "react";
import Hero from "../components/hero/hero";
import FeaturedProducts from "../components/featured-products/featured-products";
import LayoutWrapper from "../layout/layout-wrapper";
import LatestBlogs from "../components/latest-blogs/latest-blogs";

const IndexPage = () => {
  return (
    <LayoutWrapper>
      <Hero />
      <div style={{ paddingTop: '48px'}}>
        <FeaturedProducts />
      </div>
      <div style={{ paddingTop: '48px'}}>
        <LatestBlogs />
      </div>
    </LayoutWrapper>
  );
};

export default IndexPage;