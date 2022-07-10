let a = 10;
let b = 7;
var MyQueue = function () {
  this.inputStack = [];
  this.outputStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inputStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.outputStack.length) {
    return this.outputStack.pop();
  } else {
    while (this.inputStack.length) {
      this.outputStack.push(this.inputStack.pop());
    }
    return this.outputStack.pop();
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.outputStack.length) {
    return this.outputStack[this.outputStack.length - 1];
  } else {
    while (this.inputStack.length) {
      this.outputStack.push(this.inputStack.pop());
    }
    return this.outputStack[this.outputStack.length - 1];
  }
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (!this.inputStack.length && !this.outputStack.length) {
    return true;
  } else {
    return false;
  }
};
