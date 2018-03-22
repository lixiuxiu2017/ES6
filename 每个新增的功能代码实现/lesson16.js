// Generator函数
{
    let tell=function* (){
        yield 'a';
        yield 'b';
        return 'c';
    };
    let k=tell();
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
}

{ //为原生JS对象添加默认遍历器接口
    let obj={};
    obj[Symbol.iterator]=function* (){
        yield 1;
        yield 2;
        yield 3;
    };
    for(let key of obj){
        console.log('value',key);
    }
}

{
    let state = function* () {
        while (1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

{ //抽奖的业务逻辑：抽完一次，次数减1
    let draw=function(count){
        //具体抽奖逻辑
        console.log(`剩余${count}次`);
    }
    let residue=function* (count){
        while(count){
            count--;//对次数的限制：每循环一次就减1
            yield draw(count);//执行具体的抽奖逻辑
        }
    }
    let star=residue(5);
    let btn=document.createElement('button');
    btn.id='start';
    btn.textContent='抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function(){
        star.next();//每单击一次按钮，就执行一次next方法
    },false);
}