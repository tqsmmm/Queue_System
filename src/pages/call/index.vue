<template>
    <view>您的服务号码{{ Service_Num }}已经被叫到！</view>
    <view>您可以马上到服务台出具服务号码</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const Service_Num = ref('');
</script>

<style scoped>
* {
    outline: red 1px solid;
}
</style>
