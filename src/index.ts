import * as CryptoJS from "crypto-js";

class Block {
  /* variables */
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  /* constructor */
  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index
    this.hash = hash
    this.previousHash = previousHash
    this.data = data
    this.timestamp = timestamp
  }

  /* class methods */
  static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  static getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
  static validateStructure = (block: Block): boolean =>
    typeof block.index === "number" &&
    typeof block.hash === "string" &&
    typeof block.previousHash === "string" &&
    typeof block.data === "string" &&
    typeof block.data === "string";

  /* instance methods */
}

/* main */
const genesisBlock: Block = new Block(0, Block.calculateBlockHash(0, null, Block.getNewTimeStamp(), "initial block"), null, "initial block", Block.getNewTimeStamp());
let blockchain: Block[] = [genesisBlock];
const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimeStamp: number = Block.getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);
  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
  addBlock(newBlock);
  return newBlock;
};
const getHashForBlock = (block: Block): string => {
  return Block.calculateBlockHash(block.index, block.previousHash, block.timestamp, block.data);
}
const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
}
const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    getBlockchain().push(candidateBlock);
  }
}

createNewBlock("Hello");
createNewBlock("World!");

/* console print lines */
console.log(getBlockchain());

export { };