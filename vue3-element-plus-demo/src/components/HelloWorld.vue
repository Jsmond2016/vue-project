<template>
  <h1>{{ msg }}</h1>

  <p>count: {{ count }}</p>

  <el-button type="primary" @click="minus">减1</el-button>
  <el-button type="warning" @click="add">加1</el-button>
  <el-button type="info" @click="jumpToAbout">跳转页面-About</el-button>
</template>

<script setup lang="ts">
import { ref, defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router"
const store = useStore();
const count = computed(() => store.state.count);
const add = () => {
  store.commit("increment");
};
const minus = () => {
  store.commit("decrement");
};

const history = useRouter()
const jumpToAbout = () => {
  history.push('/about')
}
const msg = ref("Hello Vue 3 + Vite");
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
