import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  Box,
  Flex,
  Stack,
  Button,
  Drawer,
  Portal,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <div className="Navbar">
      <Box px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={4}>
            <Link to="#">About Me</Link>
            <Link to="#">Projects</Link>
            <Link to="#">My Coding Journey</Link>
            <Link to="#">Contact Me</Link>
          </Stack>

          <Drawer.Root placement="end">
            <Drawer.Trigger asChild>
              <Button>Menu</Button>
            </Drawer.Trigger>

            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.CloseTrigger />

                  <Drawer.Header>Menu</Drawer.Header>

                  <Drawer.Body>
                    <Stack spacing={4}>
                      <Link to="/">Home</Link>
                      <Link to="/about">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/mycodingjourney">My Coding Journey</Link>
                      <Link to="/contact">Contact Me</Link>
                    </Stack>
                  </Drawer.Body>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Flex>
      </Box>
    </div>
  );
}
