<template>
  <div id="app">
 <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
     
  },
  data(){
    return{
      res:{},
        data:''
    }
  },
  methods:{
      getuser(){
         this.axios.get('/user').then((res={})=>{
                     this.$store.dispatch('saveUserName',res.username);
         })
      },
      getCartcount(){
        this.axios.get('/carts/products/sum').then(()=>{


        })
      }
  },
  mounted(){
        // this.axios.get('/mock/user/login.json').then((res)=>{
        // this.res=res;}
        // )
        // // 通过本地创建json文件MOCK设置

            // this.$router.push('/index');   

     



      // const url="/api/search/hotwords"
      // // 会拼接到vue的config中prox
      // //  axios.get(url).then(
      // //     ()=>{

      // //     }
      //  jsonp(url,(res)=>{
      //       this.data=res
      //  })
      // //  不是发送真正的请求
  //    this.axios.get('/mock/user/login.json').then((res)=>{
  //     this.res=res;
  // })
  // // 因为有vue-axios
  }
}
</script>

<style lang="scss">
@import  './assets/scss/reset.scss';
@import  './assets/scss/modal.scss';
@import  './assets/scss/config.scss';
@import  './assets/scss/mixin.scss';

</style>
