let obj1={name:"Person1",age:5}
let obj2={age:5,name:"Person1"}
function Compare(x,y){
let res=true;
if(Object.keys(x).length==Object.keys(y).length){
  for(key in x){
    if(x[key]==y[key])continue;
    else{
      res=false;
      break;
    }
  }
}else{
  res=false
}
console.log(res)
}
Compare(obj1,obj2)