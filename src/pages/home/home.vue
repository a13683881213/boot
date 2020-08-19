<template>
    <div class="">
          
    <nav-header></nav-header>
    <router-view></router-view>
     <nav-footer></nav-footer>

    </div>
</template>

<script>
import NavHeader from '../../components/NAV/NavHeader'
import NavFooter from '../../components/NAV/NavFooter'
export default {
        name:'home',
        components:{
                NavHeader,
                NavFooter
        }   
}
</script>


<style scoped>


</style>