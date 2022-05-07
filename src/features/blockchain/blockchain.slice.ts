import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { nodes } from "./blockchain.const";
import { mineBlockchain } from "./blockchain.thunks";
import { BlockchainState, Node } from "./blockchain.types";

const initialState: BlockchainState = {
  nodes,
  pickedNodeId: 1,
  invalidNodeId: null,
};

export const blockchainSlice = createSlice({
  name: "blockchain",
  initialState,
  reducers: {
    pickNode: (state, action: PayloadAction<number>) => {
      state.pickedNodeId = action.payload;
    },
    changeData: (
      state,
      action: PayloadAction<{ nodeId: number; blockId: number; data: string }>
    ) => {
      state.nodes = state.nodes.map((n) => {
        if (n.nodeId === action.payload.nodeId) {
          let head = n.head;
          while (
            typeof head.prev !== "string" &&
            head.blockId !== action.payload.blockId
          ) {
            head = head.prev;
          }
          if (head.blockId !== action.payload.blockId) {
            // Problem while trying to correct block
            return n;
          }
          head.data = action.payload.data;
          return n;
        }
        return n;
      });
    },
    setInvalidNodeId: (state, action: PayloadAction<number | null>) => {
      state.invalidNodeId = action.payload;
    },
    resetNode: (
      state,
      action: PayloadAction<{ invalid: number; node: Node }>
    ) => {
      state.nodes = state.nodes.map((n) => {
        if (n.nodeId === action.payload.invalid) {
          return { ...action.payload.node, nodeId: action.payload.invalid };
        }
        return n;
      });
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(mineBlockchain.fulfilled, (state, action) => {
      state.nodes = state.nodes.map((n) => {
        if (n.nodeId === action.payload.nodeId) {
          let head = n.head;
          while (
            typeof head.prev !== "string" &&
            head.blockId !== action.payload.blockId
          ) {
            head = head.prev;
          }
          head.nonce = action.payload.nonce;
          return n;
        }
        return n;
      });
    });
  },
});

export const blockchainActions = blockchainSlice.actions;

export const blockchainReducer = blockchainSlice.reducer;
