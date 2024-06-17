<script setup lang="ts">
import request from '../utils/request'
import { onBeforeMount } from 'vue'

function getIndex() {
  request({
    url: '/index',
    method: 'get'
  }).then((res) => {
    console.log(res)
  })
}

function getIndexPost() {
  request({
    url: '/index',
    method: 'post'
  }).then((res) => {
    debugger
    console.log(res)
  })
}

onBeforeMount(() => {
  getIndex()
  getIndexPost()
})
</script>

<template>
  <div class="hello"><span>hello world</span>,<span>请开始你的开发之旅。</span></div>
</template>

<style scoped>
.hello {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}
</style>
