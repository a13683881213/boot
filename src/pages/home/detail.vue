<template>
  <div class="detail">
   
    <div class="wrapper">
      <div class="container clearfix">
        <div class="swiper">
          <swiper :options="swiperOption">
              <swiper-slide><img v-bind:src="pro2.img1" alt="" width="642px" height="645px"></swiper-slide>
              <swiper-slide><img v-bind:src="pro2.img2" alt=""></swiper-slide>
              <swiper-slide><img v-bind:src="pro2.img3" alt=""></swiper-slide>
              <swiper-slide><img v-bind:src="pro2.img4" alt=""></swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="content">
          <h2  class="item-title">{{pro2.name}}</h2>
          <p class="item-info">{{pro2.detail}}<br/>{{pro2.detail2}}<br/>{{pro2.detail3}}<br/>{{pro2.detail4}}</p>
          <div class="delivery">全国有效</div>
          <div class="item-price">{{product.price}}元<span class="del">1999元</span></div>
          <div class="line"></div>
          <div class="item-addr">
            <i class="icon-loc"></i>
            <div class="addr">{{pro2.address}}</div>
            <div class="stock">可订购</div>
          </div>
          <div class="item-version clearfix">
            <h2>选择旅行社</h2>
            <div class="phone fl" :class="{'checked':version==1}" @click="version=1">福娃娃旅行社</div>
            <div class="phone fr" :class="{'checked':version==2}" @click="version=2">稻草人旅行社</div>
          </div>
          <div class="item-color">
            <h2>选择时间</h2>
            <input class="phone checked" v-model="input1">
            
            </input>
          </div>
          <div class="item-total">
            <div class="phone-info clearfix">
              <div class="fl">{{pro2.name}} {{version==1?'福娃娃旅行社':'稻草人旅行社'}} </div>
              <div class="fr">{{product.price}}元</div>
            </div>
            <div class="phone-total">总计：{{product.price}}元</div>
          </div>
          <div class="btn-group">
            <a href="javascript:;" class="btn btn-huge fl" @click="addCart">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
    <div class="price-info">
      <div class="container">
        <h2>价格说明</h2>
        <div class="desc">
          <img src="/imgs/detail/item-price.jpeg" alt="">
        </div>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import ServiceBar from '../../components/serve/ServiceBar'
export default{
  // name:'detail',
  components:{
    swiper,
    swiperSlide,
 
    ServiceBar
  },
  mounted(){
      this.getProductInfo();
  },
  data(){
    return{
      prolist:[],
      version:1,
       product:{},
       pro2:{},
       input1:'',
       swiperOption:{
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        }
      }
    }
  },
  methods:{
      getProductInfo(){
           let id= this.$route.params.id;
            this.axios.get(`/products/${id}`).then(
              (res)=>{
                this.product=res;
                    console.log('我是detail中的id:'+id);
                   console.log(res);
              }
            );
           this.axios.get(`/chanpin/${id}`).then(
              (res)=>{
                this.pro2=res;
              }
            )
      },
      addCart(){    
                    if(this.input1){
                         this.axios.get('/carts').then((res)=>{       
                       console.log(res.cartProductVoList.length);
                                        if(res.cartProductVoList.length!==0){
                                              alert('只能添加一件商品')
                                        }else{
                                              this.sub()

                                        }
                         })
                    }
              },
               sub(){
               let id= this.$route.params.id;  
                   let pro2=this.pro2
                      this.axios.post('/carts',{
                                  productId:id,
                                  selected: true
                                   }).then((res)=>{               
                                                 this.$store.dispatch('addcount',res.cartTotalQuantity)  
                                                 this.$store.dispatch('sendimg',pro2.img1)
                                                 this.$store.dispatch('sendname1',pro2.name)
                             localStorage.setItem('store', JSON.stringify(this.$store.state))
                            //  设置localStorage，为cart页面提供item，cart页面就可以使用item替换this.$store.state
                                                 console.log(pro2.name);
                                                 console.log('添加成功'+id);  
                                                 this.$router.push('/cart');  
                                              
                                   }).catch((err)=>{
                                           console.log(err);
                                  })     
                             }
  }            

}
</script>
<style lang="scss">
  @import '../../assets/scss/config.scss';
  @import '../../assets/scss/mixin.scss';
  .detail{
    .wrapper{
      .swiper{
        float:left;
        width:620px;
        height:617px;
        margin-top:5px;
        img{
          width:100%;
          height:100%;
        }
      }
      .content{
       
        float:right;
        width:584px;
        height:870px;
        .item-title{
          font-size:28px;
          padding-top:30px;
          padding-bottom:16px;
          height: 26px;
        }
        .item-info{
          font-size:14px;
          height: 36px;
        }
        .delivery{
          font-size:16px;
          color:#FF6700;
          margin-top:50px;
          margin-bottom:14px;
          height: 15px;
        }
        .item-price{
          font-size:20px;
          color:#FF6700;
          height: 19px;
          .del{
            font-size:16px;
            color:#999999;
            margin-left:10px;
            text-decoration:line-through;
          }
        }
        .line{
          height:0;
          margin-top:25px;
          margin-bottom:28px;
          border-top:1px solid #E5E5E5;
        }
        .item-addr{
          height:90px;
          background-color:#FAFAFA;
          border:1px solid #E5E5E5;
          box-sizing:border-box;
          padding-top:31px;
          padding-left:64px;
          font-size:14px;
          line-height:14px;
          position:relative;
          .icon-loc{
            position: absolute;
            top: 27px;
            left: 34px;
            @include bgImg(20px,20px,'/imgs/detail/icon-loc.png');
          }
          .addr{
            color:#666666;
          }
          .stock{
            margin-top:15px;
            color:#FF6700;
          }
        }
        .item-version,.item-color{
          margin-top:30px;
          h2{
            font-size:18px;
            margin-bottom:20px;
          }
        }
        .item-version,.item-color{
          .phone{
            width:287px;
            height:50px;
            line-height:50px;
            font-size:16px;
            color:#333333;
            border:1px solid #E5E5E5;
            box-sizing: border-box;
            text-align:center;
            cursor:pointer;
            span{
              color:#666666;
              margin-left:15px;
            }
            .color{
              display:inline-block;
              width:14px;
              height:14px;
              background-color:#666666;
            }
            &.checked{
              border:1px solid #FF6600;
              color:#FF6600;
            }
          }
        }
        .item-total{
          height: 108px;
          background: #FAFAFA;
          padding: 24px 33px 29px 30px;
          font-size: 14px;
          margin-top:50px;
          margin-bottom:30px;
          box-sizing: border-box;
          .phone-total{
            font-size: 24px;
            color: #FF6600;
            margin-top: 18px;
          }
        }
      }
    }
    .price-info{
      background-color:#F3F3F3;
      height:340px;
      h2{
        font-size:24px;
        color:#333333;
        padding-top:38px;
        margin-bottom:30px;
      }
    }
  }
</style>