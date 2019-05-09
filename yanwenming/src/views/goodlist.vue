<template>
    <div id="app-goodlist">
        <header id="list_head" >
            <a href="#" @click="$router.back(-1)"><span class="mui-icon mui-icon-arrowleft"></span></a>
            <div>
                <img src="../img/icon_search.png" alt="">
                <input type="text" placeholder="新品上市" v-model="kwords" @keyup.enter="search">
            </div>
            <a><span class="mui-icon-extra mui-icon-extra-filter"></span></a>
            <span>筛选</span>
        </header>
        <div id="fix_head" :class="{fixhead:isfixed}">
            <ul>
                <li @click="showBg"><a href="javascript:;" @click="zonghe">综合</a></li>
                <li @click="showBg"><a href="javascript:;" @click="sell">销量</a></li>
                <li @click="showBg"><a href="javascript:;" @click="priceDown">价格
                    <span>
                        <i id="b1"></i>
                        <i id="b2"></i>
                    </span>
                </a></li>
                <li><a href="javascript:;" @click="changelist" v-html="html">

                </a></li>
            </ul>
        </div>
        <div id="listContain" class="main-body" ref="wrapper" :style="{ height: (wrapperHeight-50) + 'px' }" :class="{'shut':close1==true}">
            <mt-loadmore  :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                <ul>
                    <li v-for="(item, i) in lists" :key="i">
                        <a href="javascript:;">
                            <router-link :to="`/goodetails/${i}`">
                                <img :src="'http://127.0.0.1:3000/img/'+item.img_url" alt="">
                            </router-link>
                            <p>{{item.title}}</p>
                            <span>￥{{item.price}}</span>
                            <span class="sale">已售:{{item.num}}</span>
                            <a @click="insertCart" ><span :data-i="i" class="mui-icon-extra mui-icon-extra-cart"></span></a>
                        </a>
                    </li>
                </ul>
            </mt-loadmore>
        </div>
        <div id="change" class="main-body" ref="wrapper" :style="{ height: (wrapperHeight-50) + 'px' }" :class="{'shut':close2==true}">
            <mt-loadmore  :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="isAutoFill">
                <ul>
                    <li v-for="(item, i) in lists" :key="i">
                        <router-link :to="`/goodetails/${i}`">
                            <img :src="'http://127.0.0.1:3000/img/'+item.img_url" alt="">
                        </router-link>
                        <div>
                            <p>{{item.title}}</p>
                            <span>￥{{item.price}}</span>
                            <div>
                                <span class="sale">已售:{{item.num}}</span>
                                <a @click="insertCart" ><span :data-i="i" class="mui-icon-extra mui-icon-extra-cart"></span></a>
                            </div>
                        </div>
                        
                    </li>
                </ul>
            </mt-loadmore>
        </div>
        <div class="footer">
                <h2>
                    <router-link to="/login">登录</router-link>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;">商家中心</a>
                    <a href="javascript:;">门店查询</a>
                </h2>
                <h3>
                    <span><a href="javascript:;">关于我们</a></span>
                    <span><a href="javascript:;">购物指南</a></span>
                    <span><a href="javascript:;">支付方式</a></span>
                    <span><a href="javascript:;">售后服务</a></span>
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
					<span class="mui-icon mui-icon-extra mui-icon-extra-class active"></span><br>
					<span class="mui-tab-label">分类</span>
				</router-link>
				<router-link class="foot" to="/goodcart">
					<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.optCartCount}}</span></span><br>
					<span class="mui-tab-label">购物车</span>
				</router-link>
				<router-link class="foot" to="/personal">
					<span><img src="../img/menu_icon04.png" alt=""></span>
					<span class="mui-tab-label">我的</span>
				</router-link>
		</nav>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                isfixed:false,
                pno:1,
                lists:[],
                kwords:"",
                //可以进行上拉
                allLoaded: false,
                //是否自动触发上拉函数
                isAutoFill: false,
                wrapperHeight: 0,
                courrentPage: 0,
                num:0,
                range:"",
                close1:false,
                close2:true,
                html:`<span class="mui-icon mui-icon-extra mui-icon-extra-class" style="color:#10805A"></span>
                    <span>
                       <i style="display:inline-block;margin: 5px 0 0 3px;width:8px;border: 4px solid transparent;border-top:4px solid #10805A"></i>
                    </span>`
            }
        },
        created() {
            var kwords=sessionStorage.getItem("kwords")
            this.kwords=kwords;
            var url="http://127.0.0.1:3000/getGoodlist?pno="+this.pno
            if(this.kwords){
                url+=`&kwords=${this.kwords}`
            }
            this.axios.get(url).then((result)=>{
                this.lists=result.data.data
            })
            sessionStorage.removeItem("kwords")
        },
        mounted() {
            this.wrapperHeight =document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        }, 
        methods: {
            // jump(e){
            //     // console.log(e.target)
            //     // var pid=e.target.dataset.pid;
			//     // this.$router.push("/goodetails?pid="+pid);
            // },
            changelist(){
                if(this.close1){
                    this.close2=true;this.close1=false
                    this.html=`<span class="mui-icon mui-icon-extra mui-icon-extra-class" style="color:#10805A"></span>
                    <span>
                       <i style="display:inline-block;margin: 5px 0 0 3px;width:8px;border: 4px solid transparent;border-top:4px solid #10805A"></i>
                    </span>`
                }else{
                    this.close1=true;this.close2=false;
                    this.html=`<span class="mui-icon mui-icon-list" style="color:#10805A;margin-top:5px">
                    <span>
                       <i  style="display:inline-block;margin: 5px 0 0 3px;width:8px;border: 4px solid transparent;border-top:4px solid #10805A"></i>
                    </span>`
                }
            },
            zonghe(){
                this.range="";
                this.loadFrist();
            },
            sell(){
                this.range="ORDER BY num DESC";
                this.loadFrist();
            },
            insertCart(e){
                var i=e.target.dataset.i;
                console.log(i)
                var params=new URLSearchParams();
                params.append("pic",this.lists[i].img_url);
                params.append("pname",this.lists[i].title);
                params.append("price1",this.lists[i].price);
                params.append("price2",this.lists[i].price2);
                params.append("count",1);
                var url="http://127.0.0.1:3000/insert";
                this.axios.post(url,params).then((result)=>{
                    var name=sessionStorage.getItem("key");
                    if(name==null){
                        this.$toast("请登录");
                    return;
                    }
                    if(result.data.code<1){
                    this.$toast("请登录");
                    return;
                    }  
                    this.$toast(result.data.msg);
                    this.$store.commit("increment")
                })
            },
            showBg(e){
                var a=document.querySelectorAll("#fix_head>ul>li>a")
                for(var i=0;i<a.length;i++){
                    a[i].style.color="#333";
                    a[i].style.backgroundColor="#fff";
                }
                e.target.style.color="#10805A";
                e.target.style.backgroundColor="#ffe037";
                e.target.style.borderRadius="20px";

            },
            priceDown(){
                    var b1=document.getElementById("b1");
                    var b2=document.getElementById("b2");
                if(this.range==null || this.range=="ORDER BY price DESC"){
                    this.range="ORDER BY price ASC"
                    b2.classList.add("b2")
                    b1.classList.remove("b1")
                }else{
                     this.range="ORDER BY price DESC"
                    b2.classList.remove("b2")
                    b1.classList.add("b1")
                }
                this.loadFrist();
            },
            loadTop() {
                this.loadFrist();
            },
            loadBottom(){
                this.loadMore();
            },
            search(){
                
                var url="http://127.0.0.1:3000/getSearch?kwords="+this.kwords;
                this.axios.get(url).then((result)=>{
                    this.lists=result.data;
                })
            },
            onscroll(){
                var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
                if(scrollTop>=50){
                    this.isfixed=true;
                }else{
                    this.isfixed=false;
                }
            },
            loadFrist(){
                var url="http://127.0.0.1:3000/getGoodlist1?pno="+this.courrentPage+"&range="+this.range
                if(this.kwords){
                url+=`&kwords=${this.kwords}`
                }
                this.axios.get(url).then((result) => {
                    this.allLoaded = false; // 可以进行上拉
                    this.lists = result.data.data;
                    this.$refs.loadmore.onTopLoaded();
                })
            },
            loadMore(){
                this.pno++;
                var url="http://127.0.0.1:3000/getGoodlist1?pno="+this.pno+"&range="+this.range
                if(this.kwords){
                    url+=`&kwords=${this.kwords}`
                }
                this.axios.get(url).then((result)=>{
                this.lists=this.lists.concat(result.data.data);
                this.num=this.lists.length;
                if(this.pno>=result.data.pagecount){
                    this.allLoaded = true; 
                }
                  this.$refs.loadmore.onBottomLoaded();
            })
            }
        },

    }
