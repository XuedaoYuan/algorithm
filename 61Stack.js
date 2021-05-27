function Stack() {
  this.stack = [];
}

Stack.prototype.push = function (val) {
  this.stack.push(val);
};

Stack.prototype.pop = function () {
  if (this.stack && this.stack.length > 0) {
    return this.stack.pop();
  }
  return null;
};
Stack.prototype.top = function () {
  if (this.stack && this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
  return null;
};
Stack.prototype.print = function () {
  console.log(this.stack.join('->'));
};

module.exports = {
  Stack
};
