<template>
  <VueDraggableResizable
    :x="window.leftPix || 0"
    :y="window.topPix || 0"
    :w="window.widthPix || 100"
    :h="window.heightPix || 100"
    :minw="window.minWidth"
    :minh="window.minHeight"
    :parent="true"
    :draggable="true"
    :resizable="false"
  >
    <div
      :class="{
        'window-container': true
      }"
    />
  </VueDraggableResizable>
</template>

<script setup>
import { toRefs } from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable'

const props = defineProps({
  window: {
    type: Object,
    required: true
  },
})
const { window } = toRefs(props)

</script>

<style lang="scss" scoped>
.window-container {
  pointer-events: none;
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 5px;
  background-color: rgb(15, 15, 15);
}
</style>