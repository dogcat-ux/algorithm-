/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
//注意点：
    //    1.哑结点
    //    2.每次找到值等于val的值后，删除掉同值节点后，不必迭代dummyHead
var removeElements = function (head, val) {
      let dummyHead = new ListNode(0);
      let temp = dummyHead;
      dummyHead.next = head;
      while (dummyHead && dummyHead.next) {
        if (dummyHead.next.val === val) {
          dummyHead.next = dummyHead.next.next;
        } else {
          dummyHead = dummyHead.next;
        }
      }
      return temp.next;
    };

