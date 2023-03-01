<template>
    <view class="container">
        <view class="form">
            <view class="view">联系人:</view>
            <input class="input" placeholder="请输入您的联系人" />
            <view class="view">联系电话：</view>
            <input class="input" placeholder="请输入您的联系电话" />
            <view class="view">人数：{{ persons }}</view>
            <slider value="1" step="1" min="1" max="10" @change="change" @changing="change" />
            <view class="view">备注：</view>
            <textarea class="textarea" placeholder="您可以详细注明需求"></textarea>
        </view>

        <view class="footer">
            <button class="button" type="primary" @click="offer">取号</button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const persons = ref(1);

const change = (e: any) => {
    persons.value = e.detail.value;
};

const offer = () => {
    console.log('offer');
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

.textarea {
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
