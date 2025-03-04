<template>
  <main class="shadow sm:rounded-lg" id="about">
    <div class="px-4 py-5">
      <h2 class="text-3xl my-2 py-2 text-center text-jet-black">TRASH</h2>
      <div class="flex flex-col items-center bg-gray-100 p-4 rounded-md">
        <p>Welcome to the trash email page</p>
      </div>
      <DashboardMenu />
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import DashboardMenu from "../components/DashboardMenu.vue";
</script>
