<template>


<div class="header">
           <div class="container">
                        <div class="log">
                                <a></a>        
                        </div>
                        <div class="title">
                        <span>{{title}}</span><slot name="tip"></slot>
                        </div>
                        <div class="username">
                                <a href="javascript:;">ds{{username}}</a>
                        </div>
          </div>     


 </div>


</template>

<script>
import {mapState} from 'vuex'
export default {
        name:'OrderHeader',
        props:{
           title:String
        },
        components:{
          
        },
        computed:{
                ...mapState(['username'])
        }
}
</script>


<style  lang="scss">
     @import '../../assets/scss/base.scss';
        @import '../../assets/scss/mixin.scss';
         @import '../../assets/scss/config.scss';
.header{
        .log{
                float: left;
                margin-right: 10px;
        }
        padding:30px 0;
        .title,.username{
              display: inline-block;
              height: 55px;
              line-height: 55px;
        span{
                font-size: 50px;
                margin-right: 20px;
        }
            
        }
        .username{
                   font-size: 28px;
                float: right;
               a{ 
                       color:aqua
                }
        }
        .title{
                float: left;
                font-size: 28px; 
        }



}
</style>