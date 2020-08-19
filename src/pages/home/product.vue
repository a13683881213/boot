<template>
    <div class="t1">
       
        <product-param :product="product">
            <template v-slot:buy>
                <button class="mai" @click="buy">购买</button>
            </template>
        </product-param>
         
        <div class="video-bg" @click="showSlide='slideDown'"></div>
        <div class="video-box" v-show="showSlide">
          <div class="overlay"></div>
          <div class="video" v-bind:class="showSlide">
            <span class="icon-close" @click="closeVideo"></span>
            <video src="/imgs/product/yunnan.mp4" muted autoplay controls="controls"></video>
          </div>
        </div>
      </div>
   
</template>

<script>
import ProductParam from '../../components/product/param'
export default {
        name:'product',
        components:{
            ProductParam
        },
        mounted(){
            this.getinfo();
        },
        methods:{
            getinfo(){
                    let id=this.$route.params.id;
                console.log(id);
                    this.axios.get(`/chanpin/${id}`).then((res)=>{
                            console.log(res);
                            this.product=res    
                                            })
            },
            buy(){
                    let id = this.$route.params.id;
                    console.log('我买啦'+id);
                    this.$router.push(`/detail/${id}`);
                    // 因为是动态的路由，所以要用反引号
            },
            closeVideo(){
        this.showSlide='slideUp';
                  setTimeout(()=>{
                    this.showSlide='';
                  },600)
      }
        },
        data(){
            return {
                  showSlide:'',
                  product:{}
            }
        }

}
</script>


<style lang="scss" scoped>
    @import '../../assets/scss/mixin.scss';
        @import '../../assets/scss/config.scss';
   .t1{
       .h{
           height:1000px;
         }
   }
   .video-bg{
          background:url('/imgs/product/gallery-1.png') no-repeat center;
          background-size:cover;
          width:1226px;
          height:540px;
          margin:0 auto 120px;
          cursor:pointer;
        }
        .video-box{
          .overlay{
            @include modalpos(fixed);
            background-color:#333333;
            opacity:.4;
            z-index:10;
          }
          @keyframes slideDown{
            from{
              top:-50%;
              opacity:0;
            }
            to{
              top:50%;
              opacity:1;
            }
          }
          @keyframes slideUp{
            from{
              top:50%;
              opacity:1;
            }
            to{
              top:-50%;
              opacity:0;
            }

            
          }
          .video{
            position:fixed;
            top:-50%;
            left:50%;
            transform:translate(-50%,-50%);
            z-index:10;
            width:1000px;
            height:536px;
            opacity:1;
            &.slideDown{
              animation:slideDown .6s linear;
              top:50%;
            }
            &.slideUp{
              animation:slideUp .6s linear;
            }
            .icon-close{
              position:absolute;
              top:20px;
              right:20px;
              @include bgImg(20px,20px,'/imgs/icon/icon-close.png');
              cursor:pointer;
              z-index:11;
            }
            video{
              width:100%;
              height:100%;
              object-fit:cover;
              outline:none;
            }
          }
        }
                    
</style>