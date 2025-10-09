<template>
    <div>
      <button @click="handleClick">按钮</button>
      <button @click="emit('my-click','hello')">按钮</button>
    </div>
  </template>
  
  <script setup>
  const { emit } = defineEmits(['myClick'])
  const handleClick = () => {
    emit('my-click', '只是')
  }

  </script>
  
  <style scoped>
  
  </style>