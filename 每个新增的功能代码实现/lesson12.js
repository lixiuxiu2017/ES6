// Proxy 和 Reflect
{
   let obj={
       time:'2017-3-1',
       name:'lily',
       _r:123
   }
   let proxy=new Proxy(obj,{
       //拦截对象属性的读取
       get(target,key){
           return target[key].replace('2017','2018');
       },
       //拦截对象属性的设置
       set(target,key,value){
           if(key==='name'){
               return target[key]=value;//只能设置name属性值
           }else{
               return target[key];//其他属性都返回原来的值
           }
       },
       //拦截key in object操作
       has(target,key){
           if(key==='name'){
               return target[key];
           }else{
               return false;
           }
       }
   });
   console.log('get',proxy.time);

   proxy.time='2018';
   proxy.name='nacy';
   console.log('set',proxy.time,proxy.name);

   console.log('has','name' in proxy,'time' in proxy);
}