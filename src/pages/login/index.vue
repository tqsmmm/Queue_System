<template>
    <view class="container">
        <view class="view">用户名：</view>
        <input class="input" placeholder="请输入用户名" v-model="userId" />
        <view class="view">密码：</view>
        <input class="input" placeholder="请输入密码" v-model="pass" password />

        <view class="bottom">
            <button class="button" type="primary" @click="login">登录</button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userId = ref('');

const pass = ref('');

const login = () => {
    console.log('login');
};
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

.input {
    margin: 10rpx;
}

.button {
    margin: 10rpx;
}

.bottom {
    position: absolute;
    bottom: 10rpx;

    width: 730rpx;
}
</style>
