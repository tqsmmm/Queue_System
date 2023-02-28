<template>
    <view class="container">
        <view class="view">您的服务号码{{ number }}已经被叫到！</view>
        <view class="view">您可以马上到服务台出具服务号码</view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const number = ref('');
</script>

<style scoped>
* {
    outline: red 1px solid;
    overflow: hidden;
}

.container {
    padding: 10rpx;
}

.view {
    margin: 10rpx;
}
</style>
