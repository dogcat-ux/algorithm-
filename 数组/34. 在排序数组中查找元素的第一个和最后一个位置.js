function searchRange(nums, target){
  let left=0;
  let right=nums.length-1;
  while(left<right){
    let mid=Math.floor((left+right)/2);
    if(nums[mid]>target){
      right=mid-1;
    }else if(nums[mid]<target){
      left=mid+1;
    }else{
      left=mid-1;
      right=mid+1
      while(nums[left]===target&&nums[right]===target&&left>0&&right<nums.length-1){
        left--;
        right++;
      }
      while(nums[left]===target&&left>0){
        left--;
      }
      while(nums[right]===target&&right<nums.length-1){
        right++;
      }
      if(nums[left]===target&&nums[right]===target)return [left,right]
      if(nums[right]===target)return [left+1,right]
      if(nums[left]===target)return [left,right-1]
      return [left+1,right-1]
    }
  }
  if(nums[left]===target)return [left,left]
  return [-1,-1]
}

// console.log(searchRange([5,7,7,8,8,10],8))
console.log(searchRange([2,2],2))
