<template>
    <view>用户名：{{ userId }}</view>
    <view>
        <button>修改个人信息</button>
        <button>历史服务记录</button>
        <button>查看预约状态</button>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userId = ref('');
</script>

<style scoped>
* {
    outline: red 1px solid;
}
</style>
