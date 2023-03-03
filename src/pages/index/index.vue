<template>
    <view class="container">
        <view class="header">
            <image class="logo" src="/static/logo.png" />
        </view>
        <view class="content"></view>
        <view class="footer">
            <button class="button" type="primary" @click="appoint">预约</button>
            <button class="button" type="primary" @click="offer">取号</button>
            <view class="profile">
                <button v-if="shown" class="button" size="mini" @click="login">登录</button>
                <button v-if="shown" class="button" size="mini" @click="reg">注册</button>
                <button v-if="!shown" class="button" size="mini" @click="profile">个人信息</button>
            </view>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const shown = ref(true);

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
</script>

<style>
* {
    /* outline: red 1px solid; */
    overflow: hidden;
}

.container {
    padding: 10rpx;

    height: 100vh;

    background-color: #f0f0f0;
}

.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 50rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.profile {
    margin: 10rpx;

    display: flex;
    justify-content: center;
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
