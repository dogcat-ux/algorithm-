//稳定
//n*n
function selectSort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      if(a[i]>a[j]){
        [a[i],a[j]]=[a[j],a[i]];
      }
    }
  }
  return a;
}

console.log(selectSort([1, 2, 2, 2, 5, 132, 21, 12]))
console.log(selectSort([10, 213, 0, 0, 45, 6]))
console.log(selectSort([10, 213, 0, 0, 45, 6,45,1,2]))
