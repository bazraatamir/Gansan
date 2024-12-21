import React from "react";
import Hero from "./../componenets/hero";
import Features from "../componenets/Features";
import Products from "../componenets/products";
import Testimeniols from "../componenets/testimeniols";
import Layout from "../componenets/layout";

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
