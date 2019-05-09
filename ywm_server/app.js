//1.复制服务器端模块
//2.引入第三方模块
const mysql=require("mysql");
const express=require("express");
const bodyParse=require("body-parser")
const cors=require("cors")

//引入express-session组件
const session=require("express-session");
//3.创建连接池
const pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"ywm"

})

//4.创建express对象
var server=express();
server.use(session({
  secret:"128位字符串",    //配置密钥
  resave:true,           //每次请求是否更新数据
  saveUninitialized:true  //保存初始化数据
}))
//4.1配置允许列表
server.use(cors({
  origin:["http://127.0.0.1:8081","http://localhost:8081"],
  credentials:true
}))
//5.绑定监听端口
server.listen(3000);
//5.1指定一个静态目录
server.use(express.static("public"));
server.use(bodyParse.urlencoded({extended:false}))
//6.处理用户登录请求
server.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    pool.query("select lid from ywm_user where uname=? and upwd=md5(?)",[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length==0){
            res.send({code:-1,msg:"用户名或密码有误"});
          }else{
            //将用户登录凭证保存在session对象中
            //获取uid
            var uid=result[0].lid;
            //保存到session对象中
            req.session.uid=uid;
            req.session.uname=uname;
            res.send({code:1,msg:"登录成功"})
          }
    })
  })
//个人中心信息
server.get("/personal",(req,res)=>{
  var uname=req.query.uname;
  pool.query("select * from ywm_userData where uname=?",[uname],(err,result)=>{
      if(err) throw err;
      if(result.length==0){
          res.send({code:-1,msg:"查询失败"});
        }else{
          res.send(result)
        }
  })
})

//商品列表
server.get("/getGoodlist",(req,res)=>{
  var range=req.query.range;
  var pno=req.query.pno;
  var pagesize=req.query.pagesize;
  var  kw=req.query.kwords;
  if(!pno){pno=1};
  if(!pagesize){pagesize=4};
  var obj={};
  var progress=0;
  var offset=(pno-1)*pagesize
  var ps=parseInt(pagesize)
  var sql="select id,img_url,title,price,num from ywm_lists "
  if(kw){
    var kws=kw.split(" ");
    kws.forEach((elem,i,arr) => {
      arr[i]=`title like '%${elem}%'`
    });
    var where=kws.join(" and ")
    sql+=` where ${where} `
  }
  if(range){
    sql+=range
  }
  sql+=" limit ?,?"
  
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj)
    }
  })
  var sql="select count(id) as c from ywm_lists";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    progress+=50;
    var num=Math.ceil(result[0].c/pagesize);
    obj.pagecount=num;
    if(progress==100){
      res.send(obj)
      
    }
  })
})
server.get("/getGoodlist1",(req,res)=>{
  var range=req.query.range;
  var pno=req.query.pno;
  var  kw=req.query.kwords;
  var pagesize=4;
  var obj={};
  var offset=pno*pagesize
  var ps=parseInt(pagesize)
  var sql="select id,img_url,title,price,num from ywm_lists "
  if(kw){
    var kws=kw.split(" ");
    kws.forEach((elem,i,arr) => {
      arr[i]=`title like '%${elem}%'`
    });
    var where=kws.join(" and ")
    sql+=` where ${where} `
  }
  if(range){
    sql+=range
  }
  sql+=" limit ?,?"
  pool.query(sql,[offset,ps],(err,result)=>{
    if(err)throw err;
    obj.data=result;
      res.send(obj)
  })
  
})
//商品列表搜索功能
server.get("/getSearch",(req,res)=>{
  var  kw=req.query.kwords;
  var kws=kw.split(" ");
  kws.forEach((elem,i,arr) => {
    arr[i]=`title like '%${elem}%'`
  });
  var where=kws.join(" and ")
  var sql=`select * from ywm_lists where ${where}`
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);

  })
})

//商品详情页
server.get("/getDetails",(req,res)=>{
  var pid=req.query.pid;
  var sql="select * from ywm_details where pid=?";
  pool.query(sql,[pid],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send(result);
    }
  })
  
})

//购物车列表
server.get("/getCart",(req,res)=>{
  //1:参数 uid 当前登录用户编号
  //获取session uid
  var uid = req.session.uid;
  //如果没有登录凭证
  if(!uid){res.send({code:-1,msg:"请登录",data:[]})
  //停止程序执行
  return;
}
  //2:sql
  var sql = "SELECT pid,pic,pname,price1,price2,count";
  sql+=" FROM ywm_cart";
  sql+=" WHERE uid = ?"
  //3:json
  pool.query(sql,[uid],(err,result)=>{
     if(err)throw err;
     res.send({code:1,data:result})
  });
});


//删除购物车中多个商品
server.get("/delM",(req,res)=>{
  var ids=req.query.ids;
  var sql="delete from ywm_cart where pid in("+ids+")";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    if(result.affectedRows==0){
      res.send({code:-1,msg:"删除失败"})

    }else
    res.send({code:1,msg:"删除成功"})
  })
})


//修改购物车商品数量
server.post("/countUpdate",(req,res)=>{
  var count=req.body.count;
  var pid=req.body.pid;
  pool.query("update ywm_cart set count=? where pid=?",[count,pid],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0)
    res.send("success")
  })
})

//加入购物车
server.post("/insert",(req,res)=>{
  var uid=req.session.uid;
  if(!uid){res.send({code:-1,msg:"请登录",data:[]})
  //停止程序执行
  return;
}
  var pic=req.body.pic;
  var pname=req.body.pname;
  var price1=req.body.price1;
  var price2=req.body.price2;
  var count=req.body.count;
  pool.query("insert into ywm_cart set pic=?,pname=?,price1=?,price2=?,count=?,uid=?",[pic,pname,price1,price2,count,uid],(err,result)=>{
    if(err)throw err;
      res.send({code:1,msg:"成功加入购物车"});
  })
})



//头像上传
//加载模板  multer
const fs =require("fs")
const multer=require("multer")
//创建upload对象并且指定上传临时文件目录
var upload=multer({dest:"/public/upload/"});
//接收post请求 /uploadFile
server.post("/uploadFile",upload.single("file"),(req,res)=>{
  //判断文件大小不能超过2MB
  var size=req.file.size/1000/1000;
  if(size>2){
    res.send({code:-1,msg:"上传文件过大，请重选择"})
    return;
  }
  //判断文件必须图片
  var type=req.file.mimetype;
  var idx=type.indexOf("image");
  if(idx==-1){
    res.send({code:-1,msg:"上传文件类型不正确，请重新上传"})
    return;
  }
  //获取原文件
  var src=req.file.originalname;
  //创建新文件名
  var ft=new Date().getTime();
  var tn=Math.floor(Math.random()*9999);
  var i3=src.lastIndexOf(".")  //查找后缀.下标
  var suff=src.substring(i3)  //从i3位置开始截取
  var des=__dirname+"/public/upload/"+ft+tn+suff;
  var pic=des.split("/public/upload/")[1]
  var pname=req.session.uname;
  var uid=req.session.uid;

  pool.query('INSERT INTO ywm_personPic set pname=?,uid=?,pic=?',[pname,uid,pic],(err,result)=>{
    if(err)throw err;
    //将临时文件移动upload目录下
    //返回成功信息
    fs.renameSync(req.file.path,des);
    res.send({code:1,msg:"上传成功"})
  })
})

//显示图片
server.get("/getPic",(req,res)=>{
  var pname=req.query.pname;
  var sql="select * from ywm_personPic where pname=?";
  pool.query(sql,[pname],(err,result)=>{
    if(err)throw err;
      res.send(result);
    
  })
  
})

