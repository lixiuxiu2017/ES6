//Symbol新增数据类型
{
    let a1=Symbol();
    let a2=Symbol();
    console.log(a1===a2);

    let a3=Symbol.for('foo');
    let a4=Symbol.for('foo');
    console.log(a3===a4);
}

{
    let a1=Symbol.for('abc');
    let obj={
        [a1]:123,
        'abc':456,
        'c':788
    }
    console.log('obj',obj);

    for(let [key,value] of Object.entries(obj)){
        console.log('for of',key,value);
    }

    Object.getOwnPropertySymbols(obj).forEach(function(item){
        console.log('symbol',item,obj[item]);
    })

    Reflect.ownKeys(obj).forEach(function(item){
        console.log('ownkeys',item,obj[item]);
    })
}