//修饰器decorator
{
    let readonly=function(target,name,descriptor){
        descriptor.writable=false;
        return descriptor;
    };
    class Test{
        @readonly  //修改类的行为，让类中的属性变成只读
        time(){
            return '2018-01-11';
        }
    }
    let test=new Test();
    /*test.time=function(){ //time不可修改，会出错
        console.log('reset time');
    };*/
    console.log(test.time());
}

{
    let typename=function(target,name,descriptor){
        target.myname='hello';//为目标类添加静态属性
    };

    @typename
    class Test{

    }
    console.log('类修饰器',Test.myname);
}