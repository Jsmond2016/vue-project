<template>
  <h1>{{ msg }}</h1>
  <el-button type="primary" @click="goBack">回到首页</el-button>
</template>
<script setup lang="ts">
import { reactive, ref, } from 'vue'
import { useRouter } from 'vue-router'

const state = reactive({
  msg: "About"
})

const history = useRouter()
const goBack = () => {
  history.push('/home')
}

const msg = ref('About')


</script>