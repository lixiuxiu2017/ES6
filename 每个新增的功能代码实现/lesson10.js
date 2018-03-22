//set和map数据结构
{
    let list=new Set();
    list.add(5);
    list.add(7);
    console.log('size',list.size);
}

{
    let arr=[1,2,3,4,5];
    let list=new Set(arr);
    console.log('size',list.size);

}

{
    let list=new Set();
    list.add(5);
    list.add(7);
    list.add(7);
    console.log('list',list);
}

{
    let arr=['add','delete','has','clear'];
    let list=new Set(arr);
    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log('clear',list);
}

{
    let arr=['add','delete','has','clear'];
    let list=new Set(arr);
    for(let key of list.keys()){
        console.log('key',key);
    }
    for(let value of list.values()){
        console.log('value',value);
    }
    for(let value of list){
        console.log('list-value',value);
    }
}

{
    let weaklist=new WeakSet();
    let obj={};
    weaklist.add(obj);
    console.log('weaklist',weaklist);
}

{
    let map=new Map();
    let arr=['123'];
    map.set(arr,456);
    console.log('map',map,map.get(arr));
}

{
    let map=new Map([['a',123],['b',456]]);
    console.log('map',map);
}