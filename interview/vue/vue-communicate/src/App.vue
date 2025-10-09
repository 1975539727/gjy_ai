<script setup>
// setup 组合式API
// 最新的vue3 函数式写法 
// 函数式组件 使用setup 语法糖 
// import ParentOne from './components/ParentOne.vue'
// import ParentTwo from './components/ParentTwo.vue'
// import {ref} from 'vue'
// const msg1 = ref('这是传给子组件的信息1')
// const msg2 = ref('这是传给子组件的信息2')
import EmitParent from './components/EmitParent.vue'
</script>

<template>
  <div>
    <!-- <ParentOne /> -->
     <!-- <ParentTwo :msg1="msg1" :msg2="msg2" /> -->
      <!-- <EmitParent /> -->
       <ExposeParent />
  </div>
</template>

<style scoped>

</style>
