import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Distributed } from "../components/distributed";

const Home: NextPage = () => {
  return (
    <Flex direction="column" width="100%">
      <Distributed />
    </Flex>
  );
};

export default Home;
