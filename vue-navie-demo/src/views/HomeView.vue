<script setup lang="ts">
// import TheWelcome from '../components/TheWelcome.vue'
import { reactive } from "vue";
import { NButton, NCard, NLayout, NSpace, NLayoutFooter, NLayoutHeader, NLayoutContent, NGrid, NGi } from "naive-ui";
import $http from "../api/index";

const state = reactive({ data: "" });
const handleClick = async () => {
  const { data } = await $http.get("/test", { params: { code: 123 } });
  console.log("data: ", data);
  state.data = data;
  console.log("click");
};
</script>

<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-header>测试</n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <n-grid x-gap="12" :cols="4">
          <n-gi>
            <n-button type="info" @click="handleClick">naive-ui</n-button>
          </n-gi>
          <n-gi>
            <n-card title="返回结果" v-if="state.data">
              {{ state.data }}
            </n-card>
          </n-gi>
          <n-gi>
            <div class="light-green" />
          </n-gi>
          <n-gi>
            <div class="green" />
          </n-gi>
        </n-grid>
      </n-layout-content>
      <n-layout-footer>页脚</n-layout-footer>
    </n-layout>
  </n-space>
</template>
