// iterator和for...of循环
{
    let arr=['hello','world'];
    let map=arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    //为对象手动添加iterator接口
    let obj={
        start:[1,2,3],
        end:[6,7,8],
        [Symbol.iterator](){
            let self=this;
            let index=0;
            let arr=self.start.concat(self.end);
            let len=arr.length;
            return {
                next(){
                    if(index<len){
                        return {
                            value:arr[index++],
                            done:false
                        }
                    }else{
                        return {
                            value:undefined,
                            done:true
                        }
                    }
                }
            }
        }
    }
    for(let key of obj){
        console.log(key);
    }
}