/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(num) {
  //通过要走的步数标记转向
  //向左 [x,y]
  let dr=[[0,1],[1,0],[0,-1],[-1,0]]
  let dIndex=0;
  let res=new Array(num);
  let i=0;
  let j=0;
  let count=1;
  let visted=new Array(num);
  //右转下 下转左 左转上 上转右
  for (let i = 0; i <num; i++) {
    res[i]=new Array(num).fill(0);
    visted[i]=new Array(num).fill(false);
  }
  //ix jy
  //要先碰壁了才知道碰壁，所以会有回溯的过程
  while(i>=0&&j>=0&&i<num&&j<num&&count<=num**2){
    res[i][j]=count++;
    visted[i][j]=true;
    let [nx,ny]=dr[dIndex];
    nx=nx+i;
    ny=ny+j;
    if(nx>=num||ny>=num||nx<0||ny<0||visted[nx][ny]){
      //转变方向
      dIndex=(dIndex+1)%4;
      //i,j前进
      [i,j]=[i+dr[dIndex][0],j+dr[dIndex][1]];
    }else{
      //保持方向
      [i,j]=[nx,ny];
    }
  }
  return res;
};
console.log(generateMatrix(3))
