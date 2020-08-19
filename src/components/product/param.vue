<template>
    <div class="nav"  v-bind:class="{'fixed':fixed}">
            <div class="contanier">
                <div class="title">
                    {{product.name}}
                </div>
                <div class="parm">
               
                <slot name="buy"></slot>      
                </div>                
                </div>

      </div>
</template>

<script>

export default {
        name:'ProductParam',
            props:{
                    product:{
                            type:Object,
                          
                    }
    
            },
         data(){
            return {
                fixed:false
            }

        },
        mounted(){
            window.addEventListener('scroll',this.initScroll)
        },
        methods:{
            initScroll(){
                  let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop
                    this.fixed=scrollTop>152?true:false
      
            }
        },
        destroyed(){
        window.removeEventListener('scroll',this.initScroll,false)
        // false通过冒泡 销毁
        }
}
</script>


<style lang="scss" scoped>
 @import '../../assets/scss/mixin.scss';
 @import '../../assets/scss/config.scss';

    .nav{
        z-index:12 ;
       line-height: 70px;
       height: 70px;
       &.fixed{
           @include modalpos(fixed, 0, auto, auto, $w:100%) 
       }  
        .contanier{
                @include flex();
             .title{
                 font-size: $fontH;
                 font-weight: bold;
                } 
                .parm {
              font-size: $fontJ;
                        a{
                            margin: 0 10px;;
                        }
                        .mai{
                            margin-right: 10px;
                            width: 50px;
                            height: 30px;
                            background-color:rebeccapurple;
                        }
                }  
        }
    }

</style>