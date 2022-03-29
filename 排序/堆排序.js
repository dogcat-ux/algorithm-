//把数组当成层次遍历的一颗完全二叉树
//一颗完全二叉树，一个节点i,的左子节点是c1=2i+1,右子节点c2=2i+2
//维护堆的性质
function heapify(arr, n, i) {
  let max = i;
  let c1 = 2 * i + 1;
  let c2 = 2 * i + 2;
  if (c1 < n && arr[max] < arr[c1]) {
    max = c1;
  }
  if (c2 < n && arr[max] < arr[c2]) {
    max = c2;
  }
  if (max !== i) {
    [arr[max], arr[i]] = [arr[i], arr[max]];
    //数组，数组长度，最大值
    //树，数组长度，堆顶
    heapify(arr, n, max)
  }
}

//先变堆--》抽出堆顶（最大元素）==》变堆====》抽出第二大元素
function buildHeap(arr, n) {
  //建堆
  // let i = n;
  //以最后一个子元素的父节点开头
  for (let j = n / 2 - 1; j >= 0; j--) {
    heapify(arr, n, j)
  }
  //排序
  for (let i = n - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0)
  }
}

function heapSort(arr) {
  buildHeap(arr, arr.length);
  return arr;
}

console.log(
    heapSort([30, 20, 10, 50, 60, 70])
)
