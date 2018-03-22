{
    // map和array数据结构的横向对比：增，查，改，删
    let map=new Map();
    let array=[];
    //增
    map.set('t',1);
    array.push({t:1});
    console.log('map-array-add',map,array);
    //查
    let map_exist=map.has('t');
    let array_exist=array.find(item=>item.t);
    console.log('map-array-query',map_exist,array_exist);
    //改
    map.set('t',2);
    array.forEach(item=> item.t ? item.t=2 : '');
    console.log('map-array-modify',map,array);
    //删
    map.delete('t');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log('map-array-delete',map,array);
}

{
    // set和array数据结构的横向对比：增，查，改，删
    let set=new Set();
    let array=[];
    //增
    set.add({t:1});
    array.push({t:1});
    console.log('set-array-add',set,array);
    //查
    let set_exist=set.has({t:1});//返回false，因为has查找的是引用类型的内存地址
    let array_exist=array.find(item=>item.t);
    console.log('set-array-query',set_exist,array_exist);
    //改
    set.forEach(item=> item.t ? item.t=2 : '');
    array.forEach(item=> item.t ? item.t=2 : '');
    console.log('set-array-modify',set,array);
    //删
    set.forEach(item=>item.t ? set.delete(item): '');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log('set-array-delete',set,array);
}

{
    //map,set,object的横向对比
    let item={t:1};
    let map=new Map();
    let set=new Set();
    let obj={};
    //增
    map.set('t',1);
    set.add(item);
    obj['t']=1;
    console.log('map-set-obj-add',map,set,obj);
    //查
    console.log('map-set-obj-query',{
        map_exist: map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    });
    //改
    map.set('t',2);
    item.t=2;
    obj['t']=2;
    console.log('map-set-obj-modify',map,set,obj);
    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log('map-set-obj-delete',map,set,obj);

}