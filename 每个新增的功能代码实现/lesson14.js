//Promise对象
{   //回调函数实现异步操作
    let ajax=function(callback){
        console.log('执行1');
        setTimeout(function(){
            callback&&callback.call();
        },1000);
    };
    ajax(function(){
        console.log('timeout1');
    });
}

{  //Promise对象实现异步操作
    let ajax=function(){
        console.log('执行2');
        return new Promise(function(resolve,reject){
            setTimeout(()=>resolve(),1000);
        });
    };
    ajax().then(()=>console.log('promise','timeout2'));
}

{ //Promise实例的then方法的链式写法
    let ajax=function(){
        console.log('执行3');
        return new Promise(function(resolve,reject){
            setTimeout(()=>resolve(),1000);
        });
    };
    ajax()
        .then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(()=>resolve(),2000);
        });
    })
        .then(()=>console.log('promise','timeout3'));
}

{ //catch方法的使用
    let ajax=function(num){
        console.log('执行4');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve();
            }else{
                throw new Error('出错了');
            }
        });
    };
    ajax(4).then(function(){
        console.log('log',6);
    }).catch(function(err){
        console.log('catch',err);
    });
}

{
    //所有图片加载完毕再添加到页面中
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img=document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img);
            };
            img.onerror=function(error){
                reject(error);
            };
        });
    }
    function showImgs(imgs){
        imgs.forEach(img=>document.body.appendChild(img));
    }
    Promise.all([
        loadImg('http://img4.imgtn.bdimg.com/it/u=1665207864,746409922&fm=27&gp=0.jpg'),
        loadImg('http://pic32.photophoto.cn/20140711/0011024086081224_b.jpg'),
        loadImg('http://pic4.nipic.com/20091121/3764872_215617048242_2.jpg')
    ]).then(showImgs);
}

{
    //有一个图片加载完毕就添加到页面中
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img=document.createElement('img');
            img.src=src;
            img.onload=function(){
                resolve(img);
            };
            img.onerror=function(error){
                reject(error);
            };
        });
    }
    function showImgs(img){
        let p=document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }
    Promise.race([
        loadImg('http://img4.imgtn.bdimg.com/it/u=1665207864,746409922&fm=27&gp=0.jpg'),
        loadImg('http://pic32.photophoto.cn/20140711/0011024086081224_b.jpg'),
        loadImg('http://pic4.nipic.com/20091121/3764872_215617048242_2.jpg')
    ]).then(showImgs);
}