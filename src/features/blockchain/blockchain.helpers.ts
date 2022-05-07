import { Node } from "./blockchain.types";
import { Block as BlockType } from "../../features/blockchain/blockchain.types";
import { getSHA256 } from "../../utils/functions";

export const hashBlockchain = (node: Node) => {
  const arr: any = [];
  let head: BlockType | string = node.head;
  while (typeof head !== "string") {
    arr.push({
      blockId: head.blockId,
      nonce: head.nonce,
      data: head.data,
      hash: "",
      prev: head.prev,
    });
    head = head.prev;
  }
  arr
    .slice()
    .reverse()
    .forEach((x, index) => {
      const newArr = arr.slice().reverse();
      x.prev =
        typeof x.prev == "string" ? x.prev : newArr[index - 1]?.hash ?? "";
      x.hash = getSHA256(x).toString();
    });
  return arr;
};

export const getHeadHashes = (nds: Node[]) =>
  nds.map((n) => {
    const blocks = hashBlockchain(n);
    const { hash } = blocks[0];
    return { hash, nodeId: n.nodeId };
  });