</script>
<style scoped>
.main-body {
  /* 加上这个才会有当数据充满整个屏幕，可以进行上拉加载更多的操作 */
  overflow: scroll;
}
*{
    padding: 0;margin: 0;
}
#list_head{
    height: 50px;
    padding: 7px 0;
    background: #f5f5f5;
    border-bottom: 1px solid #ddd;
    position:fixed;
    z-index: 10;
    width: 100%;
}
#fix_head{
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 50px;
}
#list_head>div{
    display: inline-block;
    width: 75%;
    height: 36px;
    padding: 0;
    border: 1px solid #ddd;
    border-radius: 20px;
    background: #fff;
    text-align: center;
    line-height: 36px;
}
#list_head>div>img{
    width: 7%;
    margin-left:3%;
    vertical-align: middle;
}
#list_head>div>input{
    width: 80%;
    height: 90%;
    padding: 0;
    margin: 0 4%;
    border: 0;
    font-size: 15px;
}
.mui-icon-arrowleft{
    color: #666;
    font-size: 30px;
    margin-left: 5px;
}
.mui-icon-extra-filter{
    color: #666;
    font-size: 20px;
}
#list_head>span{
    color: #666;
    font-size: 16px;
}
#fix_head>ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    height: 40px;
    background: #fff;
}
#fix_head>ul>li{
    width: 16%;
    height: 28px;
    text-align: center;
    line-height: 30px;
    font-size: 15px;
}
#fix_head>ul>li:first-of-type{
    background-color: #ffe037;
    border-radius: 20px;
}
#fix_head>ul>li>a{
    display: inline-block;
    width: 100%;
    height: 28px;
    color: #333;
}
#fix_head>ul>li:first-of-type>a{
    color: #10805A;
}
.fixhead{
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
}
#app-goodlist>div:nth-child(3).shut,#app-goodlist>div:nth-child(4).shut{
    display: none;

}
#listContain ul,#change ul{
    width: 100%;
    margin-top: 95px;
}
#listContain ul>li{
    float: left;
    width: 49.5%;
    height: 240px;
    list-style: none;
    position: relative;
    background: #fff;
    padding: 2%;
    margin-bottom: 1%;
    margin-right: 1%;
}
#listContain ul>li:nth-child(even){
    margin-right: 0;
}
#listContain ul>li>a{
    width: 100%;
    height: 240px;
}
#listContain ul>li img{
    width: 100%;
    height: 70%;
}
#listContain ul>li P{
    font-size: 14px;
    color: #666;
    height: 31px;
    overflow: hidden;
    line-height: 16px;
    margin: 0;
}
#listContain ul>li>a>span,#change ul>li>div>span{
    display: inline-block;
    width: 40%;
    height: 30px;
    line-height: 30px;
    color: red;
    font-size: 15px;
}
#change ul>li>div>span{
    height: 20px;
}
#change ul>li{
    width: 100%;
    height: 120px;
    background: #fff;
    margin-top: 7px;
    list-style: none;
    padding: 0 10px;
    display: flex;
}
#change ul>li>a{
    display: inline-block;
    width: 25%;
    height: 100px;
    margin:auto;
    
}
#change ul>li P{
    font-size: 16px;
    color: #333;
}
#change ul>li>div{
    width: 75%;
    height: 100px;
    margin: auto;
    padding-left: 10px;
}
#change ul>li img{
    width: 100%;
    height: 100%;
}
.sale{
    color: #999 !important;
    font-size: 13px !important;
    text-align: right !important;
}
#change .sale{
    display: block;
    text-align: left !important;
}
#listContain ul>li>a>a:last-child,#change ul>li>div>div>a:last-child{
    background: #ffe037;
    display: inline-block;
    margin-top: 2%;
    float: right;
    width: 16%;
    height: 12%;
    border-radius: 50%;
    text-align: center;
}
#change ul>li>div>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#change ul>li>div>div>a:last-child{
    width: 30px;
    height: 30px;
}
.mui-icon{
    color: #10805A;
}
#listContain ul>li>a>a>span,#change  ul>li>div>div>a>span{
    color: #10805A;
    font-size: 20px;
    line-height: 27px;
}
#fix_head>ul>li>a>span{
    display: inline-block;
    vertical-align: middle;
}
#fix_head>ul>li>a>span>i{
    display: block;
    margin: 0;
    width: 4px;
    border: 4px solid transparent;
    border-top:4px solid #666;
}
#fix_head>ul>li>a>span>i.b1,#fix_head>ul>li>a>span>i.b2{
    display:none;
}
#fix_head>ul>li:nth-child(3)>a>span>i:first-child{
    border-bottom: 4px solid #666;
    border-top: 4px solid transparent;
}
#fix_head>ul>li:nth-child(3)>a>span>i{
    margin: 2px 0;
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
.fix_foot .foot .active{
    color: #10805a;
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
#app-goodlist .footer{
    margin-top: 10px;
    width: 100%;
    height: 240px;
    background: #fff;
}
#app-goodlist .footer>h2{
    text-align: center;
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #ddd;
}
#app-goodlist .footer>h2>a{
    font-size: 16px;
    color: #999;
    font-weight: normal;
    padding: 0 2%;
}
#app-goodlist .footer>h2>a~a{
    border-left: 1px solid #999;
}
#app-goodlist .footer>h3{
    height: 30px;
    text-align: center;
    margin: 17px 0;
}
#app-goodlist .footer>h3>span{
    display: inline-block;
    width: 25%
}
#app-goodlist .footer>h3 a{
    font-size: 14px;
    color: #999;
    font-weight: normal;
    border-bottom: 1px solid #999;
}
#app-goodlist .footer>div>p{
    text-align: center;
    font-size: 12px;
    margin: 0;
}
#app-goodlist .footer>div>p>a{
    color: #999;
}
.mui-badge{
    background:#10805a !important;
}

</style>