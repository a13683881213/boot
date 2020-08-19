<template>
  <div class="cart">
        <order-header  title="所选商品" >
            <template v-slot:tip>
                请您确定人数
            </template>
        </order-header>  
 <div class="wrapper">
      <div class="container">
        <div class="cart-box">
          <ul class="cart-item-head">
            <!-- <li class="col-1"><span class="checkbox"  ></span>全选</li> -->
                       <li class="col-1">图片</li>
            <li class="col-1">名称</li>
            <li class="col-1">单人价格</li>
            <li class="col-1 xiao">人数</li>
            <li class="col-1">小计</li>
         <li class="col-1">操作</li>
          </ul>
          
          <ul class="cart-item-list" v-if="notshow"> 
            <li class="cart-item"  v-for="item in list" > 
              <img :src="img" width="130px" height="130px">
              <div class="item-name" >
                
                <span>{{name}}</span>
              </div>
              <div class="item-price">{{item.productPrice}}</div>
              <div class="item-num">
                <div class="num-box">
                  <a href="javascript:;" @click="update(item,'-')">-</a>
                  <span>{{item.quantity}}</span>
                  <a href="javascript:;" @click="update(item,'+')" >+</a>
                </div>
              </div>
              <div class="item-total">{{item.productTotalPrice}}</div>
             <div class="item-del">
                  <a href="javascript:;" @click="show" >删除</a>
              </div>
                 <modal title='提示'  :showModal="ifshow"  sureText='是否删除'  @gocart="dele(item)"  @cancel="cancel"></modal>
            </li>
       
          </ul>
        </div>
        <div class="order-wrap clearfix">
          <div class="cart-tip fl">
            <a href="/#/index">继续购物</a>
           
          </div>
          <div class="total fr">
            合计：<span>{{totalprice}}</span>元
            <a href="javascript:;" class="btn" @click="order">去结算</a>
          </div>
        </div>
      </div>
    </div>
 
        <service-bar></service-bar>
        <nav-footer></nav-footer>
  </div>
</template>
<script>
  import OrderHeader from '../../components/ORDER/OrderHeader'
  import ServiceBar from '../../components/serve/ServiceBar'
  import NavFooter from '../../components/NAV/NavFooter'
  import Modal from '../../components/Modal/Modal'
  import { Message } from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';

  export default{
    name:'index',
    components:{
      OrderHeader,
      ServiceBar,
      NavFooter,
      Modal
    },
    data(){
        return{
          list:[],
          totalprice:0,
          allchecked:false,
          checknum:0,
          ifshow:false,
          notshow:true,
          name:'',
          img:''
        }
    },
    created(){
      // 在页面加载时读取localStorage里的状态信息
if (localStorage.getItem('store')) {
  this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(localStorage.getItem('store'))))
}
//  this.$store.的replaceState方法可以改变state的值
// cart页面的图片显示是用了localStorage 如果有 就用它将state换下来  ，localStorage早已经设置好
// 页面刷新前将vuex的数据先保存至localStorage
// 如果是localStorage则会读取上一次打开页面的数据。！！！！！！！
// 如何解决vuex页面刷新数据丢失问题？
    },
    beforeMount(){
      
        // this.getList();
    },
    mounted(){     

      this.getList();
      
          
    },
    methods:{
        renderData(res){
              
                       this.list=res.cartProductVoList

                     

                 this.name=this.$store.state.name1      
                 this.img=this.$store.state.img     
                   console.log(this.name);              
                 console.log(this.img);   
                                     
                       this.allchecked=res.selectedAll
                       this.totalprice=res.cartTotalPrice
                       this.checknum=this.list.filter(item=>item.productSelected).length
        },
      // 获取购物车列表
        getList(){
           this.axios.get('/carts').then((res)=>{
                this.renderData(res) 
               
                  })
        },
        update(item,type){
          
                let quantity=item.quantity
                  if(type=='+'){
                       if(quantity>item.productStock){
                        //  alert('库存不足')
                          Message.success('库存不足')
                       }else{
                      ++quantity
                      }
                  }else if (type=='-'){
                    if(quantity==1){
                      //  alert('不能再减小了')
                      // Message.success('不能再减少了')
                       --quantity
                      this.$message.success('已经取消购买')
                    }else if(quantity>0){
                     --quantity}
                  }
                  this.axios.put(`/carts/${item.productId}`,{
                     quantity
                  }).then((res)=>{
                     this.$store.dispatch('addcount',res.cartTotalQuantity);
                    this.renderData(res)
                  })
        },
        dele(item,index){
            let  productId=item.productId
            this.axios.delete(`/carts/${productId}`,{
             productId,
             index
            }).then((res)=>{

                       this.renderData(res);
                       this.ifshow=false;
                       console.log(productId);
            })


        },
        show(){
          this.ifshow=true
        },
        cancel(){
          this.ifshow=false
        },
        order(){
          
        }
    }
  }
</script>
<style lang="scss">
   
  .cart{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:114px;
      .cart-box{
        background-color:#fff;
        font-size:14px;
        color:#999999;
        text-align:center;
        .checkbox{
          display: inline-block;
          width: 22px;
          height: 22px;
          border: 1px solid #E5E5E5;
          vertical-align: middle;
          margin-right: 17px;
          cursor:pointer;
          &.checked{
            background:url('/imgs/icon-gou.png') #FF6600 no-repeat center;
            background-size:16px 12px;
            border:none;
          }
        }
        .cart-item-head{
          display:flex;
          height: 79px;
          line-height: 79px;
          .col-1{
            flex:1 1 auto;
            .xiao{
              display:inline-block;
              margin-left: 50px;
            }
          }
  
        }
        .cart-item-list{   
           position: relative;             
          .cart-item{
              .item-name{
                 span{
                   padding-left:100px;
                 }
              }
            display:flex;
            align-items:center;
            justify-content:space-between;
            height:125px;
            border-top:1px solid #E5E5E5;
            font-size:16px;
            .item-price{
              flex: 1 100 100px;
              margin-left:2%;
              color:#333333;
            }
            @import  '../../assets/scss/mock';
            .item-num{
              flex:1 100 auto;
               margin-left:-30px;
              .num-box{
                margin-left: -60px;
                display:inline-block;
                width:150px;
                height:40px;
                line-height:40px;
                border:1px solid #E5E5E5;
                font-size:14px;
                a{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
                span{
                  display:inline-block;
                  width:50px;
                  color:#333333;
                }
              }
            }
            .item-total{
                margin-left: -60px;
              flex:1;
              color:#FF6600;
            }
            .item-del{
              flex:1;
              width:14px;
              height:12px;
              background:url('/imgs/icon-close.png') no-repeat center;
              background-size:contain;
              cursor:pointer;
            }
          }
        }
      }
      .order-wrap{
        font-size:14px;
        color: #666666;
        margin-top: 20px;
        height: 50px;
        line-height: 50px;
        .cart-tip{
          margin-left: 29px;
          a{
            color: #666666;
            margin-right:37px;
          }
          span{
            color:#FF6600;
            margin:0 5px;
          }
        }
        .total{
          font-size:14px;
          color:#FF6600;
          span{
            font-size:24px;
          }
          a{
            width:202px;
            height:50px;
            line-height:50px;
            font-size:18px;
            margin-left:37px;
          }
        }
      }
    }
  }
</style>