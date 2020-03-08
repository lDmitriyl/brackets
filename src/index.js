module.exports = function check(str, bracketsConfig) {
  let arr=[];
  let array=[];
  let res;
  for(let i = 0; i < bracketsConfig.length; i++){
    arr = arr.concat(bracketsConfig[i]);
  }
  str.split('').forEach((i,index)=>{
    array.length != 0 && array[array.length-1] === arr[arr.indexOf(i)+1] ? array.pop() :
    arr.indexOf(i) % 2 == 0 ? array.push(i) :
    array[array.length-1] === arr[arr.indexOf(i)-1] ? array.pop() : res = 1; 
  })
 
    return !res && array.length == 0 ? true : false;
}
