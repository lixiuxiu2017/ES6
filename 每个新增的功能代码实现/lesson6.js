//数组的扩展
{
    let arr=Array.of(2,5,7,8,9);
    console.log('arr=',arr);
}

{
    let p=document.querySelectorAll('p');
    let pArr=Array.from(p);
    pArr.forEach(function(item){
        console.log(item.textContent);
    })
}

{
    console.log(Array.from([1,2,3],function(item){return item*2;}));
}

{
    console.log('fill',['a','b','c'].fill(7,1,3));
}

{
    for(let index of ['a','b','c'].keys()){
        console.log('key',index);
    }

    for(let value of ['a','b','c'].values()){
        console.log('value',value);
    }

    for(let [index,name] of ['a','b','c'].entries()){
        console.log('entry',index,name);
    }
}

{
    console.log([1,2,3,4,5,6].find(function(item){return item>3;}));
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3;}));
}

{
    console.log('number',[1,2,NaN].includes(1));
    console.log('number',[1,2,NaN].includes(NaN));
}