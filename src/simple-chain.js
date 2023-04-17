const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value === "undefined") {
      this.chain.push("( )");
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(index) {
    if (typeof index !== "number" || index > this.chain.length || index < 1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(index - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
