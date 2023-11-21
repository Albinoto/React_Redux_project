import React from "react";
import { ReactComponent as Logo } from "../images/logo-footer.svg";
import Container from "./styled/Container";
import Stack from "./styled/Stack";
import Box from "./styled/Box";

const Footer = () => {
  return (
    <>
      <Container size="fullwidth" mt={["36px", "96px"]} pd="72px">
        <Container>
          <Stack width="100%" justify="flex-start">
            <Stack align="start" spacing="20px">
              <Box>
                <Logo />
              </Box>
              <Stack
                direction="column"
                align="start"
                height="100%"
                spacing="20px"
              >
                <Box>pick me</Box>
                <Box color="grey.600"> Lorem ipsum</Box>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Container>
      <Box height={["64px", "72px"]} width="100%"></Box>
    </>
  );
};

export default Footer;
