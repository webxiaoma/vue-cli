<template>
   <div class="loginWrap">
      <div class="loginCenter">
         <el-row>
            <el-col>
               <div class="title">
                   <img src="@/assets/img/logo.jpg"/>
                   <span>后台管理</span>
               </div>
               <p class="text">您可以访问 <a href="https://webxiaoma.github.io/project-cli/">项目工程化</a> 来了解项目</p>
            </el-col>
            <el-col>
               <div class="loginFrom">
                    <el-form :model="form1"  :rules="rules1" ref="loginDataOne" class="demo-ruleForm">
                        <el-tabs tab-position="top" style="height: 200px;">
                            <el-tab-pane label="账号密码登录">
                                <div class="loginInput">
                                      <el-form-item  prop="user">
                                        <el-input type="text" v-model="form1.user" placeholder="请输入用户名">
                                          <i class="iconfont icon-denglu" slot="suffix"></i>
                                        </el-input>
                                      </el-form-item>
                                      <el-form-item  prop="password">
                                        <el-input @keyup.enter.native="submit" type="password" v-model="form1.password" placeholder="请输入登录密码">
                                          <i class="iconfont icon-denglumima" slot="suffix"></i>
                                        </el-input>
                                      </el-form-item>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="手机号登录">
                                 <div class="loginInput">
                                    <el-form :model="form2"  :rules="rules2" ref="loginDataTwo" class="demo-ruleForm">
                                      <el-form-item  prop="phone">
                                        <el-input type="text" v-model="form2.phone" placeholder="请输入用户名">
                                          <i class="iconfont icon-denglu" slot="suffix"></i>
                                        </el-input>
                                      </el-form-item>
                                      <el-form-item  prop="corde">
                                        <div class="inlineInput" >
                                          <el-input type="text" v-model="form2.corde" placeholder="验证码" @keyup.enter.native="submit">
                                              <i class="iconfont icon-denglumima" slot="suffix"></i>
                                            </el-input>
                                            <el-button  v-show="isBtn" @click="requireCorde" type="primary" >获取验证码</el-button>
                                            <el-button  v-show="!isBtn" type="info" plain disabled >{{time}}s</el-button>
                                        </div>
                                      </el-form-item>
                                    </el-form>
                                </div>
                             </el-tab-pane>
                        </el-tabs>
                        <div class="loginTop" >
                            <el-checkbox v-model="checked">记住密码</el-checkbox>
                            <router-link to="/login">忘记密码</router-link>
                        </div>
                        <el-form-item class="submit">
                           <el-button @click="submit" type="primary" :loading="loading">登录</el-button>
                        </el-form-item>
                        <div class="loginBottom">
                            <div class="otherLogin">
                               <span class="titleLogin">其他登录方式：</span>
                               <span class="type">
                                 <i class="iconfont icon-weixin" slot="suffix"></i>
                               </span>
                                <span class="type">
                                 <i class="iconfont icon-qq1" slot="suffix"></i>
                               </span>
                            </div>
                            <router-link to="/login">注册账户</router-link>
                        </div>
                    </el-form>

                     
               </div>
            </el-col>
         </el-row>
      </div>
  </div>
</template>

<script>
import {RulesUserName,RulesPassword,RulesPhone,RulesCorde} from '../../../public/rules'

export default {
  data () {
    return {
       time:60,
       isBtn:true,
       interval:'',
       loading: false,
       checked:false,
        form1: {
          user:'',
          pass: '',
        },
        rules1:{
          user: [
            { validator: RulesUserName, trigger: 'blur' }
          ],
          password: [
            { validator: RulesPassword, trigger: 'blur' }
          ],
        },
        form2: {
          phone:'',
          corde: '',
        },
        rules2:{
          phone: [
            { validator: RulesPhone, trigger: 'blur' }
          ],
          corde: [
            { validator: RulesCorde, trigger: 'blur' }
          ],
        }
    };
  },
  created(){

  },
  methods: {
    submit(){  // 登录
        this.$refs.loginDataOne.validate((valid) => { // 登录表单验证
              if (valid) {
                 this.loadingOne = true;

                // 验证通过
                setTimeout(()=>{
                  this.loadingOne = false;
                },4000)

              } else {
                return false;
              }
       });
    },
    requireCorde(){ // 获取验证码
        this.isBtn = false;
        this.interval = setInterval(()=>{
           if(this.time !== 0){
              this.time--
           }else{
             clearInterval(this.interval)
             this.isBtn = false;
             this.time =60;
           }
        },1000)
    }
  }
}

</script>
<style lang='less' scoped>
@import "../../theme/base-theme.less";

.loginWrap{
    width:100%;
    height:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    background:url('~@/assets/svg/userBg.svg') no-repeat center rgb(246, 249, 251);
    .loginCenter{
      width:368px;
      padding:120px 0 0;
      .text{
        width:100%;
        text-align: center;
        padding:8px 0;
        color:rgba(0,0,0,0.65);
        a{
          color: rgba(24,144,255,1);
          &:hover{
            color: rgb(51, 154, 250);
          }
        }
      }
      .el-row{
        width:100%;

      }
      .title{
         display: flex;
         align-items: center;
         justify-content: center;
         img{
            width:40px;
            height:40px;
            margin-right:15px;
         }
         span{
            font-size:30px;
         }
      }
      .loginFrom{
         padding:50px 0 0;
         /deep/.el-tabs__header{
             display:flex;
             justify-content: center;
             .el-tabs__nav-wrap{
              //  padding:0 20px;
             }
         }
         /deep/.el-tabs__item{
           font-size:16px;
         }
         .loginInput{
            padding: 15px 0 0;
            
            /deep/.el-input__suffix{
              width:30px;
              left:5px;
            }
            /deep/.el-input__inner{
              text-indent:25px;
            }
           
         }
         .loginTop{
            display:flex;
            justify-content: space-between;
            margin-bottom:10px;
            a{
              color:rgba(24,144,255,1);
            }
         }
         .submit{
            .el-button{
              width:100%;
              font-size:16px;
            }
          }
          .loginBottom{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .otherLogin{
               display: flex;
               align-items: center;
              .type{
                  padding:4px;
                  cursor: pointer;
                  i{
                    font-size:25px;
                    color:rgb(158, 158, 158);
                    transition:0.3s;
                    &:hover{
                      color:rgb(61, 160, 253);
                    }
                  }
              }
            }
            
          }

         .inlineInput{
            display:flex;
            .el-button--primary{
                margin-left:15px;
            }
            .el-button--info{
              width:156px;
            }
         }
      }
    }
}


// 手机端样式 小于768
@media (max-width: @screen-xs) {
  .loginWrap{

     .loginCenter{
        padding:40px 10px;
        .loginFrom{
          padding-top:30px;
        }
     }
  }
}
</style>