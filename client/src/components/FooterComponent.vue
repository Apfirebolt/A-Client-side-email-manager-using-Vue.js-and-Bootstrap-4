<template>
  <footer class="bg-jet-black py-4">
    <div class="container mx-auto px-4">
      <p class="text-center text-light-blue text-sm">
        &copy; {{ currentYear }} Mini Url - A Url Shortening Service
      </p>
    </div>
  </footer>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear,
    }
  },
})
</script>

<style>
/* Add any custom styles here */
</style>
