//class用法
{
    // class的基本定义和生成实例
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    let v_parent=new Parent('v');
    console.log('构造函数和实例',v_parent);
}

{
    //继承
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    class Child extends Parent{

    }
    console.log('继承',new Child());
}

{
    //继承传递参数
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    class Child extends Parent{
        constructor(name='child'){
            super(name);
            this.type='child';
        }
    }
    console.log('继承传递参数',new Child('hello'));
}

{
    //getter,setter
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
        get longName(){//读取longName属性值
            return 'mk'+this.name;
        }
        set longName(value){//设置longName属性值
            this.name=value;
        }
    }
    let v=new Parent();
    console.log('getter',v.longName);
    v.longName='hello';
    console.log('setter',v.longName);
}

{
    //静态方法
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
        static tell(){
            console.log('tell');
        }
    }
    Parent.tell();//只能通过类名来调用静态方法
}

{
    //静态属性
    class Parent{
        constructor(name='mukewang'){
            this.name=name;
        }
    }
    Parent.type='test';
    console.log('静态属性',Parent.type);
}