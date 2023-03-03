<template>
    <view class="container">
        <view class="form">
            <view class="title">我的号码</view>
            <view class="number">{{ number }}</view>
        </view>
        <view class="form">
            <view class="title">叫号进度</view>
            <view class="content">当前受理的号码是 {{ person }} 号</view>
            <view class="content">您前面还有 {{ wait }} 位在等待</view>
        </view>

        <view class="form">
            <view class="title">当前状态</view>
            <view class="content">当前号码状态：{{ status }}</view>
            <view class="content">取号时间：{{ time }}</view>
        </view>

        <view class="footer">
            <button class="button" @click="refresh">刷新</button>
            <button class="button" type="primary" @click="cancel">取消排队</button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import moment from 'moment';

const number = ref('Z10001');

const person = ref('0');

const time = moment().format('YYYY-MM-DD HH:mm:ss');

const wait = ref('0');

const status = ref('等待叫号');

const refresh = () => {
    console.log('refresh');
};

const cancel = () => {
    console.log('cancel');
};
</script>

<style scoped>
* {
    /* outline: red 1px solid; */
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

.title {
    display: flex;
    justify-content: center;
    margin-bottom: 10rpx;

    font-size: 30rpx;
    color: #808080;
}

.number {
    display: flex;
    justify-content: center;

    font-size: 80rpx;
    font-weight: bold;

    color: #ff0000;
}

.content {
    font-size: 30rpx;
    margin: 10rpx 0rpx 10rpx 0rpx;
}

.button {
    margin: 10rpx;
}

.footer {
    position: absolute;
    bottom: 10rpx;

    width: 730rpx;
}
</style>
