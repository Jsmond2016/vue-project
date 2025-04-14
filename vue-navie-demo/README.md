# 学习 docker 的测试项目

## 文档参考

- Vue3  https://cn.vuejs.org/guide/quick-start.html#creating-a-vue-application
- Vue-Router https://router.vuejs.org/
- Pina  https://pinia.vuejs.org/
- vite  https://cn.vitejs.dev/guide/#trying-vite-online
- Axios https://www.axios-http.cn/docs/instance
- naive-ui https://www.naiveui.com/zh-CN/os-theme/components/button
- dayjs https://dayjs.gitee.io/zh-CN/


## Docker 部署

本项目对应后端测试项目：https://github.com/Jsmond2016/mock-server

**目的：**

- Docker 部署前端项目
- Docker 部署后端项目：以 Nodejs 项目为例
- Docker 部署数据库，Redis 等；
- 尝试 Docker-compose，一条命令一次性部署所有；
- 接入 CI/CD ，上述流程自动化；


**需求：**

- [ ] Docker 部署前端项目（Nginx）
  - [ ] 配置 接口转发
  - [ ] 配置 Nginx 项目文件夹映射，不然每次修改代码都要重新打镜像；



相关资料：

- [Docker教程](https://www.runoob.com/docker/docker-container-usage.html)
- [写给前端的 docker 使用指南](https://juejin.cn/post/7139724794672447518)
- [前端全栈之路 - 玩转 Docker (Dockerfile)](https://juejin.cn/post/7160972042757079077)
- [通过Nginx代理转发配置实现跨域的方法（API代理转发）（nginx 代理跨域）](https://www.zhiu.cn/74905.html)
- [Docker目录映射](https://www.cnblogs.com/famine/p/13332023.html)
- [Docker 解决代码更新后同镜像（images）的同步问题](https://zhuanlan.zhihu.com/p/366271256?utm_id=0)
- [docker安装Nginx，映射本地文件](https://blog.csdn.net/DPXXMT/article/details/117914728)
