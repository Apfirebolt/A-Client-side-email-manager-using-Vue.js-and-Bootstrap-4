<template>
  <main class="shadow sm:rounded-lg" id="about">
    <div class="px-4 py-5">
      <h2 class="text-3xl my-2 py-2 text-center text-jet-black">TRASH</h2>
      <div class="flex flex-col items-center bg-gray-100 p-4 rounded-md">
        <p>Welcome to the trash section where you'd see emails you deleted!</p>
      </div>
      <DashboardMenu />
      <EmailTable v-if="emails" :emails="deletedEmails" />
    </div>
  </main>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useEmailStore } from "../store/mail";
import DashboardMenu from "../components/DashboardMenu.vue";
import EmailTable from "../components/EmailTable.vue";

const emailStore = useEmailStore();

const emails = computed(() => emailStore.getEmails);
const deletedEmails = computed(() => emails.value?.data?.filter(email => email.isDeleted) || []);

onMounted(async () => {
  if (emails.value.length === 0) {
    await emailStore.getEmailsAction();
  }
});
</script>
