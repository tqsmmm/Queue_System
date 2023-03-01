<template>
    <view class="container">
        <view class="form">
            <view class="view">您的服务号码{{ number }}已经被叫到！</view>
            <view class="view">您可以马上到服务台出具服务号码</view>
        </view>
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

    height: 100vh;

    background-color: #f0f0f0;
}

.form {
    border-radius: 10rpx; /* 设置圆角半径为10像素 */
    background-color: #ffffff; /* 设置背景颜色为浅灰色 */
    margin: 10rpx;
    padding: 30rpx;
}

.view {
    margin: 10rpx;
}
</style>
