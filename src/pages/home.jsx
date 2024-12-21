import React from "react";
import Hero from "../components/hero";
import Features from "../components/Features";
import Products from "../components/products";
import Testimeniols from "../components/testimeniols";
import Layout from "../components/layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Features />
        <Products />
        <Testimeniols />
      </Layout>
    </div>
  );
};

export default Home;
