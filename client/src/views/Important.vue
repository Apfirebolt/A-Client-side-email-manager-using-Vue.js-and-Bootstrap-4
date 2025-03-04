<template>
  <main class="shadow sm:rounded-lg" id="about">
    <div class="px-4 py-5">
      <h2 class="text-3xl my-2 py-2 text-center text-jet-black">IMPORTANT</h2>
      <div class="flex flex-col items-center bg-gray-100 p-4 rounded-md">
        <p>All your important marked emails would be here!</p>
      </div>
      <DashboardMenu />
      <EmailTable v-if="emails" :emails="importantEmails" />
    </div>
  </main>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useEmailStore } from "../store/mail";
import EmailTable from "../components/EmailTable.vue";
import DashboardMenu from "../components/DashboardMenu.vue";

const emailStore = useEmailStore();

const emails = computed(() => emailStore.getEmails);
const importantEmails = computed(() => emails.value?.data?.filter(email => email.isImportant) || []);

onMounted(async () => {
  if (emails.value.length === 0) {
    await emailStore.getEmailsAction();
  }
});
</script>
