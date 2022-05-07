import { hashBlockchain } from "./blockchain.helpers";
import { Block, Node } from "./blockchain.types";

const Root: Block = {
  blockId: 1,
  nonce: 11316,
  data: "",
  prev: "0000000000000000000000000000000000000000000000000000000000000000",
};

const Block2: Block = {
  blockId: 2,
  nonce: 35230,
  data: "",
  prev: Root,
};

const Block3: Block = {
  blockId: 3,
  nonce: 12937,
  data: "",
  prev: Block2,
};

const Block4: Block = {
  blockId: 4,
  nonce: 35990,
  data: "",
  prev: Block3,
};

const Head: Block = {
  blockId: 5,
  nonce: 56265,
  data: "",
  prev: Block4,
};

export const getNode = (id: number) => ({
  nodeId: id,
  length: 5,
  head: Head,
});

export const nodes = [getNode(1), getNode(2), getNode(3)];
