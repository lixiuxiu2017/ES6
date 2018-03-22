//字符串的扩展
{
    console.log('a','\u0061');

    console.log('s','\u20BB7');
    console.log('s','\u{20BB7}');

}
{
    let s='𠮷';
    console.log('length',s.length);
}
{
    let str='\u{20bb7}abc';
    for(let i=0;i<str.length;i++){
        console.log('es5',str[i]);
    }
}

{
    let str='\u{20bb7}abc';
    for(let i of str){
        console.log('es6',i);
    }
}

{
    let name='list';
    let info='hello world!';
    let message=`I am ${name},${info}`;
    console.log(message);
}