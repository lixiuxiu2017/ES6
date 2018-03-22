//Module模块化
/*
export let a=123;
export function test(){
    console.log('test');
}
export class Hello{
    test(){
        console.log('class');
    }
}
*/
let a=123;
function test(){
    console.log('test');
}
class Hello{
    test(){
        console.log('class');
    }
}
export default{//默认导出，不指定名字，import导入时就可以自定义名字
    a,
    test,
    Hello
}