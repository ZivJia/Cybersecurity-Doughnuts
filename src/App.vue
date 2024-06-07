<template>
  <main class="canvas-area">
    <WindowContainer
      v-for="(window, windowID) in windows"
      :key="windowID"
      :window="window"
    />
  </main>
</template>

<script setup>
import WindowContainer from './components/WindowContainer.vue'

const windows = {
  1: {
    leftPix: 100,
    topPix: 100,
    widthPix: 400,
    heightPix: 300,
    minWidth: 200,
    minHeight: 150,
    zIndex: 10
  }
}

</script>

<style lang="scss">
.canvas-area {
  height: 100%;
  width: 100%;
  right: 0;
  top: 0;
  position: relative;
}
</style>