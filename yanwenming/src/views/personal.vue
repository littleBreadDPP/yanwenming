<template>
    <div id="app-personal">
        <div id="header">
            <div class="header-top">
                <div :class="{touxiang:notshow1==true}" @click="uploadPic">
                    <img :src="pic" alt="">
                    <p>上传头像</p>
                    <mt-actionsheet :actions= "actions" v-model="sheetVisible">
                    </mt-actionsheet>
                    <input id="upload_file" @change="getfile" type="file" name="file" style="display: none">    
                </div>
                <img :src="ownpic" alt="" :class="{touxiang:notshow2==true}">
                <p>
                    <span>{{lgname}}</span>
                    <router-link to="/login" class="show" id="dl">去登录</router-link>
                    <a href="javascript:;" @click="secede" class="hide" id="quit">安全退出</a>
                </p>
                <span>设置</span>
            </div>
            <div class="header-middle">
                <div class="yixif" style="padding-left: 36px; padding-right: 36px;">
                    <span class="yixiaof" :style="{left: uip+'%'}">{{unum}}</span>
                    <br>
                    <img src="../img/position.png" class="dingwei" :style="{left: uip+'%'}">
                </div>
                <div class="xian" style="padding-left: 36px; padding-right: 36px;">
                    <div class="hengxian1">
                        <div class="hengxian2" :style="{width: uip+'%'}"></div>
                    </div>
                </div>
                <div class="menber">
                    <div class="integral">
                        <img src="../img/circle.png">
                        <div class="grade">活力会员</div>
                    </div>
                    <div class="integral">
                        <img src="../img/circle.png">
                        <div class="grade">黄金会员</div>
                    </div>
                    <div class="integral">
                        <img src="../img/circle.png">
                        <div class="grade">铂金会员</div>
                    </div>
                    <div class="integral">
                        <img src="../img/circle.png">
                        <div class="grade">钻石会员</div>
                    </div>
                    <div class="integral">
                        <img src="../img/circle.png">
                        <div class="grade">至尊会员</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="container">
            <div class="container-top">
                <a href="javascript:;">
                    <b>{{personmoney}}</b>
                    <span>账户余额</span>
                </a>
                <a href="javascript:;">
                    <b>{{integral}}</b>
                    <span>我的积分</span>
                </a>
                <a href="javascript:;">
                    <b>{{coupon}}</b>
                    <span>我的优惠卷</span>
                </a> 
            </div>
            <div class="container-bottom">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <div class="d1">
                                <img src="../img/vip_icon_sc.png" alt="">
                            </div>
                            <span>我的收藏</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="d2">
                                <img src="../img/vip_icon_dd.png" alt="">
                            </div>
                            <span>我的订单</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <div class="d3">
                                <img src="../img/vip_icon_pj.png" alt="">
                            </div>
                            <span>我的评价</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="../img/vip_icon01.png" alt="">
                            <span>我的钱包</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="../img/vip_icon02.png" alt="">
                            <span>在线充值</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="../img/vip_icon03.png" alt="">
                            <span>我的优惠卷</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="../img/vip_icon04.png" alt="">
                            <span>我的留言</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="../img/vip_icon05.png" alt="">
                            <span>地址管理</span>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <img src="../img/vip_icon06.png" alt="">
                            <span>退款售后</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer">
                <h2>
                    <router-link to="/login">登录</router-link>
                    <a href="#">注册</a>
                    <a href="#">商家中心</a>
                    <a href="#">门店查询</a>
                </h2>
                <h3>
                    <span><a href="#">关于我们</a></span>
                    <span><a href="#">购物指南</a></span>
                    <span><a href="#">支付方式</a></span>
                    <span><a href="#">售后服务</a></span>
                </h3>
                <div>
                    <p>Copyright © 2018  贵州颜文明体育用品有限公司</p>
                    <p>联系地址：贵州省清镇市巢东路9号颜文明大厦</p>
                    <p>全国服务热线：400-6679-555   技术支持：<a href="https://www.wangid.com/" target="blank">WangID驰通网络</a></p>
                </div>
            </div>	
        <nav class="fix_foot">
            <router-link class="foot" to="/index">
                <span class="mui-icon mui-icon-home"></span><br>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="foot" to="/goodlist">
                <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span><br>
                <span class="mui-tab-label">分类</span>
            </router-link>
            <router-link class="foot" to="/goodcart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.optCartCount}}</span></span><br>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="foot" to="/personal">
                <span><img src="../img/menu_icon04_r.png" alt=""></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
    </nav>
    </div>
