/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  if (bills[0] !== 5) return false;
  let map = {
    5: 1,
    10: 0,
    20: 0
  }
  for (let i = 1; i < bills.length; i++) {
    if (bills[i] === 5) {
      map["5"] += 1;
    } else {
      if (map["5"] !== 0) {
        if (bills[i] === 10) {
          map["10"] += 1;
          map["5"]-=1;
        }
        if (bills[i] === 20) {
          if(map["10"]>=1){
            map["20"] += 1;
            map["10"]-=1;
            map["5"]-=1;
          }else if(map["5"]>=3){
            map["20"] += 1;
            map["5"]=map["5"]-3;
          }
          else return false;
        }
      }else {
        return false;
      }
    }
  }
  return true;
};
console.log(lemonadeChange([5,5,5,10,20]))
console.log(lemonadeChange( [5,5,10,10,20]))
console.log(lemonadeChange( [5,5,10]))
console.log(lemonadeChange( [10,10]))
