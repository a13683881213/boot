<template>
    <div class="index">         
            <div class="container">  
                <div class="swiper-box"> 
                      
                    <swiper v-bind:options="swiperOption">
                <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
                          <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a>
                </swiper-slide>
                  <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
          </swiper>                                     
                 </div>    
                        <!-- <div class="ads"> <a  :href="'/#/product/'+ads.id" v-for="ads in adlist" :key="ads.id"><img :src="ads.img" width='306px' height='168px'></a>  </div>
                        <div class="banner"> 
                                <a :href="'/#/product/30'"><img  width="1226px" src="/imgs/banner-1.png"></a>
                                 </div> -->
                        <div class="products"> 
                                <h1>手机</h1>
                                <div class="wrapper"> 
                                        <div class="left"> 
                                        <a href="/#/product/35"><img src="https://dimg04.c-ctrip.com/images/0300y120002142q57C057.jpg"></a>
                                
                                        </div>
                                        <div class="list-box"> 
                                                <div class="list"> 
                  <div class="item" v-for="(arr,index) in phonelist" :key="index"> 
                                        
                                          <div class="item-img" v-for="(item2,index) in imgs2" :key="index"> 
                                                 
                                                  <img v-bind:src="item2.imgUrl" >
                                          
                                          
                                          <div class="item-info" v-for="item in arr" :key="item.id"> 
                                                   <h3>{{item2.title}}</h3>
                                                   <p>{{item2.desc}}</p>
                                                   <p>￥{{item2.price}}</p>
                                              
                                                   <a class="mai" @click="show(item2)">购买<span></span></a>
                                            </div>
                                          </div>
                                                                  
                                                         
                                                        </div>
                <div>
                       <div class="item" v-for="(arr,index1) in phonelist" :key="index1"> 
                  
                                          <div class="item-img" v-for="(item3,index1) in imgs3" :key="index1"> 
                                                 
                                                  <img v-bind:src="item3.imgUrl" >
                                          
                                          
                                          <div class="item-info" v-for="item in arr" :key="item.id"> 
                                                   <h3>{{item3.title}}</h3>
                                                   <p>{{item3.desc}}</p>
                                                   <p>￥{{item3.price}}</p>
                                              
                                                   <a class="mai" @click="show(item3)">购买<span></span></a>
                                            </div>
                                          </div>
                                                                  
                                                         
                                                        </div>
                  </div>
                                
                                                 </div>
                                                
                                           </div>
                                
                                 </div>
                          </div>
                            
                   
         <service-bar></service-bar>
         <!-- serve是首页独有的，产品栈没有 -->
         <modal title="提示" sureText="前往购物车" btnType="1" modalType="middle"
          :showModal="showModal" v-on:cancel="close" v-on:gocart="go">

                 <template v-slot:slot1>
                         <p>{{sureText}}</p>
                 </template>

         </modal>
         
    </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ServiceBar from '../../components/serve/ServiceBar'
import 'swiper/dist/css/swiper.css'
import Modal from '../../components/Modal/Modal'

