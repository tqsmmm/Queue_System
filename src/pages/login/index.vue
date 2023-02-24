<template>
    <view>
        <view>
            <view>用户名：</view>
            <input class="uni-input" placeholder="请输入用户名" v-model="userId" />
            <view>密码：</view>
            <input class="uni-input" placeholder="请输入密码" v-model="pass" password />
        </view>

        <button>登录</button>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userId = ref('');

const pass = ref('');
</script>

<style scoped>
* {
    outline: red 1px solid;
}

uni-title {
    padding: 5px;
}

uni-input {
    padding: 5px;
    height: 40px;
}
</style>
