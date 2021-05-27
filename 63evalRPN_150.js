/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-20 09:58:04
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-20 10:05:23
 */
/* 
leetcode 150
逆波兰表达式
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (let i = 0, len = tokens.length; i < len; i++) {
    const token = tokens[i];
    let num1, num2, result;
    switch (token) {
      case '+':
        num1 = stack.pop();
        num2 = stack.pop();
        result = parseInt(num2 + num1);
        stack.push(result);
        break;
      case '-':
        num1 = stack.pop();
        num2 = stack.pop();
        result = parseInt(num2 - num1);
        stack.push(result);
        break;
      case '*':
        num1 = stack.pop();
        num2 = stack.pop();
        result = parseInt(num2 * num1);
        stack.push(result);
        break;
      case '/':
        num1 = stack.pop();
        num2 = stack.pop();
        result = parseInt(num2 / num1);
        stack.push(result);
        break;

      default:
        stack.push(parseFloat(token));
        break;
    }
  }
  return stack.pop();
};

const arr = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
console.log(evalRPN(arr));
