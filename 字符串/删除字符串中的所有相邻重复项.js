/**
 * @param {string} s
 * @return {string}
 */
//消消乐
var removeDuplicates = function (s) {
  let arr=Array.from(s);
  let stack=[];
  for (let j = 0; j < arr.length; j++) {
    if(stack[stack.length-1]===arr[j]){
      stack.pop();
    }else{
      stack.push(arr[j])
    }
  }
  return stack.join("");
}
console.log(removeDuplicates("abbaca"))
// var removeDuplicates = function (s) {
//   let arr = Array.from(s);
//   let i = 0;
//   let len = s.length;
//   while (i < len&&i>=0) {
//     let count = 0;
//     let index = i;
//     while (i < len - 1 && arr[i] === arr[i + 1]) {
//       count++;
//       i++;
//     }
//     count && arr.splice(index, count + 1);
//     i =(i === index) ? i + 1 : index-1;
//   }
//   return arr.join("");
// };
