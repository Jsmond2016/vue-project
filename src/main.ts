import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

const browserModule = import.meta.glob("./mocks/browser.js", {
  eager: true,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 这么好的前端mock工具，还不用起来？ https://www.zhihu.com/people/chao-wu-91/posts
// MSW：可用于浏览器和测试的Mock服务 https://juejin.cn/post/7018732383067176991#heading-4
if (process.env.NODE_ENV === "development") {
  const { worker } = browserModule["./mocks/browser.js"] as {
    worker: any;
  };
  worker?.start();
}

app.mount("#app");
