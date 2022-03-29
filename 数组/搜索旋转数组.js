function search(nums, target) {
  if(nums.length<=0){
    return -1;
  }
  let left=0;
  let right=nums.length-1;
  while(left<right){
    let mid=Math.floor((left+right)/2)
    //中点大于右值，前半部分单调上升，后半部分有拐点
    //中点小于右值，前半部分有拐点，后半部分单调
    //中点等于右值（不存在）
    if(nums[mid]>nums[right]){
      if(target>nums[mid]){
        //目标值在后半部分，断点前
        return search(nums.slice(mid+1,right+1),target)+mid+1
      }else if(target<nums[mid]){
        //目标值俩边都有可能
        let leftRes=search(nums.slice(left,mid),target)
        let rightRes=search(nums.slice(mid+1,right+1),target)
        if(leftRes!==-1)return leftRes+left;
        if(rightRes!==-1)return rightRes+mid+1;
        return -1;
      }else{
        return mid;
      }
    }else{
      if(target>nums[mid]){
        //目标值俩边都有可能
        let leftRes=search(nums.slice(left,mid),target)
        let rightRes=search(nums.slice(mid+1,right+1),target)
        if(leftRes!==-1)return leftRes+left;
        if(rightRes!==-1)return rightRes+mid+1;
        return -1;
      }else if(target<nums[mid]){
        //目标值在前半部分，断点后
        return search(nums.slice(left,mid),target)+left;
      }else{
        return mid;
      }
    }
  }
  if(nums[left]===target) return left;
  return -1;
}

console.log(search([4,5,6,7,0,1,2],0))
