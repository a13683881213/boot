<template>
    <transition name="slide">
    <div class="modal" v-show="showModal" >
        <div class="mask">
            <div class="tan">
                <div class="header">
                    <span>{{title}}</span>
                    <a class="lose" v-on:click="$emit('cancel')"></a>
                </div>
                 <div class="body">
                     <slot name="slot1"></slot>
                 </div>
                  <div class="footer">
                      <div class="btn-group">
                      <a  class="btn" @click="$emit('gocart')">{{sureText}}</a>
                      <a  class="btn" v-on:click="$emit('cancel')">取消</a>
                      </div>
                  </div>
            </div>
        </div>
    </div>
      </transition>
</template>

<script>
export default {
     name:'Modal',
     props:{
         modalType:{
            //  弹框的类型  
             type:String,
             default:'form'
         },
         
         title:String,
         btnType:String,
        // 按钮的类型
         sureText:{
             type:String,
             default:'确定'
         },
         cancelText:{
             type:String,
             default:'取消'
         },
         showModal:Boolean
        //  动画

     },
     data(){
         return {
         }
     }
}

</script>
<style lang="scss">
 @import '../../assets/scss/base.scss';
 @import '../../assets/scss/mixin.scss';
 @import '../../assets/scss/config.scss';

@import  '../../assets/scss/modal.scss';
</style>
