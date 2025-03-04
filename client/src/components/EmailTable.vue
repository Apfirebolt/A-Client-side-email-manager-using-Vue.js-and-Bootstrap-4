<template>
  <div class="overflow-x-auto mt-4">
    <table v-if="emails.length > 0" class="min-w-full bg-white border border-gray-200">
      <thead class="bg-secondary-100">
        <tr>
          <th class="py-3 px-4 text-left text-white font-medium">From</th>
          <th class="py-3 px-4 text-left text-white font-medium">Subject</th>
          <th class="py-3 px-4 text-left text-white font-medium">Date</th>
          <th class="py-3 px-4 text-left text-white font-medium">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="email in emails"
          :key="email.id"
          class="border-t border-gray-200 hover:bg-gray-50"
        >
          <td class="py-3 px-4">{{ email.from.email }}</td>
          <td class="py-3 px-4">{{ email.subject }}</td>
          <td class="py-3 px-4">{{ formatDate(email.date) }}</td>
          <td class="py-3 px-4">
            <span class="inline-block bg-red-500 text-white text-xs px-2 py-1 rounded-full cursor-pointer mr-2" @click="deleteEmail(email)">Delete</span>
            <span class="inline-block bg-yellow-500 text-white text-xs px-2 py-1 rounded-full cursor-pointer mr-2" @click="markImportant(email)">Mark Important</span>
            <span class="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-full cursor-pointer" @click="markRead(email)">Mark Read</span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="flex items-center justify-center h-64">
      <p class="text-gray-500">No emails found</p>
    </div>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import { useEmailStore } from "../store/mail";
const props = defineProps({
  emails: {
    type: Array,
    required: true,
    default: [],
  },
});

const formatDate = (date) => dayjs(date).format("MMM D, YYYY h:mm A");

const deleteEmail = (email) => {
  useEmailStore().updateEmail(email, 'trash');
};

const markImportant = (email) => {
  useEmailStore().updateEmail(email, 'important');
};

const markRead = (email) => {
  useEmailStore().updateEmail(email, 'read');
};
</script>
