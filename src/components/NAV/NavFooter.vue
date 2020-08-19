<template>
    <div class="footer">     
            
                
                <p>鑫源商城</p>
         
            <div class="link">
                <a href="">鑫源商城主页</a><span>|</span>
                 <a href="">鑫源商城主页</a><span>|</span>
                  <a href="">鑫源商城主页</a><span>|</span>
                   <a href="">鑫源商城主页</a>
                  
            </div>
            <div class="banqian">
                    <div class="ban">copyright @2015 hahahahhaah.com all</div>
            </div>
    </div>
</template>

<script>

export default {
        name:'NavFooter',
        components:{
          
        }   
}
</script>


<style lang="scss" scoped>
    .footer{
        height:234px;
        background-color:#00b7ff;
        color:white;
        font-size:16px;
        text-align: center;
        .log{
            margin: 10px 0 31px 0;
            img{
                width: 53px;
                height:36px;
                margin-bottom:13px;
                margin-top:40px;
            }
         
        }
        .link{
            a{
                color:white;
                display: inline-block;
          
            }    
            span{
                margin:0 10px ;
            }
        }
        .banqian{
              .ban{
                    margin-top:13px
              }
        }
    }

</style>