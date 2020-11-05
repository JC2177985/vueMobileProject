<template>
    <div class="logintop">
       <!-- <van-button type="default">默认按钮</van-button> -->
       <div></div>
       <div class="title">{{title}}</div>
       <div></div>
    </div>
</template>

<script>

    export default {
       props: {
            title:{
                type:String,
                default:'默认值'
            }
       }, 
    }
</script>

<style scoped>
.logintop{
    display: flex;
    height: 3.2vw;
    font-size:1.867vw;
    padding: 2.667vw;
    border-bottom: 0.133vw solid #ccc;
}

.logintop>>>div{
    flex:1;
    
}

.title{
    display: flex;
    justify-content: center;
}
</style>