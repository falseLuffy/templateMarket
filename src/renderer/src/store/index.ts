import { createStore } from 'vuex'
import { getStorageLanguage } from '../plugins/i18n'

export default createStore({
  state: {
    tagsList: [],
    collapse: false,
    contentHeight: document.documentElement.clientHeight - 120,
    local: getStorageLanguage()
  } as any,
  mutations: {
    delTagsItem(state, data) {
      state.tagsList.splice(data.index, 1)
    },
    setTagsItem(state, data:any) {
      state.tagsList.push(data)
    },
    clearTags(state) {
      state.tagsList = []
    },
    closeTagsOther(state, data) {
      state.tagsList = data
    },
    closeCurrentTag(state, data) {
      for (let i = 0, len = state.tagsList.length; i < len; i++) {
        const item = state.tagsList[i]
        if (item.path === data.$route.fullPath) {
          if (i < len - 1) {
            data.$router.push(state.tagsList[i + 1].path)
          } else if (i > 0) {
            data.$router.push(state.tagsList[i - 1].path)
          } else {
            data.$router.push('/')
          }
          state.tagsList.splice(i, 1)
          break
        }
      }
    },
    // 侧边栏折叠
    handleCollapse(state, data) {
      state.collapse = data
    },
    handleHeight(state, data) {
      state.contentHeight = data
    },
    toggleLocal(state, data) {
      state.local = data
    }
  },
  actions: {},
  modules: {}
})
