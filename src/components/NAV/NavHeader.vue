<template>
    <div class="header">
            <div class="nav-top">
                   <div class="container">
                        <div class="menu">
                                <a href="javasrcipt:;">鑫源商城</a>
                               
                        </div>         
                        <div class="user">
                                <a href="javasrcipt:;" v-if="username">{{username}}</a>
                                <a href="javasrcipt:;" v-if="!username" @click="login">登录</a>
                                <a href="javasrcipt:;" v-if="username" @click="logout">退出</a>
                               
                                <a href="javasrcipt:;"   v-if="username"  class="cart" @click="gotocart"><span class="icon-cart"></span>购物车{{count}}</a>    
                        </div>
                  </div>                       
            </div>
           <div class="nav-header">
<div class="container">
        <div class="log">
                <a></a>
        </div>
        <!-- <div class="menu">
                <div class="menu-item">
                        <span>旅游</span>
                        <div class="child">
                              <ul>
                                      <li class="product" v-for="item in list" :key="item.id">
                                              <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                                   <div class="pro-img">
                                                   <img v-bind:src="item.mainImage" v-bind:alt="item.subtitle">
                                                   </div>
                                                   <div class="pro-name">{{item.name}}</div>
                                                   <div class="pro-price">{{item.price|currency}}元 </div>
                                              </a>
                                               
                                      </li>
                              </ul>  
                        </div>
                </div>
   
        </div> -->
        <div class="serach">
                <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javasrcipt:;"></a>
                </div>
        </div>
</div>

           </div>
        </div>
</template>

<script>

export default {
        name:'NavHeader',
        data(){
                return{
                        
                        list:[]      
                }
        },
        filters:{
                // 过滤器 
                currency(val){
                        if(!val){
                                 return '0.00'
                        }else {return '$'+val.toFixed(2)
                        // 把数字舍入为仅有2位小数的数字：
                        }
                }
        },
        computed:{
               username(){
                       return this.$store.state.username;
               },
               count(){
                       return this.$store.state.count;
               }
        //        这里用计算属性是为了解决延迟问题，渲染的时候还没得到请求的值
        },
        mounted(){
             this.getProductList();
             this.getcount();
        //      这一次的getcount是为了登录之后就有数量，
        //  于是就要在挂在的时候  ,再发生请求，再触发vuex 才能再次显示
        },
        methods:{
          getcount(){
                  this.axios.get('/carts/products/sum').then((res)=>{
                          console.log(res);
                          this.$store.dispatch('addcount',res)
                  })
          },
          getProductList(){
                  this.axios.get('/products',{
                          params:{
                                  categoryId:'100012',
                                  pageSize:6
                          }
                  }).then((res)=>{
                          
                                  this.list=res.list;
                                  console.log(this.list);
                        
                  })
          },
          gotocart(){
              this.$router.push('/cart');    
          },
          login(){
                  this.$router.push('/login');    
          },
          logout(){
                        // this.count=0;
                        this.axios.post('/user/logout').then(()=>{
                                // alert(res.status)
                                // console.log(res);
                                this.$message.success('退出成功')
                            this.$cookie.set('uerId', '', { expires: '-1' });
                            this.$store.dispatch('saveUsername','')
                                // this.$store.dispatch('addcount','0')
                        })
          }
        }   
}
</script>
<style lang="scss">
        @import '../../assets/scss/base.scss';
        @import '../../assets/scss/mixin.scss';
         @import '../../assets/scss/config.scss';
 .header{
      .nav-top{
              height:39px;
              line-height:39px;
              background-color:#00b7ff;
              color:black;
              .container{
                 width: 1226px;
                 margin:auto;
                @include flex();
                 a{
                    display:inline-block;
                    color:white;
                    margin-right:17px;
                 }
                 .cart{
                         width:110px;
                         background-color:#00b7ff;
                         text-align: center;
                         color:#ffffff;
                         .icon-cart{
                                 @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                                 margin-right:10px;
             }
                 }
                    
              }  
      }
      .nav-header{
              .container
              {
                  width: 1226px;
                  margin-right: auto;
                  margin-left: auto;
                  height:112px;
                   position: relative;
                @include flex();
         .log{
            display:inline-block;
            width:55px;
            height:55px;
           background-color:#00b7ff;
            a{
               display:inline-block;     
                width:110px;
                  height:55px;
              &:before{
                      content:'';
                   @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                      transition:all 0.5s;
              }
                &:after{
                      content:'';
                       @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                  
              }
                &:hover:before{
                        margin-left:-55px;
                        transition:all 0.5s;
                }
            }
                  }
         .menu{
                 display: inline-block;
                //  width: 200px;
                 padding-left:50px;
                 margin-left:-300px;
                 .menu-item{   
                       display: inline-block;
                       color:#00b7ff;
                       font-weight:bold;
                       font-size: 16px;
                      line-height:112px;
                      margin-right:20px;
                      
                      span{
                              cursor:pointer;
                      }
                      &:hover{
                           color:$colorA;
                           .child{
                                height:220px;
                                 opacity: 1; 
                           }   
                      }
                      .child{
                                 overflow: hidden;
                                 z-index: 10;
                                background: #ffffff;
                              position: absolute;;
                              top:112px;
                              left:0;
                              width:1226px;
                              border-top:1px solid red;
                              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11); 
                              transition:all 0.5s;    
                                height: 0;
                                opacity:0;                    
                             .product{
                               float: left; 
                               width:16.6%;
                               height:220px;                              
                               font-size:12px;
                               line-height:12px;
                               text-align: center;
                               position: relative;
                               a{
                                       display: inline-block;
                               }
                               img{
                                    width: auto;
                                    height: 111px;
                                    margin-top:26px; 
                                    margin-left:30px 
                               }
                               .pro-img{
                                       height:137px;
                               }
                               .pro-name{
                                       font-weight: bold;
                                        margin-top:10px;
                                         margin-bottom:8px;      
                                          color:#333333
                               }
                               .pro-price{
                                       color:#FF6600
                               }
                                &:before{
                                     content:'';
                                     border-left:1px solid $colorF;
                                     height: 100px;
                                     width: 1px;
                                     position: absolute;
                                     top:50px;
                                     right:0;
                             }
                                // &:last-child:before{
                                //          display: none;
                                // }
                          
                         }
                      }
                     
                 }
                 
         }
         .serach{
                 width: 319px;
                 .wrapper{
                      height: 50px;
                      @include flex();           
                      input{    
                                border:none;
                                height:50px ;
                                width: 264px;
                                border-right: 1px solid rgb(49, 58, 49);
                        }
                        a{
                         @include bgImg(18px,18px,'/imgs/icon-search.png');   
                        }
                 }

         }

                
      }

      }

         
        }

</style>