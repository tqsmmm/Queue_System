<template>
    <view class="container">
        <view class="form">
            <view class="view">用户名：</view>
            <input class="input" placeholder="请输入您的用户名" v-model="form.user_id" />
            <view class="view">密码：</view>
            <input class="input" placeholder="请输入您的密码" v-model="form.user_pwd" password />
        </view>

        <view class="footer">
            <button class="button" type="primary" @click="login">登录</button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { apiLogin } from '@/api/apiSystem';

const form = reactive({
    user_id: '',
    user_pwd: '',
});

const login = () => {
    apiLogin(form).then(res => {
        if (res.code == 200) {
            uni.navigateTo({
                url: '/pages/index/index',
            });
        } else {
            uni.showToast({
                title: res.message,
                icon: 'error',
            });
        }
    });
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

.view {
    margin: 10rpx;
}

.input {
    margin: 10rpx;
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
