import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const Home = () => {
  const { toggleColorMode } = useColorMode(true);
  const formBackGround = useColorModeValue("gray.100", "gray.700");
  const [toggle, setToggle] = useState(false);

  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        direction={"column"}
        backgroundColor={formBackGround}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <Heading mb={6}> Log In </Heading>
        <Input
          placeholder="your email..."
          variant={"filled"}
          mb={3}
          type={"email"}
        />
        <Input
          placeholder="********"
          variant={"filled"}
          type="password"
          mb={6}
        />
        <Button colorScheme={"teal"}>Log in</Button>
        <Box
          position={"absolute"}
          top={2}
          right={2}
          cursor={"pointer"}
          onClick={() => {
            toggleColorMode(), setToggle(!toggle);
          }}
        >
          {toggle ? <IoMoon /> : <IoSunny />}
        </Box>
      </Flex>
    </Flex>
  );
};
export default Home;
