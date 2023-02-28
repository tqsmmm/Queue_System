<template>
    <view class="container">
        <view class="number">{{ number }}</view>
        <view class="person">当前还有{{ person }}人在排队</view>
        <view class="time">{{ time }}</view>
        <view class="wait">预计需要等待{{ wait }}</view>

        <view class="bottom">
            <button type="primary">取消排队</button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import moment from 'moment';

const number = ref('Z10001');

const person = ref(0);

const time = moment().format('YYYY-MM-DD HH:mm:ss');

const wait = moment().format('HH:mm');
</script>

<style scoped>
* {
    outline: red 1px solid;
    overflow: hidden;
}

.container {
    padding: 10rpx;
}

.number {
    margin-top: 100rpx;

    display: flex;
    justify-content: center;

    font-size: 90rpx;
    font-weight: bold;
}

.person {
    display: flex;
    justify-content: center;

    font-size: 30rpx;
}

.time {
    display: flex;
    justify-content: center;

    font-size: 30rpx;
}

.wait {
    display: flex;
    justify-content: center;

    font-size: 30rpx;
}

.bottom {
    position: absolute;
    bottom: 10rpx;

    width: 730rpx;
}
</style>
