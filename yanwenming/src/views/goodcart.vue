<template>
    <div id="app_goodcart">
        <header>
            <a href="javascript:;" @click="$router.back(-1)">
                <span class="mui-icon mui-icon-arrowleft"></span>
            </a>
            <h4>购物车</h4>
        </header>
        <ul>
            <li v-for="(item,i) of list" :key="i">
                <input type="checkbox" :checked="item.cb" @click="selectOne" :data-i="i">
                <img :src="'http://127.0.0.1:3000/img/'+item.pic" alt="">
                <div>
                    <a href="#">{{item.pname}}</a>
                    <i>￥{{item.price1}}</i>
                    <em>￥{{item.price2}}</em>
                </div>
                <button @click="reduce" :data-ww="i">-</button>
                <span>{{item.count}}</span>
                <button @click="add" :data-h="i">+</button>
            </li>
        </ul>
        <div id="del" @click="delate">
            删除选中商品
        </div>
        <footer>
            <input type="checkbox" id="select" :checked="allcb" @click="selectAll">
            <label for="select" >全选</label>
            <h2>
                <span>总计
                    <i>￥{{total}}</i>
                </span>
                <div>去结算</div>
            </h2>
        </footer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[],
            allcb:false,
            total:0,
            count:1
        }
    },
    created() {
        this.loadmore()
    },
    methods: {
        delate(){
            this.$messagebox.confirm("是否删除选中的商品").then(action=>{
                var ids="";
                for(var item of this.list){
                    if(item.cb==true){
                        ids+=item.pid+","
                    }
                }
                if(ids.length==0){
                    this.$toast("请选中您需要删除的商品");
                    return;
                }
                ids=ids.substring(0,ids.length-1)
                var url="http://127.0.0.1:3000";
                url+="/delM?ids="+ids;

                this.axios.get(url).then(result=>{
                this.loadmore();
                })
            })
            
        },
        add(e){
            var i=e.target.dataset.h;
            console.log(i)
            this.list[i].count++;
            var params=new URLSearchParams();
            params.append("count",this.list[i].count);
            params.append("pid",this.list[i].pid);
            var url="http://127.0.0.1:3000/countUpdate";
            this.axios.post(url,params).then((result)=>{
                this.loadmore();
            })
        },
        reduce(e){
            var i=e.target.dataset.ww;
            this.list[i].count--;
            if( this.list[i].count<=1){
                this.list[i].count=1;
            };
           var params=new URLSearchParams();
            params.append("count",this.list[i].count);
            params.append("pid",this.list[i].pid);
            var url="http://127.0.0.1:3000/countUpdate";
            this.axios.post(url,params).then((result)=>{
                this.loadmore();
            })

        },
        selectOne(e){
            var cb=e.target.checked;
            var i=e.target.dataset.i;
            this.list[i].cb=cb;
            var count=0;
            this.total=0;
            for(var item of this.list){
                if(item.cb){
                    count++;
                    this.total+=item.count*item.price1;
                }
            }
            if(count==this.list.length){
                this.allcb=true;
            }else{
                this.allcb=false;
            }
        },
        selectAll(e){
            var cb=e.target.checked;
            console.log(cb)
            for(var item of this.list){
                if(cb==true){
                    item.cb=true
                }else{
                    item.cb=false;
                }
            }
        },
        loadmore(){
          var url="http://127.0.0.1:3000/getCart";
          this.axios.get(url).then(result=>{
            var name=sessionStorage.getItem("key");
			if(name==null){
				this.$toast("请登录");
            return;
			}
            if(result.data.code<1){
                this.$toast("请登录");
                return;
            }  
            var rows=result.data.data;
            for(var item of rows){
                item.cb=false;
            }
            this.list=rows;
            var num=sessionStorage.setItem("num",this.list.length)
            
        })
    }
    },

}
</script>
<style scoped>
   #app_goodcart>header{
       height: 50px;
       background: #f5f5f5;
       border-bottom: 1px solid #ddd;
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       z-index: 1000;
   } 
   #app_goodcart>header span{
       display: inline-block;
       width: 8%;
       height: 50px;
       line-height: 50px;
       font-size: 30px;
       color: #666;
   }
   #app_goodcart>header>h4{
       display: inline-block;
       margin: 0;
       margin-right:4%;
       width: 88%;
       height: 50px;
       line-height: 50px;
       text-align: center;
       font-size: 20px;
       font-weight: normal;
   }
   #app_goodcart>ul{
       margin-top: 50px;
   }
   #app_goodcart>ul>li{
       height: 100px;
       list-style: none;
       display: flex;
       align-items: center;
       background: #fff;
       border-bottom: 1px dashed #ddd;
   }
   #app_goodcart>ul>li>input:first-child{
        width: 30px;
   }
   #app_goodcart>ul>li>img{
       width: 18%;
   }
   #app_goodcart>ul>li>div{
       width: 42%;
       display: inline-block;
       margin: 0 2%;
   }
   #app_goodcart>ul>li>div>a{
       display: block;
       font-size: 13px;
       color: #666;
       height:40px;
       overflow: hidden;
   }
   #app_goodcart>ul>li>div>i{
       color: red;
       font-style: normal;
       font-weight: lighter;
       font-size: 14px;
   }
   #app_goodcart>ul>li>div>em{
       color: #999;
       text-decoration: line-through;
       font-style: normal;
       font-weight: lighter;
       font-size: 12px;
       display: inline-block;
       margin-left: 2%;
   }
   #app_goodcart>ul>li>button{
       width: 30px;
       height: 30px;
       border-radius: 50%;
   }
   #app_goodcart>ul>li>span{
       display: inline-block;
       width: 8%;
       border: 0;
       text-align: center;
       color: #666;
   }
   footer{
       width: 100%;
       height: 50px;
       background: #fff;
       border-top: 1px solid #ddd;
       position: fixed;
       bottom: 0;
   }
   footer>input{
        margin-left: 20px;
   }
   footer>label{
       display: inline-block;
       height: 50px;
       line-height: 50px;
       margin-left: 10px;
   }
   footer>h2{
       display: inline-block;
       width: 55%;
       height: 50px;
       margin: 0;
       float: right;
   }
   footer>label{
       font-size: 14px;
       color: #666;
   }
   footer>h2>span{
       font-size: 14px;
       color: red;
       font-weight: normal;
       height: 50px;
       line-height: 50px;

   }
   footer>h2>span>i{
       font-style: normal;
   }
   footer>h2>div{
       float: right;
       height:50px;
       line-height: 50px;
       width: 40%;
       text-align: center;
       font-size: 16px;
       display: inline-block;
       color:#10805a;
       background: #ffe037;

   }
   #del{
       width: 40%;
       height: 40px;
       background: #f5f5f5;
       float: right;
       font-size: 16px;
       margin-top: 2px;
       text-align: center;
       line-height: 40px;
       border-radius: 5px;
       border: 1px solid rgb(187, 74, 74);
       color: rgb(187, 74, 74);
       margin-bottom: 100px;
   }
</style>