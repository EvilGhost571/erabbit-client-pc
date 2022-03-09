import { createStore } from 'vuex'

// A模块
const moduleA = {
  state: {
    username: 'moduleA'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  }
}

// B模块
const moduleB = {
  // 开启命名空间
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  },
  mutations: {
    updateName (state) {
      state.username = 'Lucy'
    }
  },
  actions: {
    updateName (ctx) {
      // 发请求
      setTimeout(() => {
        console.log(ctx)
        ctx.commit('updateName')
      }, 1000)
    }
  }
}

export default createStore({
  modules: {
    moduleA,
    moduleB
  }
})

// vue2.0 创建仓库 new Vuex.Store({})
// vue3.0 创建仓库 createStore({})
// export default createStore({
//   // 存状态
//   state: {
//     username: 'Revy'
//   },
//   // 计算属性
//   getters: {
//     newName (state) {
//       return state.username + ' !!!'
//     }
//   },
//   // 修改方法
//   mutations: {
//     updateName (state) {
//       state.username = 'Lucy'
//     }
//   },
//   // 拿数据
//   actions: {
//     updateName (ctx) {
//       // 发请求
//       setTimeout(() => {
//         console.log(ctx)
//         ctx.commit('updateName')
//       }, 1000)
//     }
//   },
//   // 分模块
//   modules: {}
// })
