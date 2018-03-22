//对象的扩展
{
    let x=1;
    let y=2;
    let es5={
        x:x,
        y:y
    }
    let es6={
        x,
        y
    }
    console.log(es5,es6);

    let es5_method={
        hello:function(){
            console.log('hello');
        }
    };
    let es6_method={
        hello(){
            console.log('hello');
        }
    };
    console.log(es5_method.hello());
    console.log(es6_method.hello());
}

//属性名表达式
{
    let a='b';
    let es5_object={
        'a':1,
        'b':2
    };
    let es6_object={
        [a]:1
    };
    console.log(es5_object,es6_object);
}

{
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));
}