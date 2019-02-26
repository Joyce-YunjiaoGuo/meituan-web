<template>
  <div class="page-register">
    <div class="header">
      <header>
        <div class="site-logo"></div>
        <div class="login">
          <span>已有美团账号？</span>
          <a href>登录</a>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form  :rules="rules" ref="registerForm" label-width="80px" class="demo-ruleForm" :model="registerForm">
        <el-form-item label="手机号" prop="userName">
          <el-input v-model="registerForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="创建密码" prop="password">
          <el-input type="password" v-model="registerForm.password" @input="addClass"></el-input>
        </el-form-item>
        <div class="pw-strength">
          <div :class="['bar', strengthClass]"></div>
          <div class="letter">
            <span class="label">弱</span>
            <span class="label">中</span>
            <span class="label">强</span>
          </div>
        </div>
        <el-form-item label="确认密码" prop="repassword">
          <el-input type="password" v-model="registerForm.repassword"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">同意以下协议并注册</el-button>
        </el-form-item>
        <a href="#" class="f1">《美团网用户协议》</a>
         
      </el-form>
    </div>
    <footer>
      <a href="https://www.meituan.com/">©meituan.com</a>
      <a href="http://www.miibeian.gov.cn/">京ICP证070791号</a>
      <span>京公网安备11010502025545号</span>
    </footer>
  </div>
</template>
<script>
import api from "@/api/index.js"
export default {
  data() {
       var checkName = (rule, value, callback) => {
           var reg =  /^[0-9a-zA-Z_]{1,}$/g;
        if (!value) {
          return callback(new Error('手机号不能为空'));
        }else if (value.length>16 || value.length<4  || value.match(reg) != value ) {
              callback(new Error('用户名必须为4-16位的字母数字下划线组成'))
        } else {
             callback();
        }
        
      };
      var checkPassword = (rule, value, callback) => {
          var reg =  /^[0-9a-zA-Z_]{1,}$/g;
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value.length>16 || value.length<6  || value.match(reg) != value) {
              callback(new Error('密码必须为6-16位的字母数字下划线组成'))
        } else {
             callback();
        }
         
      };
      var checkRepassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      registerForm: {
        userName: "",
        password: "",
        repassword: ""
      },
      rules: {
          userName: [
             { validator: checkName, trigger: 'blur' }
          ],
          password: [
             { validator: checkPassword, trigger: 'blur' }
          ],
          repassword: [
             { validator: checkRepassword, trigger: 'blur' }
          ]
        },
      strengthClass: ''
    };
  },
  methods: {
        addClass() {
            console.log(this.registerForm.password)
            if(this.registerForm.password.length < 8) {
                this.strengthClass = 'weak';
            }else if(this.registerForm.password.length < 12) {
                this.strengthClass = 'medium';
            }else {
                this.strengthClass = 'strong';
            }
        },
        onSubmit() {
            api.submitRegisterForm({
                params: {
                    userName: this.registerForm.userName,
                    password: this.registerForm.password,
                    rePassword: this.registerForm.repassword
                }
            }).then(res=> {
               if(res.data.status == 'success') {
                   this.$router.push({name: 'login'})
               }else {
                   alert(this.data.msg);
               }
            })
        }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>