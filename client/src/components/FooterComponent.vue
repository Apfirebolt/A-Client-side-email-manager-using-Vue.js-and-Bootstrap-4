<template>
  <footer class="bg-secondary-100 py-4 text-primary-100">
    <div class="container mx-auto px-4">
      <p class="text-center text-sm">
        &copy; {{ currentYear }} Emailer - A Gmail Clone
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
