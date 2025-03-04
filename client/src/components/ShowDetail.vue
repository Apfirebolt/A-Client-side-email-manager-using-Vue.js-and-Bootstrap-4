<template>
  <div v-if="email" class="rounded overflow-hidden shadow-lg p-4 bg-white">
    <div class="font-bold text-xl mb-2">{{ email.subject }}</div>
    <p class="text-gray-700 text-base">{{ email.content }}</p>
    <div class="mt-4">
      <span class="text-gray-600 text-sm">From: {{ email.from ? email.from.email : "" }}</span>
    </div>
    <div>
      <span class="text-gray-600 text-sm">Date: {{ formatDate(email.date) }}</span>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
defineProps({
  email: {
    type: Object,
    required: true,
    default: {},
  },
});

const formatDate = (date) => dayjs(date).format("MMM D, YYYY h:mm A");
</script>
