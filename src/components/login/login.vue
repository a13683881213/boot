<template>
  <div class="login">
    <div class="container">
 
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line"></span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号"  v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password"  >
          </div>
        
            <a href="javascript:;" class="btn" @click="login">
                  <i class="text">登录</i>
            </a>
     
          <div class="tips">
            <div class="sms" @click="register">注册</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
           <a href="">鑫源商城主页</a><span>|</span>
                 <a href="">鑫源商城主页</a><span>|</span>
                  <a href="">鑫源商城主页</a><span>|</span>
                   <a href="">鑫源商城主页</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>
<script>
export default{
  name:'login',
  data(){
    return {
      username:'',
      password:'',
      userId:''
    }
  },
  methods:{
    login(){
        let{username,password}=this;
        this.axios.post('/user/login',{
           username,
           password
        }).then((res)=>{
           console.log(res);
          this.$cookie.set('uerId', res.id, { expires: 'Session' });
              // console.log(res);
              this.$store.dispatch('saveUsername',res.username) 
              this.$router.push('/index');
            
            // this.axios.get('/carts/products/sum').then((res)=>{
            //               console.log(res);
            //               this.$store.dispatch('addcount',res)
            //       })      

        });
      
    },
    register(){
      this.axios.post('/user/register',{
        username:'admin1',
        password:'admin1',
        email:'609266@qq.com'
      }).then(()=>{
         alert('注册成功')
      })
    }
  }

}

</script>
<style lang="scss">
//  @import '../../assets/scss/base.scss';
//  @import '../../assets/scss/mixin.scss';
//  @import '../../assets/scss/config.scss';
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('/imgs/product/gallery-4.png') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 20px;
        padding-right: 20px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        top:160px;
        left:120px;
       
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#00b7ff;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          margin-right: 50px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
          padding-bottom: 10px;
          .text{
            margin-bottom: 50px;
            color: black;
            }
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#00b7ff;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>