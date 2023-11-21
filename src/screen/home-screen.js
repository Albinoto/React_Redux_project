import React from "react";
import Layout from "../components/layout";
import Box from "../components/styled/Box";
import Container from "../components/styled/Container";
import Stack from "../components/styled/Stack";
import InputWrapper from "../components/styled/Input";
import Skeleton from "../components/styled/Skeleton";
import Button from "../components/styled/Button";

const HomePage = () => {
  return (
    <Layout>
      <Container>
        <h1>Home</h1>
        <Stack spacing="50px">
          <Box
            width="100px"
            height="100px"
            border="1px solid"
            borderColor="red"
            borderRadius="16px"
            my="50px"
            bg="green"
          ></Box>
          <Box
            width="100px"
            height="100px"
            border="1px solid"
            borderColor="red"
            borderRadius="16px"
            my="50px"
            bg="green"
          ></Box>
          <Box
            width="100px"
            height="100px"
            border="1px solid"
            borderColor="red"
            borderRadius="16px"
            my="50px"
            bg="green"
          ></Box>
          <Box
            width="100px"
            height="100px"
            border="1px solid"
            borderColor="red"
            borderRadius="16px"
            my="50px"
            bg="green"
          ></Box>
        </Stack>
        <Box my="96px">
          <InputWrapper placeholder="text" />
        </Box>
        <Skeleton
          width="300px"
          height="300px"
          borderRadius="16px"
          variant="circle"
        />
        <Stack spacing='24px' mt='96px' align='center'>
          <Button size='xl' variant='contained'>Contained</Button>
          <Button size='md' variant='outlined'>Outline</Button>
          <Button size='lg' variant='text'>Text</Button>
          <Button size='xl' variant='disabled'>Disabled</Button>
        </Stack>
      </Container>
    </Layout>
  );
};

export default HomePage;
