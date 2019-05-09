<template>
    <div id="app-login">
        <div id="login_header">
            <a href="#" @click="$router.back(-1)"><span class="mui-icon mui-icon-arrowleft"></span></a>
            <h1>会员登录</h1>
        </div>
        <div id="login_contain">
            <div id="logo">
                <img src="../img/logo02.png" alt="">
            </div>
        </div>
        <div id="login"> 
            <div>
                <a href="javascript:;">
                    <img src="../img/zy_icon_user.png" alt="">
                    <input type="text" placeholder="手机号/用户名/邮箱" v-model="uname">
                </a>
            </div>
            <div>
                <a href="javascript:;">
                    <img src="../img/zy_icon_mm.png" alt="">
                    <input type="password" placeholder="请输入密码" v-model="upwd">
                </a>
            </div>
            <button @click="Login">登录</button>
            <div>
                <label for="auto"><input type="checkbox" id="auto">自动登录</label>
                <a href="javascript:;">忘记密码？点此找回</a>
            </div>
        </div>
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data() {
        return {
            uname:"",
            upwd:""
        }
    },
    methods: {
        Login(){
            var u=this.uname;
            var p=this.upwd;
            var ureg=/^\w{3,8}$/;
            var preg=/^[a-z0-9_]{3,8}$/;
            if(!ureg.test(u)){
                Toast("用户名格式不正确，请检查");
                return;
            }
            if(!preg.test(p)){
                Toast("密码格式不正确");
                return;
            }
            var url="http://127.0.0.1:3000";
            url+="/login?uname="+u+"&upwd="+p;
            this.axios.get(url).then((result)=>{
                if(result.data.code==1){
                    sessionStorage.setItem('key',u)
                    location.href='http://127.0.0.1:8081/#/index'
                
                }else{
                Toast("用户名或密码有误")
                }
            })
        }
    },
}
</script>
<style scoped> 
    *{margin: 0;padding: 0}
    #app-login{
        height: 100vh;
        background:#fff;
        
    }
    #app-login #login_header{
        height: 50px;
        border-bottom: #ddd solid 1px;
        line-height: 50px;
        background: #f5f5f5;
    }
    #app-login #login_header>h1{
        width: 80%;
        text-align: center;
        font-size: 20px;
        font-weight: normal;
        display: inline-block;
    }
    #app-login #login_header .mui-icon-arrowleft{
        color: #666;
        font-size: 30px;
        margin-left: 5px;
    }
    #logo{
        margin: 12% 0;
        text-align: center;
    }
    #logo>img{
        width: 35%;
    }
    #login{
        text-align: center;
    }
    #login>div{
        width: 80%;
        margin:0 auto 8%;
        border-bottom: 1px solid #108051;
    }
    #login a>input{
        width: 80%;
        margin: 0;
        border: 0;
        font-size: 14px;
        padding: 2%;
        color:#333;
    }
    #login img{
        width: 7%;
    }
    #login button{
        width: 80%;
        height: 40px;
        color: #108051;
        background: #ffe037;
        font-size: 18px;
        border-radius: 10px;
        margin: 5% 0;

    }
    #login>div:last-child{
        border: 0;
        font-size: 13px;
        color: #999;
    }
    #login>div:last-child>label{
        margin-left: -30%;
    }
    #login>div:last-child>a{
        float: right;
        color: #999;
    }
</style>