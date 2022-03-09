<template>
<!-- vue2.0需要根元素，vue3.0可以是代码片段 Fragment -->
  <div class="container">
    App
    <!-- 1. 使用根模块 state 的数据 -->
    <p>{{ $store.state.username }}</p>
    <!-- 2. 使用根模块 getters 的数据 -->
    <p>{{ $store.getters.newName }}</p>
    <p>{{ $store.getters["newName"] }}</p>
    <button @click="mutationsFn">mutationsFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    // 使用 vuex 仓库
    const store = useStore()
    // 1. 使用根模块 state 的数据
    console.log(store.state.username)

    // 2. 使用根模块 getters 的数据
    console.log(store.getters.newName)
    // console.log(store.getters['newName']) 最好使用上面的写法，否则 eslint 会报错

    const mutationsFn = () => {
      // 3. 提交根模块 mutations 函数
      // store.commit('updateName')
      // 4. 提交根模块 actions 函数
      store.dispatch('updateName')
    }
    return { mutationsFn }
  }
}
</script>

<style>

</style>
