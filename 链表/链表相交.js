/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let B=headB;
  let A=headA;
  while(headA!==headB){
    if(headA) headA=headA.next;
    else headA=B;
    if(headB)headB=headB.next
    else headB=A;
  }
  return headA
};
