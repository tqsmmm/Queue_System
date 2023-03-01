<template>
    <view class="container">
        <view class="form">
            <view class="view">用户名：</view>
            <input class="input" disabled placeholder="请输入您的用户名" v-model="userId" />
            <view class="view">联系人：</view>
            <input class="input" placeholder="请输入您的联系人" v-model="userName" />
            <view class="view">联系电话：</view>
            <input class="input" type="tel" placeholder="请输入您的联系电话" v-model="userTel" />
        </view>

        <view class="footer">
            <button class="button" @click="edit">修改个人信息</button>
            <button class="button" @click="history">历史服务记录</button>
            <button class="button" type="primary" @click="status">查看预约状态</button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userId = ref('');

const userName = ref('');

const userTel = ref('');

const edit = () => {
    console.log('edit');
};

const history = () => {
    console.log('history');
};

const status = () => {
    console.log('status');
};
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
