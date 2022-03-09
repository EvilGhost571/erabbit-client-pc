<template>
  <div class="container">
    <!-- 默认的模块(不带命名空间)，state 区分模块，其他 getters mutations actions 都在全局。 -->
    <!-- 1.1 使用 A 模块的 state 数据 -->
    <p>{{ $store.state.moduleA.username }}</p>
    <!-- 1.2 使用 A 模块的 getters 数据 -->
    <p>{{ $store.getters.newName }}</p>

    <!-- 2.1 使用 B 模块的 state 数据 -->
    <p>{{ $store.state.moduleB.username }}</p>
    <!-- 2.2 使用 B 模块的 getters 数据 -->
    <p>{{ $store.getters['moduleB/newName'] }}</p>
    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionsFn">actionsFn</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore()
    const mutationsFn = () => {
      // 2.3 提交 B 模块的修改
      store.commit('moduleB/updateName')
    }
    const actionsFn = () => {
      // 2.4 调用 B 模块的actions
      store.dispatch('moduleB/updateName')
    }
    return {
      mutationsFn,
      actionsFn
    }
  }
}
</script>

<style>

</style>
