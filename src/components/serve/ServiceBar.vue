<template>
<div class="serve">
    <div class="container">
           <ul>
               <li><span class="icon-set"></span>鑫源旅游服务</li>
               <li><span class="icon-7"></span>鑫源旅游服务</li>
               <li><span class="icon-8"></span>鑫源旅游服务</li>
               <li><span class="icon-9"></span>鑫源旅游服务</li>
           </ul>
    </div>
</div>
    
</template>

<script>

export default {
        name:'ServiceBar',
        components:{
          
        }   
}
</script>
<style  lang="scss" scoped>
        @import '../../assets/scss/mixin.scss';
.serve{
    padding: 33px 0;
    color:#666666;
    font-size: 16px;
    li{
        display: inline-block;
        width:23%;
        text-align:center;
        border-right: 1px solid #e5e5e5;
        span{
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 8px;;
            vertical-align: middle;
        }
        .icon-set{
             @include bgImg(20px,20px,'/imgs/icon/icon-setting.png');
        }
        .icon-7{
             @include bgImg(20px,20px,'/imgs/icon/icon-7day.png');
        }
        .icon-8{
             @include bgImg(20px,20px,'/imgs/icon/icon-setting.png');
        }
        .icon-9{
             @include bgImg(20px,20px,'/imgs/icon/icon-post.png');
        }
    }
}
</style>