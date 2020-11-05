<template>
    <div class="logintext">
        <van-cell-group>
            <!-- 允许输入数字，调起全键盘 -->
            <van-field v-model="content" type="number" :label="label" :placeholder="placeholder" :rule="rule"/>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content:'',
            }
        },
        props:['label','placeholder','rule'],
        methods:{
            handrule(){

                this.$emit('input-change',this.content);
            }
        },
        watch:{
            content(){
                this.handrule()
            },
        }
    }
</script>

<style scoped>
.name{
    margin:4vw 0;
}

.logintext{
    background:#ccc9c9;
}

</style>