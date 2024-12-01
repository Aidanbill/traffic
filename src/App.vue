<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #f0f2f5;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

/* 添加全局滚动条样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}
</style> 