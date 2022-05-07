export interface Block {
  blockId: number;
  nonce: number;
  data: string;
  prev:
    | Block
    | "0000000000000000000000000000000000000000000000000000000000000000";
}

export interface Node {
  nodeId: number;
  length: number;
  head: Block;
}

export interface BlockchainState {
  nodes: Node[];
  pickedNodeId: number;
  invalidNodeId: number | null;
}
