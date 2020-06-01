<template>
  <div class="login-container">
    <section>
      <!--
       loginForm:
       status-icon  是否在输入框中显示校验结果反馈图标
       model        表单数据对象
       rules        表单校验规则
       -->
      <el-form
        status-icon
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form">
        <!-- username -->
        <el-form-item prop="username">
          <el-input
            type="text"
            autocomplete="off"
            placeholder="请输入用户名"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- password -->
        <el-form-item prop="password">
          <el-input
            type="password"
            autocomplete="off"
            placeholder="请输入密码"
            v-model="loginForm.password"
          />
        </el-form-item>
        <footer>
          <el-button type="primary" @click.native.prevent="handleLogin">登录</el-button>
        </footer>
      </el-form>
    </section>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {Form as ElForm, Input} from 'element-ui';
  import {UserModule} from "@/store/modules/user";

  /* 接口类型定义 -- 必须定义到装饰器前面 */
  interface LoginForm {
    username: string,
    password: string,
  }

  @Component({
    name: 'login'
  })

  export default class extends Vue {
    /**
     * @method validateMobilePhone      手机号校验
     * @param {any} rule                校验规则
     * @param {string} value            待校验文本
     * @param {Function} callback       回调
     */
    private validateMobilePhone = (rule: any, value: string, callback: Function) => {
      if (!value.trim()) {
        callback(new Error('Please enter the correct username'))
      } else {
        callback()
      }
    }
    /**
     * @method validateMobilePhone      密码校验
     * @param {any} rule                校验规则
     * @param {string} value            待校验文本
     * @param {Function} callback       回调
     */
    private validatePassword = (rule: any, value: string, callback: Function) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }

    /* 登录校验规则 */
    private loginRules = {
      username: [{validator: this.validateMobilePhone, trigger: 'blur'}],
      password: [{validator: this.validatePassword, trigger: 'blur'}]
    }

    /* 登录相关变量 */
    // 登录
    private loading: boolean = false;

    private loginForm = {
      username: 'admin',
      password: 'a123456'
    };

    /* 生命周期函数 */
    async created() {
    }

    private mounted() {

    }

    public destroyed() {

    }

    /* methods方法 */

    // 登录处理
    private handleLogin() {
      (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
        console.log(typeof this.$router, 'router')
        if (valid) {
          console.log('校验通过')
          await UserModule.Login({
            ...this.loginForm,
            router: this.$router
          })
        } else {
          console.log('校验未通过')
          return false;
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: $loginBg;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    > section {
      position: absolute;
      background-color: rgba(250, 250, 250, 0.8);
      border-radius: 5px;

      > div {
        width: 300px;
        position: relative;
        height: 80px;
        text-align: center;

        > span {
          line-height: 80px;
          font-size: 30px;
          color: #000;
          display: inline-block;
          text-align: center;
        }

        .international {
          position: absolute;
          top: 33px;
          right: 20px;
          cursor: pointer;
        }
      }

      .login-form {
        padding: 30px 20px 20px 20px;
        position: relative;
        width: 300px;
        max-width: 300px;
        margin: 0 auto;
        overflow: hidden;

        > footer {
          text-align: center;
          width: 100%;

          > button {
            width: 100%;
          }
        }
      }
    }
  }
</style>
