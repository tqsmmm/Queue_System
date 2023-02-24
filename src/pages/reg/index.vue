<template>
    <view>
        <view class="uni-common-mt">
            <view>用户名：</view>
            <input class="uni-input" placeholder="请输入用户名" v-model="userId" />
            <view>密码：</view>
            <input class="uni-input" placeholder="请输入密码" v-model="pass" password />
            <view>确认密码：</view>
            <input class="uni-input" placeholder="请确认密码" v-model="pass1" password />
        </view>

        <view>
            <button>注册</button>
            <button @click="reset">重置</button>
        </view>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const userId = ref('');

const pass = ref('');

const pass1 = ref('');

const reset = () => {
    userId.value = '';
};
</script>

<style scoped>
* {
    outline: red 1px solid;
}

uni-common-mt {
    padding: 5px;
    margin: 5px;
}

uni-input {
    height: 40px;
}
</style>
