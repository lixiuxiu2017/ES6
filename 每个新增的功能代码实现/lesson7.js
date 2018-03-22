//函数的扩展
{
    function test(x,y='world'){
        console.log('默认值',x,y);
    }
    test('hello');
    test('hello','laa');
}

{
    let x='hello';
    function test2(x,y=x){
        console.log('作用域',x,y);
    }
    test2('world');
}

{
    let x='hello';
    function test3(y=x){
        let x='world';
        console.log('作用域',x,y);
    }
    test3();
}

{
    function test4(...arg){
        for(var item of arg){
            console.log('rest',item);
        }
    }
    test4(1,2,3,'a');
}

{
    let arrow=v=>v*2;
    console.log('arow',arrow(3));
}

{
    function tail(x){
        console.log('tail',x);
    }
    function fx(x){
        return tail(x);
    }
    fx(123);
}