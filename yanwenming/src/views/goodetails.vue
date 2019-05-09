<template>
  <div class="app_details">
    <div class="navlist">
      <ul>
        <a href="#" @click="$router.back(-1)"><span class="mui-icon mui-icon-arrowleft"></span></a>
        <li class="navli"  v-for="(item,index) in navList" :class="{'activeT':nowIndex===index}" @click="tabClick(index)" ::key="index"><i>{{item.name}}</i>
        </li>
        <a id="icon-more" @click="navShow">
          <span class="mui-icon mui-icon-more"></span>
          <dl :class="{nav:navshow==false}">
            <dt></dt>
            <dd>
              <router-link to="/index">
                <img src="../img/menu_icon01.png" alt="">
                首页
              </router-link>
            </dd>
            <dd>
              <router-link to="/goodlist">
                <img src="../img/menu_icon02.png" alt="">
                分类
              </router-link>
            </dd>
            <dd>
              <router-link to="/goodcart">
                <img src="../img/menu_icon03.png" alt="">
                购物车
              </router-link>
            </dd>
            <dd>
              <router-link to="">
                <img src="../img/menu_icon04.png" alt="">
                会员中心
              </router-link>
            </dd>
          </dl>
        </a>
      </ul>
    </div>
    <div class="swiper-container swiper_con" >
      <div class="swiper-wrapper">
        <div class="swiper-slide product" @touchstart="ts" @touchend="te({i:0,id:$event})" v-for="(shop,i) of list" :key="i">
          <div class="carousel"><img :src="'http://127.0.0.1:3000/img/'+shop.img_url" alt="" @click="openBigImg"></div>
          <div class="intr">
            <h2>{{shop.title}}</h2>
            <p>
              <a href="javascript:;">￥{{shop.price}}</a><span>市场价：￥{{shop.price2}}</span>
            </p>
            <h3>
              <a href="javascript:;">{{shop.dnum1}}人评价</a>
              <a href="javascript:;">{{shop.dnum2}}人已付款</a>
              <a href="javascript:;">分享<img src="../img/icon_share.png" alt=""></a>
            </h3>
          </div>
          <div class="size">
            <span>请选择颜色分类/尺寸</span>
            <a id="icon-more" @click="showClassify"><span class="mui-icon mui-icon-more"></span></a>
          </div>
          <div class="num">
            <span>数量</span>
            <button @click="del">-</button>
            <div>{{n}}</div>
            <button @click="ad">+</button>
            <span>库存{{shop.dnum3}}</span>
          </div>
          <div class="stock">
            <span>自提网点<img src="../img/jt_down_r.png" alt=""></span>
          </div>
          <div class="pd">
            <h2>商品详情</h2>
            <img src="../img/goods_xqpic.jpg" alt="">
            <img src="../img/big_5.jpg" alt="">
            <img src="../img/pic01.jpg" alt="">
          </div>
        </div>
        <div class="swiper-slide detail" @touchstart="ts" @touchend="te({i:1,id:$event})" >
          <div>
            <h1>商品信息</h1>
          </div>
          <ul>
            <li>
              <span>是否商场同款</span>
              <a href="javascript:;">否</a>
            </li>
            <li>
              <span>颜色分类</span>
              <a href="javascript:;">白灰色 白黑色 白蓝色 卡其色</a>
            </li>
            <li>
              <span>商品编号</span>
              <a href="javascript:;">ywm201806070405</a>
            </li>
            <li>
              <span>品牌</span>
              <a href="javascript:;">颜文明</a>
            </li>
            <li>
              <span>上市时间</span>
              <a href="javascript:;">2018年夏季</a>
            </li>
            <li>
              <span>吊牌价</span>
              <a href="javascript:;">798</a>
            </li>
            <li>
              <span>鞋码</span>
              <a href="javascript:;">36 37 38 39 40 41 42</a>
            </li>
            <li>
              <span>帮面材质</span>
              <a href="javascript:;">牛皮</a>
            </li>
            <li>
              <span>运动系列</span>
              <a href="javascript:;">经典运动网鞋系列</a>
            </li>
          </ul>
        </div>
        <div class="swiper-slide commpent" @touchstart="ts" @touchend="te({i:2,id:$event})" >
            <ul>
              <li>
                <h1>
                  <a href="javascript:;">卡****啊</a>
                  <i>
                    <img src="../img/stars5.png" alt="">
                  </i>
                  <span>2017-12-04</span>
                </h1>
                <div>
                    可以啊，鞋子不错，材质很好，穿起来很舒服，推荐大家购买！
                </div>
                <div>
                  <img src="../img/pic02.jpg" alt="">
                  <img src="../img/big_5.jpg" alt="">
                </div>
              </li>
              <li>
                <h1>
                  <a href="javascript:;">匿名</a>
                  <i>
                    <img src="../img/stars5.png" alt="">
                  </i>
                  <span>2017-12-04</span>
                </h1>
                <div>
                    果断五星，下次再来！
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="tfoot">
      <a href="javascript:;">
        <img src="../img/icon_goods_dp.png" alt="">
        店铺
      </a>
      <a href="javascript:;">
        <img src="../img/icon_goods_kf.png" alt="">
        客服
      </a>
      <a href="javascript:;">
        <img src="../img/icon_goods_like.png" alt="">
        收藏
      </a>
     <a href="javascript:;" @click="insertCart"><p>加入购物车</p></a>
     <router-link to="/goodcart"><p>立即购买</p></router-link>
    </div>
    <div class="classify" :class="{close1:shut==true}">
            <div class="back"></div>
            <div class="tab" :class="{close2:shut==true}">
              <div>
                <img src="../img/pic08.jpg" alt="">
                <a href="#">
                  <span>消费积分：5280</span>
                  <span>市场价：￥699</span>
                </a>
                <a href="#" @click="close">&times;</a>
              </div>
              <div>
                <h2>颜色分类</h2> 
                <dl>
                  <dd v-for="(c,i) of colors" @click="choice1" :class="{mcolor:current1==i}" :data-c="i" :key="i">{{c.color}}</dd>
                </dl>
              </div>
              <div>
                <h2>尺码</h2>
                <dl>
                  <dd v-for="(s,index) of sizes" @click="choice2" :class="{mcolor:current2==index}" :data-s="index" :key="index">{{s.size}}</dd>
                </dl>
              </div>
              
            </div>
    </div>
    <!-- 点击图片放大 -->
    <div id="bigImg"  :class="{picture:boost==true}" @click="shutBigImg" v-for="(pics,i) of list" :key="i">
      <img :src="'http://127.0.0.1:3000/img/'+pics.img_url" alt="">
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper-4.5.0'
export default {
  data() {
      return {
          shut:true,
          navList:[
              {name:'商品'},
              {name:'详情'},
              {name:'评价'}
          ],
          colors:[{color:"白蓝色"},{color:"卡其色"},{color:"白黑色"},{color:"白灰色"}],
          sizes:[{size:36},{size:37},{size:38},{size:39},{size:40},{size:41},{size:42}],
          nowIndex:0,
          n:1,
          current1:null,
          current2:null,
          boost:true,
          navshow:false,
          list:[]
      }
  },
  created() {
    var pid=this.$route.params.pid;
    var url="http://127.0.0.1:3000/getDetails?pid="+pid;
    this.axios.get(url).then((result)=>{
      this.list=result.data
    })
  },
  mounted() {
    this.mySwiper = new Swiper('.swiper-container',{
          initialSlide:0,
          autoplay:false,
          keyboardControl:true,
          autoHeight:true,
          observer:true,
          observeParents:true,
          onSlideChangeStart:function(){
              // console.log(that.mySwiper.activeIndex)
              that.nowIndex=that.mySwiper.activeIndex
          }
     });
  }, 
  methods: {
     tabClick(index){
        this.nowIndex = index;
        this.mySwiper.slideTo(index,1000,false);
      },
      ts(e){
        this.startX = e.touches[0].pageX;
      },
       te(a){
        var i=a.i;
        var moveEndX = a.id.changedTouches[0].pageX;
        var  X = moveEndX - this.startX;
        if ( X < -180 ) {//左滑
          if(i<2) i++;
          else i=2;

        }else if ( X > 180 ){//右滑
          if(i>0) i--;
          else i=0;
          
        }
        this.nowIndex=i;
       },
    navShow(){
      if(this.navshow==true){
        this.navshow=false
      }else{
        this.navshow=true;
      }
    },
    insertCart(){
      var params=new URLSearchParams();
      params.append("pic",this.pic);
      params.append("pname",this.pname);
      params.append("price1",this.price1);
      params.append("price2",this.price2);
      params.append("count",this.n);
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
      })
    },
    tabClick(index){
      this.nowIndex = index
      this.mySwiper.slideTo(index,1000,false)
    },
    showClassify(){
      this.shut=false;

    },
    close(){
      this.shut=true;
    },
    del(){
      this.n--;
      if(this.n<=1){
        this.n=1
      }
    },
    ad(){
      this.n++;
    },
    choice1(e){
      var i=e.target.dataset.c;
      this.current1=i;
    },
    choice2(e){
      var i=e.target.dataset.s;
      this.current2=i;
    },
    shutBigImg(){
      this.boost=true;
    },
    openBigImg(){
      this.boost=false;
    }
  },

}
</script>
<style>   
.swiper-slide{
height: 100vh !important;
}
.navlist{
width:100%;
height:50px;
border-bottom:1px solid #ddd;
padding: 0 10px;
background: #f5f5f5;
position: fixed;
top: 0;
z-index: 800;
}
.navlist>ul{
height: 49px;
display: flex;
list-style: none;
justify-content: space-between;
align-items: center;
}
.navli{
width: 80px;
height: 30px;
line-height: 30px;
text-align:center;
}
.navli i{
font-style: normal;
font-size: 16px;
color: #333;
}
.mui-icon-more{
 font-size: 40px;
 color: #666;
}
.navlist .mui-icon-arrowleft{
font-size: 30px;
color: #999;
}
.navlist .activeT,.navlist .activeT i{
color:#10805a;
background: #ffe037;
border-radius: 30px;
}
.nav{
  display:none;
}
#icon-more>dl{
  background: rgba(0,0,0,.7);
  position: absolute;
  right: 1%;
  top: 90%;
  border-radius: 8px;
  width: 30%;
}
#icon-more>dl>dt{
  position: absolute;
  right: 8%;
  top: -10px;
  width: 0;
  height: 0;
  border-bottom: 10px solid rgba(0,0,0,0.7);
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
#icon-more>dl>dd>a{
  color: #ddd;
  font-size: 15px;
  font-weight: normal;
}
#icon-more>dl>dd{
  padding: 8px;
}
#icon-more>dl>dd~dd{
  border-top: 1px solid #ddd;
}
#icon-more>dl>dd>a>img{
  width: 20%;
}
.swiper-container {
overflow: auto !important;
}
.swiper_con{
width:100%;
margin-bottom:40px;
position:relative;
} 
.choosegrand{
position:absolute;
top:-3;
right:0;
}
.show{
display:block;
}
.none{
display:none;
}
.tfoot{
position: fixed;
bottom: 0;
width: 100%;
height: 60px;
z-index: 1000;
}
.tfoot>a{
height: 60px;
display: inline-block;
width: 14%;
font-size: 13px;
color: #999;
text-align: center;
border: 1px solid #ddd;
border-left: none;
float: left;
background: #fff;

}
.tfoot>a:last-child{
border-right: 0;
}
.tfoot>a>img{
width: 40%;
display: block;
margin-top:10px;
margin-left: 18px;
}
.tfoot>a:nth-child(4),.tfoot>a:nth-child(5){
display: inline-block;
width: 29%;
text-align: center;
color: #fff;
height: 60px;
margin: 0;
background: #10805a;
float: left;
}
.tfoot>a:nth-child(4)>p{
color: #fff;
}
.tfoot p{
font-size: 16px;
text-align: center;
height: 60px;
line-height: 60px;
}
.tfoot>a:nth-child(5)>p{
left: 20%;
color:#10805a;

}
.tfoot a:last-child{
background:#ffe037;
}
.detail{
padding-top: 50px;
}
.detail>div{
height: 40px;
background: url(../img/line_botm.jpg) no-repeat center bottom;
background-size: 100% 3px;
}
.detail>div>h1{
font-size: 16px;
font-weight: normal;
color: #10805a;
height: 38px;
line-height: 38px;
margin-left: 10px;
}
.detail>ul{
line-height: 30px;
list-style: none;
background: #fff;
}
.detail>ul>li{
height: 30px;
font-size: 14px;
color: #999;
margin-left: 10px;
}
.detail>ul>li>span{
display: inline-block;
width: 30%;
}
.detail>ul>li>a{
color: #666;
}
.commpent>ul{
background: #fff;
padding-top: 50px;
}
.commpent>ul>li{
padding: 0 10px;
border-bottom: 1px solid #ddd;
list-style: none;
}
.commpent>ul>li>h1{
height: 40px;
padding: 0;
}
.commpent>ul>li>h1>a{
font-size: 14px;
color: #666;
}
.commpent>ul>li>h1>i>img{
width: 15%;
}
.commpent>ul>li>h1>span{
font-size: 14px;
font-weight: normal;
color: #999;
display: inline-block;
float: right;
height: 40px;
line-height: 50px;
}
.commpent>ul>li>div{
font-size: 15px;
color: #666;
}
.commpent>ul>li>div>img{
width: 12%;
}
.carousel{
height: 375px;
padding-top: 50px;
}
.carousel>img{
width: 100%;
height: 100%;
}
.intr{
background: #fff
}
.intr>h2{
font-size: 16px;
font-weight: normal;
color: #333;
padding: 10px;
margin: 0;
}
.intr>p{
padding-left: 10px;
}
.intr>p>a{
color: red;
font-size: 18px;
margin-right: 10px;
}
.intr>p>span{
text-decoration: line-through;
}
.intr>h3{
padding: 5px 10px;
display: flex;
justify-content: space-between;
}
.intr>h3>a{
font-size: 12px;
color: #999;
font-weight: normal;
}
.intr>h3>a>img{
width: 30%;
}
.size,.num,.stock{
height: 40px;
background: #fff;
font-size: 15px;
line-height: 40px;
padding:0 10px;
margin-top: 6px;
color: #333;
}
.size>a{
float: right;
}
.num>button{
display: inline-block;
width: 30px;
height: 30px;
border:1px solid #ddd;
border-radius: 50%;
padding: 5px 0;
margin: 5px 0;
}
.num>span:first-child{
margin-right: 20%;
}
.num>div{
display: inline-block;
width: 10%;
text-align: center;
}
.num>span:last-child{
float: right;
font-size: 12px;
color: #999;
}
.stock>span>img{
float: right;
margin:12px 0;
}
.classify{
width: 100%;
height: 100%;
position: fixed;
top: 0;
left: 0;
z-index: 900;


}
.close1{
display: none;
}
.back{
width: 100%;
height: 100%;
background: rgba(0,0,0,.6);
position: absolute;
top: 0;
left: 0;
}
.tab{
width: 100%;
height: 350px;
background: #fff;
position: fixed;
bottom: 0;
}
.classify .close2{
bottom: -500px;
}
.tab>div{
width: 100%;
height: 100px;
border-bottom: 1px solid #ddd;
}
.tab>div>img{
width:30% ;
float: left;
margin-top: -20px;
margin-left: 10px;
border: 1px solid #fff;
border-radius: 5px;
}
.tab>div>a{
display: inline-block;
width: 50%;
height: 100px;
padding: 20px 20px;
line-height:25px;
}
.tab>div>a:last-child{
width: 25px;
height: 25px;
border: 1px solid #ddd;
border-radius: 50%;
padding: 0;
text-align: center;
float: right;
margin-right: 10px;
margin-top: 10px;
color: #999;
}
.tab>div>a>span{
display: block;
color: red;
font-size: 14px;
}
.tab>div>a>span:first-child{
font-weight: bold
}
.tab>div>a>span:last-child{
color: #999;
text-decoration: line-through;
}
.tab>div:nth-child(2),.tab>div:nth-child(3){
padding: 3% 2%;
}
.tab>div>h2{
font-size: 14px;
font-weight: normal;
color: #999;
margin-left: 10px;
margin-bottom: 10px;
}
.tab>div>dl>dd{
display: inline-block;
width: 18%;
color: #333;
font-size: 14px;
height: 30px;
border: 1px solid #ddd;
border-radius: 5px;
margin-left: 10px;
text-align: center;
line-height: 30px;
}
.tab>div:last-child>dl>dd{
width: 10%;
}
.mcolor{
  background: #ffe037 !important;
  color: #10805a !important;
}
.pd{
  background: #fff;
}
.pd>h2{
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #10805a;
  font-size: 16px;
  font-weight: normal;
  margin-top: 10px;
  padding-left: 10px;
  background: url(../img/line_botm.jpg) no-repeat center bottom;
  background-size: 100% 3px;
}
.pd>img{
  width: 100%;
}
.picture{
  display:none;
}
#bigImg{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  background: #000;
  width: 100%;
  height: 100%;
}
#bigImg>img{
  width: 100%;
  height: 375px;
  position: absolute;
  top: 50%;
  left:0;
  margin-top: -187.5px;
}
</style>