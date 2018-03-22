//解构赋值
{
    let a,b,rest;
    [a,b]=[1,2];
    console.log(a,b);
}

{
    let a,b,rest;
    [a,b,...rest]=[1,2,3,4,5,6];
    console.log(a,b,rest);
}

{
    let a,b;
    ({a,b}={a:1,b:2});
    console.log(a,b);
}

{
    let a=1;
    let b=2;
    [a,b]=[b,a];
    console.log(a,b);
}