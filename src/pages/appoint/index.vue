<template>
    <view>
        <view>预定日期</view>
        <picker class="uni-picker" mode="date" :value="date">
            <view class="uni-input">{{ date }}</view>
        </picker>
        <view>预定时间</view>
        <picker mode="time" :value="time">
            <view>{{ time }}</view>
        </picker>
        <button>预约</button>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import moment from 'moment';

const date = ref(moment().format('LLLL'));

const time = ref('12:01');
</script>

<style scoped>
* {
    outline: red 1px solid;
}

uni-pucker {
    height: 40px;
}

uni-input {
    height: 40px;
}
</style>
