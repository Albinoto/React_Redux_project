import React, { useState, useEffect } from "react";
import Container from "./styled/Container";
import Button from "./styled/Button";
import Stack from "./styled/Stack";
import Box from "./styled/Box";
import InputWrapper from "./styled/Input";
import { ReactComponent as SearchIcon } from "../images/search-media.svg";

const HomeBody = () => {
  return (
    <Container mt="fullwidth">
      <Container mt="96px">
        <Stack justify="space-between" align="end">
          <h4>search your photos</h4>
          <p
            style={{
              color: "var(--grey-700)",
            }}
          >
            Richieste: 50/50
          </p>
        </Stack>
        <Box mt="24px">
          <Stack
            width="fit-content"
            bg="grey.900"
            borderRadius="100px"
            border="1px solid"
            borderColor={"grey.700"}
            px="18px"
            style={{
              overflowX: "hidden",
            }}
          >
            <InputWrapper
              placeholder="cerca la tua foto"
              border="none"
              pl="0px"
              value="react"
              onChange={() => {
                return;
              }}
            />
            <Button
              rightIcon={<SearchIcon />}
              isLoading={false}
              disabled={false}
              variant="text"
              iconColor="grey.700"
              bg="grey.900"
            />
          </Stack>
        </Box>
      </Container>
    </Container>
  );
};

export default HomeBody;
