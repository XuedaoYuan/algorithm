/*
 * @Author: XueDao.Yuan
 * @Date: 2021-05-20 11:48:40
 * @Last Modified by: XueDao.Yuan
 * @Last Modified time: 2021-05-21 15:17:01
 */
/* 
leetcode 71
简化路径
*/
var simplifyPath = function (path) {
  const stack = [];
  const segments = path.split(/\/+/);
  for (let segment of segments) {
    switch (segment) {
      case '..':
        stack.pop();
        break;
      case '.':
      case '':
        break;

      default:
        stack.push(segment);
        break;
    }
  }
  return '/' + stack.join('/');
};

// console.log(simplifyPath('/home/'));
// console.log(simplifyPath('/home/a/./b/'));
// console.log(simplifyPath('/home/a/../../b/c/./d/../f/'));
console.log(simplifyPath('/a//b////c/d//././/..'));
// console.log(simplifyPath('/...')); // /
// console.log(simplifyPath('/.../')); //  /.../
