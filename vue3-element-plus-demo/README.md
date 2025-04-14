# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"


### 说明

- vite + vue全家桶 + ts + element-plus + axios 搭建的简易项目框架，主要适用于后台系统开发



### 相关资料：


- [Vue3全家桶+Element Plus+Vite+TypeScript+Eslint配置最佳实践](https://zhuanlan.zhihu.com/p/348959109)
- [备战2021：vite工程化实践，建议收藏](https://juejin.cn/post/6910014283707318279)
- [vite2-in-action](https://github.com/57code/vite2-in-action)
- [B站视频-Vite工作原理和手写实现「基本完结」](https://www.bilibili.com/video/BV1dh411S7Vz) 
- [B站视频-Vite2 + Vue3项目最佳实践「持续更新中」](https://www.bilibili.com/video/BV1vX4y1K7bQ?p=14)
- [B站视频-Vite2插件开发指南「持续更新中」](https://www.bilibili.com/video/BV1jb4y1R7UV)

