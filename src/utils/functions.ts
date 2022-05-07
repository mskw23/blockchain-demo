import { BlockProps } from "../components/block/block.component";
import Worker from "worker-loader!./worker";
import sha256 from "crypto-js/sha256";
import { Remote, wrap } from "comlink";
import { BlockWorker } from "./worker";

let _webWorker: Remote<BlockWorker> | null = null;

export const getSHA256 = (block: BlockProps) => {
  return sha256(`${block.blockId}${block.nonce}${block.data}${block.prev}`);
};

export const initWorker = async () => {
  const RemoteChannel = wrap<typeof BlockWorker>(new Worker());
  _webWorker = await new RemoteChannel();
};

export const isHashValid = (hash: string) => {
  return hash.toString().substr(0, 4) === "0000";
};

export const mine = async (block: BlockProps) => {
  if (!_webWorker) throw new Error("Web Worker was not initialized properly!");
  return await _webWorker.mine(block);
};