export default {
        name:'index',
           components:{
                ServiceBar,
                 swiper,
                 swiperSlide,
                 Modal
        },
        mounted(){
                        this.init();
                        this.getcount();
                        this.mock();
        },
         data() {
         return {     
                 prolist:[],
                 imgs2:[
                 ],
                 img3:[],
                sureText:'',
           showModal:false,
             swiperOption: {
                 autoplay:true,
                 loop:true,
                 effect : 'flip',
                 flipEffect: {
                 slideShadows : true,
                 limitRotation : true,
                },
                pagination: {
                  el: '.swiper-pagination',
                  clickable :true
                 },
                 navigation: {
                    nextEl: '.swiper-button-next',
                   prevEl: '.swiper-button-prev',
                 },
          },
          slideList:[{
                  id:'45',
                  img:'https://img1.qunarzz.com/qs/2003/18/8013e794c150e502.jpg'
          },{
                  id:'46',
                  img:'https://img1.qunarzz.com/qs/1909/c5/649aae0f58224002.jpg'
          },{
                  id:'47',
                  img:'https://img1.qunarzz.com/qs/2007/22/dfd49774c7a1f102.jpg'
          },{
                  id:'48',
                  img:'https://img1.qunarzz.com/qs/2006/17/13b08d2a13e8602.jpg'
          }],
          menuList:[
                  [
                    {  id:'31',
                       img:'/imgs/item/item-box-1.png',
                       name:'31版'
                    },{  id:'32',
                        img:'/imgs/item/item-box-2.png',
                        name:'32版'
                    },{  id:'33',
                         img:'/imgs/item/item-box-3.jpg',
                         name:'33版'
                    }
                  ],[  {  id:'31',
                       img:'/imgs/item/item-box-1.png',
                       name:'31版'
                    },{  id:'32',
                        img:'/imgs/item/item-box-2.png',
                        name:'32版'
                    },{  id:'33',
                         img:'/imgs/item/item-box-3.jpg',
                         name:'33版'
                    }]
          ],adlist:[
                  {
                          id:33,
                          img:'/imgs/ads/ads-1.png'
                  }, {
                          id:48,
                          img:'/imgs/ads/ads-2.jpg'
                  }, {
                          id:45,
                          img:'/imgs/ads/ads-3.png'
                  }, {
                          id:47,
                          img:'/imgs/ads/ads-4.jpg'
                  }
          ],phonelist:[
                  
          ],
         
         }
      },methods:{
              init(){
                      this.axios.get('/products',{
                              params:{
                                  categoryId:'100012',
                                  pageSize:8
                          }
                      }).then((res)=>{
                                 console.log(res.list);
                                 this.phonelist =[res.list.slice(0,1)]
                 
                     })              },
                show(item2){
                        
                                    this.$store.dispatch('sendimg',item2.imgUrl) 
                                     this.$store.dispatch('sendname1',item2.title) 
                                localStorage.setItem('store', JSON.stringify(this.$store.state))

                           this.axios.get('/carts').then((res)=>{  
                                        this.prolist=res.cartProductVoList 
                                         if(this.prolist.length!==0){
                                                   
                                                         alert('购物车只限放一种商品');
                                                      this.$router.push('/cart');  
                                           }
                                        else{   
                                                this.showModal=true
                                                 let productId=item2.id   
                                                 this.axios.post('/carts',{
                                                          productId,
                                                        selected: true
                                                 }).then((res)=>{   this.showModal=true;   
                                                                           this.sureText="添加成功,请继续选择其他产品"  })                                          }  

                           })
                },
                           
                     close(){
                           this.showModal=false 
                     },
                     
                    go(){
                           this.$router.push('/cart');   
                     },
                     getcount(){
                               this.axios.get('/carts/products/sum').then((res)=>{
                                
                                         this.$store.dispatch('addcount',res)
                  })
                     },
                     mock(){
                             this.axios.get('/user/img').then((res)=>{
                                                        this.imgs2=res
                                             console.log(this.imgs2);
                                
                             });
                             this.axios.get('/user/img3').then((res)=>{
                                                        this.imgs3=res
                                             console.log(this.imgs3);
                                
                             });
                     }
      
      
      
      }
}
</script>


<style lang="scss" scoped>
   @import '../../assets/scss/mixin.scss';
        .index{
                .swiper-box{
                        position: relative;
                  .swiper-container {     
                        height: 451px;
                        img{
                                width:100%;
                                height: 100%;
                        // 填充慢
                        }
                     

                }
            
                    
}  
.banner{
                        margin-top:20px;
                }
        }
        .products{
              padding:30px 0 50px;
               h1{
                       font-size: 22px;
                       height: 21px;
                       line-height: 21px;
                       color:#00b7ff
               }
               .wrapper{
                       display:flex;
                        .left{
                                margin-right:10px;
                                img{
                                     width: 224px;
                                     height: 619px;   
                                }
                        }
                        .list-box{
                                .list{
                                                            
                                      width:1000px;
                                //       height: 619px;
                                     .item{
                                        height: 302px;
                                        text-align: center;
                                          @include flex();
                                        img{

                                             width:200px;
                                              height:195px  ;
                                        
                                        }
                                        // .item-info{
                                        // 其中放的是关于span h的普通样式
                                        // }
                                        .mai{
                                                cursor: pointer;
                                                line-height: 30px;
                                                height: 20px;
                                                span{
                                                        @include bgImg(20px, 20px, '/imgs/icon/icon-cart-hover.png', contain) ;
                                                        vertical-align: middle;
                                                }
                                        }
                                     } 
                                }
                        }

               }  
        }
</style>