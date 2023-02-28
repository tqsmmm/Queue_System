<template>
    <view class="container">
        <view class="view">服务已经结束</view>
        <textarea class="textarea" placeholder="请对我们的服务做出评价"></textarea>
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
}

.view {
    margin: 10rpx;
}

.textarea {
    margin: 10rpx;
}
</style>
