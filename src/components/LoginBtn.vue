<template>
    <div class="loginbtn">
        <van-button class="btn" type="info" @click="login">信息按钮</van-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods() {
            // login() {

            // }
        }
    }
</script>

<style scoped>
.loginbtn{
    margin: 6.667vw 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 6.667vw;
}

</style>