</template>
<script>
export default {
    inject:['reload'],
    data() {
        return {
            pic:require("../img/shangchuanpic.png"),
            ownpic:"",
            notshow1:false,
            notshow2:true,
            lgname:"游客",
            uip:0,
            personmoney:0,
            integral:0,
            coupon:0,
            unum:0,
            actions:[{
            name: '拍照',
            method : this.getCamera // 调用methods中的函数
            }, {name: '从相册中选择', method : this.getLibrary    // 调用methods中的函数
      }],
            sheetVisible: false

        }
    },
    created() {
        this.loadMore();
        this.showPic();
    },
    mounted() {
        if(sessionStorage.getItem("key")!==null){
            this.lgname=sessionStorage.getItem("key")
            var dl=document.getElementById("dl");
            dl.classList.remove("show")
        }else{
            var quit=document.getElementById("quit");
            quit.classList.remove("hide")
        }
    },
    methods: {
        showPic(){
            var uname=sessionStorage.getItem("key");
            if(uname!==null){
               var url="http://127.0.0.1:3000/getPic?pname="+uname;
               this.axios.get(url).then((result) => {
                   if(result.data.length>0){
                       this.ownpic=`http://127.0.0.1:3000/upload/`+result.data[0].pic
                       this.notshow1=true;
                       this.notshow2=false;
                   }
               })
            }
        },
        uploadPic: function(){
            var uname=sessionStorage.getItem("key");
            if(!uname){
                this.$toast("请登录")
            }else{
                this.sheetVisible = true;
            }
        },
        getCamera: function(){
            this.$toast("该功能暂未上线")
        },
        getLibrary: function(){
            document.getElementById('upload_file').click();
        },
        loadMore(){
            var uname=sessionStorage.getItem("key");
            if(uname!==null){
                var url="http://127.0.0.1:3000/personal?uname="+uname
                this.axios.get(url).then((result) => {
                    this.personmoney=result.data[0].personmoney
                    this.integral=result.data[0].integral
                    this.coupon=result.data[0].coupon;
                    var atime= setInterval(() => {
                        var anum=this.integral/55
                        // console.log(anum)
                        this.unum=parseInt(this.unum+anum)
                        if(this.unum>this.integral){
                            this.unum=this.integral
                            clearInterval(atime)
                    }
                }, 50);
                this.uip=this.integral/40>100?100:this.integral/40
                })
            }
        },
        secede(){
            if(confirm("确认注销吗？")){
                sessionStorage.removeItem("key");
                this.reload();
            }
			
        },
        getfile(e){
                var file=e.target.files[0]
                var url="http://127.0.0.1:3000/uploadFile"
                var params = new FormData();
                params.append("file",file);
                var config = {
                headers:{'Content-Type':'multipart/form-data'}
                }; 
                this.axios.post(url,params,config).then((result)=>{
                    this.reload();
                    this.$toast(result.data.msg)
                     
                })
        }
    },
}
</script>
<style>
    #app-personal>#header{
        background: #0c6441 !important;
        width: 100%;
        height: 190px;
    }
    #app-personal .header-top{
        display: flex;
        align-items: center;
    }   
    #app-personal .header-top>div,#app-personal .header-top>img{
        display: inline-block;
        border: 3px solid rgb(228, 226, 226);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        margin: 15px 10px 5px;
        text-align: center;
        background: #E5E5E5;
    }
    .header-top>div.touxiang,.header-top>img.touxiang{
        display: none !important;
    }
    #app-personal .header-top>div>img{
       width: 30%;
       margin-top: 10px;



    }
    #app-personal .header-top>p{
        width: 45%;
        margin: 10px;
    }
    #app-personal .header-top>p>span{
        color: #fff;
        font-size: 16px;
    }
    #app-personal .header-top>p>a{
        display: none;
        color: #53a68a;
        margin-top: 10px;
    }
     #app-personal .header-top>p>a.hide{
        display:block;
    }
     #app-personal .header-top>p>a.show{
        display:block;
    }
    #app-personal .header-top>span{
        display: inline-block;
        width: 50px;
        height: 25px;
        border: 1px solid #53a685;
        border-radius: 20px;
        font-size: 14px;
        color: #53a685;
        text-align: center;
        margin-top: -30px;
    }
    #app-personal .header-middle{
        height: 55px;
    }
    .yixiaof {
        color: #fff;
        display: inline-block;
        line-height: 18px;
        font-size: 12px;
        position: relative;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        top: 12.5px;
        left:0;
        transition: all 3s;
    }
    .dingwei {
        width: 45px;
        position: relative;
        top: -5px;
        left:0;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        transition: all 3s;
    }
    div.xian{
        width: 100%;
    }
    div.xian .hengxian1 {
        width: 100%;
        height: 1.5px;
        background-color: #53a685;
        transition: all 3s;
    }
    div.xian .hengxian2 {
        height: 1.5px;
        background-color:#ddd;
        transition: all 3s;
    }
    div.menber{
        width: 100%;
        position: relative;
        top: -17%;
        display:flex;
        justify-content: space-around;
    }
    #app-personal .header-middle>div.menber>div{
        text-align: center;
        width: 60px;
    }
    #app-personal .header-middle>div.menber>div>img{
        width:30%;
        color: #53a685;
    }
    div.menber .grade{
        font-size: 14px;
        color: #53a685;
    }
    #app-personal .header-bottom>a>img{
        width: 15%;
    }
    #app-personal .header-bottom>a>span{
        display: block;
        font-size: 12px;
        color: #fff;
    }
    #container>.container-top{
        margin: 7px 0;
        width: 100%;
        padding: 3% 0;
        background: #fff;
    }
    #container>.container-top>a{
        display: inline-block;
        width: 33.333%;border-right: 1px solid #ddd;
        text-align: center;
    }
    #container>.container-top>a:last-child{
        border-right:0
    }
    #container>.container-top>a>b{
        font-size: 14px;font-weight: normal;
        color: #10805a;
    }
    #container>.container-top>a>span{
        display: block;
        font-size: 14px;
        color: #999;
    }
    #container>.container-bottom>ul{
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        background: #fff;
        margin: 7px 0;
    }
    #container>.container-bottom>ul>li{
        width:33.3333%;text-align: center;
        margin-top: 20px;
    }
    #container>.container-bottom>ul>li>a>div{
        text-align: center;
        margin: auto;
        width: 62.48px;
        height: 62.48px;
        line-height: 80px;
        border-radius: 50%;
        margin-bottom: 6px;
    }
    #container>.container-bottom>ul>li>a>div>img{
        width: 40%;
    }
    div.d1{
        background: #3CB5EB;
    }
    div.d2{
        background: #E8383D;
    }
    div.d3{
        background: #29AA2E;
    }
    #container>.container-bottom>ul>li>a img{
        width: 50%;
    }
    #container>.container-bottom>ul>li>a{
        font-size: 14px;
        color: #333;
    }
    #container>.container-bottom>ul>li>a span{
        display: block;
    }
    #app-personal .footer{
		margin-top: 10px;
		width: 100%;
		height: 240px;
		background: #fff;
	}
	#app-personal .footer>h2{
		text-align: center;
		height: 45px;
		line-height: 45px;
		border-bottom: 1px solid #ddd;
	}
	#app-personal .footer>h2>a{
		font-size: 16px;
		color: #999;
		font-weight: normal;
		padding: 0 2%;
	}
	#app-personal .footer>h2>a~a{
		border-left: 1px solid #999;
	}
	#app-personal .footer>h3{
		height: 30px;
		text-align: center;
		margin: 17px 0;
	}
	#app-personal .footer>h3>span{
		display: inline-block;
		width: 25%
	}
	#app-personal .footer>h3 a{
		font-size: 14px;
		color: #999;
		font-weight: normal;
		border-bottom: 1px solid #999;
	}
	#app-personal .footer>div>p{
		text-align: center;
		font-size: 12px;
		margin: 0;
	}
	#app-personal .footer>div>p>a{
		color: #999;
	}
    .fix_foot{
		background:#ffe037;
		height: 60px;
		border:0 solid #fff;
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1000;
	}
	.fix_foot .foot{
		display: inline-block;
		width: 25%;
		height: 60px;
		text-align: center;
		margin-top: 5px;
	}
	.fix_foot .mui-icon{
		font-size: 30px;
		color: #fff;
		position: relative;
	}
	.fix_foot>a>.mui-tab-label{
		font-size: 12px !important;
		color: #10805a;
	}
	.fix_foot>a img{
		width: 27px;
		height: 27px;
		display: block;
		margin: 0 auto;
	}
    .mui-badge{
        background:#10805a !important;
    }
</style>