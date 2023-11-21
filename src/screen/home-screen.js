import React from "react";
import Layout from "../components/layout";
import Box from "../components/styled/Box";
import Container from "../components/styled/Container";
import Stack from "../components/styled/Stack";
import InputWrapper from "../components/styled/Input";
import Skeleton from "../components/styled/Skeleton";
import Button from "../components/styled/Button";
import Hero from "../components/Hero";
import HomeBody from "../components/HomeBody"

const HomePage = () => {
  return (
    <Layout>
      <Container size="fullwidth">
          <Hero />
          <HomeBody />
      </Container>
    </Layout>
  );
};

export default HomePage;
