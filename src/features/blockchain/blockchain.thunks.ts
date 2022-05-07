import { createAsyncThunk } from "@reduxjs/toolkit";
import { BlockProps } from "../../components/block/block.component";
import { mine } from "../../utils/functions";

type MineBlockchainType = {
  block: BlockProps;
  blockId: number;
  nodeId: number;
};

export const mineBlockchain = createAsyncThunk(
  "blockchain/mine",
  async ({ block, blockId, nodeId }: MineBlockchainType) => {
    const nonce = await mine(block);
    return { nonce, blockId, nodeId };
  }
);
