<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { NButton } from "naive-ui";
import $http from "../api/index";

const handleClick = async () => {
  await $http.get("/test", { params: { code: 123 } });
  console.log("click");
};
</script>

<template>
  <main>
    <n-button type="info" @click="handleClick">naive-ui</n-button>
  </main>
</template>
