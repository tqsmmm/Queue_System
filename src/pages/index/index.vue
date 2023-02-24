<template>
    <view class="content">
        <image class="logo" src="/static/logo.png" />
        <view class="text-area">
            <text class="title">{{ title }}</text>
        </view>
    </view>
    <view>
        <button @click="login">登录</button>
        <button @click="reg">注册</button>
        <button @click="appoint">预约</button>
        <button @click="call">叫号</button>
        <button @click="finish">结束</button>
        <button @click="offer">取号</button>
        <button @click="wait">等待</button>
        <button @click="profile">个人信息</button>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('排队叫号系统');

const login = () => {
    uni.navigateTo({
        url: '/pages/login/index',
    });
};

const reg = () => {
    uni.navigateTo({
        url: '/pages/reg/index',
    });
};

const appoint = () => {
    uni.navigateTo({
        url: '/pages/appoint/index',
    });
};

const call = () => {
    uni.navigateTo({
        url: '/pages/call/index',
    });
};

const finish = () => {
    uni.navigateTo({
        url: '/pages/finish/index',
    });
};

const offer = () => {
    uni.navigateTo({
        url: '/pages/offer/index',
    });
};

const profile = () => {
    uni.navigateTo({
        url: '/pages/profile/index',
    });
};

const wait = () => {
    uni.navigateTo({
        url: '/pages/wait/index',
    });
};
</script>

<style>
* {
    outline: red 1px solid;
}
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
