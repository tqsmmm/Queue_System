<template>
    <view>
        <view>当前用户{{ userId }}</view>
        <textarea placeholder="服务需求"></textarea>
        <button>取号</button>
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
