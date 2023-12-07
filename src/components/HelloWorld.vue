<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
})

const count = ref(0)

const increaseCount = () => {
  count.value++
}
</script>

<template>
  <h1>{{ title }}</h1>

  <div class="card">
    <button type="button" @click="increaseCount">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
