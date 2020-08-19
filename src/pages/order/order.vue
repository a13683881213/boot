<template>
    <div class="">
    
    <order-header></order-header>
    <router-view></router-view>
     <order-footer></order-footer>

    </div>
</template>

<script>

import OrderHeader from '../../components/ORDER/OrderHeader'
import OrderFooter from '../../components/ORDER/OrderFooter'

export default {
        name:'order',
        components:{
           OrderHeader,
           OrderFooter
        }   
}
</script>


<style scoped>


</style>