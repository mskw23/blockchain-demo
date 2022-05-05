import { expose } from "comlink";
import sha256 from "crypto-js/sha256";
import { Block } from "../components/block/block.component";

export class BlockWorker {
  private readonly maxNounce: number = 500000;
  private readonly difficulty: number = 4;
  private get pattern() {
    let p = "";
    for (let x = 0; x < this.difficulty; x++) {
      p += "0";
    }
    return p;
  }

  public isHashValid = (hash: string) => {
    return hash.toString().substr(0, this.difficulty) === this.pattern;
  };

  public async mine(block: Block): Promise<any> {
    return new Promise((res, rej) => {
      for (let x = 0; x <= this.maxNounce; x++) {
        const hash = sha256(`${block.blockId}${x}${block.data}${block.prev}`);
        if (hash.toString().substr(0, this.difficulty) === this.pattern) {
          return res(hash.toString());
        }
      }
      rej("Unable to find correct nounce!");
    });
  }
}

expose(BlockWorker);
