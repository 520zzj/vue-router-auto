let r=require.context('./pages',true,/.vue/)
let arr=[]
r.keys().forEach(item=>{
    let arrkeys=item.split(".")
   if(arrkeys.indexOf('index')!==-1){//如果不是主页
        arr.push({
            path:arrkeys[2],
            component:r(item).default
        })
   }else{
       arr.push({
           path:arrkeys[1]+'/'+arrkeys[2],
           component:r(item).default
       })
   }
})
export default arr;