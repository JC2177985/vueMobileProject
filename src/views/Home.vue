<template>
  <div class="home">
    <login-top :title="title"></login-top>
      <login-text label="姓名" placeholder="请输入姓名" @input-change="successInpt" rule="^.{6,16}$"/>
      <login-text label="账号" placeholder="请输入账号" @input-change="successInpt => res = number" />
      <login-text label="密码" placeholder="请输入密码" @input-change="successInpt => res = password" />
    <login-button></login-button>
  </div>
</template>

<script>
import LoginTop from '../components/LoginTop.vue'
import LoginText from '../components/LoginText.vue'
import LoginButton from '../components/LoginBtn.vue'

export default {
  components:{LoginTop,LoginText,LoginButton},
  data() {
    return {
      title: "登录页",
      name:"",
      number:"",
      password:"",
    }
  },
  methods:{
    successInpt(content){

        this.name = content;
        console.log(this.name);

    }
  }
};

</script>

<style scoped>
</style>
