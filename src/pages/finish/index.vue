<template>
    <view class="container">
        <view class="form">
            <view class="view">服务已经结束</view>
            <textarea class="textarea" placeholder="请对我们的服务做出评价"></textarea>
        </view>
    </view>
</template>

<script setup lang="ts"></script>

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

.textarea {
    margin: 10rpx;
}
</style>
