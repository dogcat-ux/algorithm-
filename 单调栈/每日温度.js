/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  let stack=[];
  let n=temperatures.length;
  let res = new Array(n).fill(0);
  stack.push(0);
  for(let i=1;i<temperatures.length;i++){
    //栈顶元素
    while(stack.length&&temperatures[stack[stack.length-1]]<temperatures[i]){
      //可以记录了
      let j=stack.pop();
      // res[j]=res[j]?res[j]+1:1;
      res[j]=i-j;
    }
    //不满足条件，可以入栈了
    stack.push(i);
  }
  return res;
};
console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))
