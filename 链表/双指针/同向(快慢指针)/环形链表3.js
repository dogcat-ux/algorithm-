/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//哈希表
var detectCycle = function (head) {
  let set = new Set();
  while (head) {
    if (set.has(head)) {
      return head;
    }
    set.add(head);
    head = head.next;
  }
  return null;
};
//快慢指针
var detectCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast !== slow) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      let ptr = head;
      while (ptr !== slow) {
        ptr = ptr.next;
        slow = slow.next
      }
      return slow;
    }
  }
  return null;
};
