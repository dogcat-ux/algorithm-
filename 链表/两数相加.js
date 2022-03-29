/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let l3 = new ListNode(null)
  let l4 = l3;
  let temp = 0;
  while (l1 || l2) {
    l3.next = new ListNode(null);
    l3 = l3.next;
    if(l1&&l2){
      l3.val = (l1.val + l2.val + temp) % 10;
      temp = Math.floor((l1.val + l2.val + temp) / 10);
      l1 = l1.next;
      l2 = l2.next;
    }else if(l1){
      l3.val = (l1.val + temp) % 10;
      temp = Math.floor((l1.val +  temp) / 10);
      l1 = l1.next;
    }else if(l2){
      l3.val = (l2.val + temp) % 10;
      temp = Math.floor((l2.val +   temp) / 10);
      l2 = l2.next;
    }
  }
  if(temp!==0)l3.next=new ListNode(temp);
  return l4.next;
};
