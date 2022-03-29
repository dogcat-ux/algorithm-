// 方法二：一次遍历「穿针引线」反转链表（头插法）
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(null, head);
  let lNode = head;
  let rNode = head;
  //来到左节点前一个
  for (let i = 0; i < left - 1; i++) {
    lNode = lNode.next;
    rNode = rNode.next;
  }
  //来到右节点
  for (let i = left - 1; i < right; i++) {
    rNode = rNode.next;
  }
  //截断
  let end=rNode;
  let lNext=lNode.next
  rNode.next=null;
  // 第 4 步：同第 206 题，反转链表的子区间
  reverse(lNode.next);
  lNode.next=rNode;
  lNext.next=end;
  return dummy.next;
};

function reverse(head) {
  let cur = head;
  let pre = null;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}
