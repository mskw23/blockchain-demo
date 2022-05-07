import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "../../redux/store";

const getBlockchainState = (state: RootState) => state.blockchain;

export const selectNodes = createSelector(
  getBlockchainState,
  (auth) => auth.nodes
);

export const selectPickedNodeId = createSelector(
  getBlockchainState,
  (auth) => auth.pickedNodeId
);

export const selectPickedNode = createSelector(getBlockchainState, (auth) =>
  auth.nodes.find((n) => n.nodeId === auth.pickedNodeId)
);

export const selectInvalidNodeId = createSelector(
  getBlockchainState,
  (auth) => auth.invalidNodeId
);
