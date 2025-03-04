<template>
  <div class="overflow-x-auto mt-4">
    <table
      v-if="emails.length > 0"
      class="min-w-full bg-white border border-gray-200"
    >
      <thead class="bg-secondary-100">
        <tr>
          <th class="py-3 px-4 text-left text-white font-medium">From</th>
          <th class="py-3 px-4 text-left text-white font-medium">Subject</th>
          <th class="py-3 px-4 text-left text-white font-medium">Date</th>
          <th class="py-3 px-4 text-left text-white font-medium">Actions</th>
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
            <span
              class="inline-block bg-danger text-white text-xs px-2 py-1 rounded-full cursor-pointer mr-2"
              @click="deleteEmail(email)"
            >
              <TrashIcon class="w-4 h-4 inline-block mr-1" /> Delete
            </span>
            <span
              class="inline-block bg-secondary-100 text-white text-xs px-2 py-1 rounded-full cursor-pointer mr-2"
              @click="markImportant(email)"
            >
              <InformationCircleIcon class="w-4 h-4 inline-block mr-1" /> Mark
              Important
            </span>
            <span
              class="inline-block bg-primary-200 text-black text-xs px-2 py-1 rounded-full cursor-pointer mr-2"
              @click="markRead(email)"
            >
              <EyeIcon class="w-4 h-4 inline-block mr-1" /> Mark Read
            </span>
            <span
              class="inline-block bg-primary-300 text-black text-xs px-2 py-1 rounded-full cursor-pointer"
              @click="openInfoModal(email)"
            >
              <BookOpenIcon class="w-4 h-4 inline-block mr-1" /> View Content
            </span>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else class="flex items-center justify-center h-64">
      <p class="text-gray-500">No emails found</p>
    </div>

    <TransitionRoot appear :show="isInfoModalOpen" as="template">
      <Dialog as="div" @close="closeInfoModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/25" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-light-blue text-left align-middle shadow-xl transition-all"
              >
                <ShowDetail :email="selectedEmail" />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import dayjs from "dayjs";
import { ref } from "vue";
import { useEmailStore } from "../store/mail";
import ShowDetail from "./ShowDetail.vue";
import {
  Dialog,
  TransitionChild,
  TransitionRoot,
  DialogPanel,
} from "@headlessui/vue";
import {
  TrashIcon,
  EyeIcon,
  InformationCircleIcon,
  BookOpenIcon,
} from "@heroicons/vue/outline";
const props = defineProps({
  emails: {
    type: Array,
    required: true,
    default: [],
  },
});

const formatDate = (date) => dayjs(date).format("MMM D, YYYY h:mm A");
const isInfoModalOpen = ref(false);
const selectedEmail = ref({});

const openInfoModal = (email) => {
  selectedEmail.value = email;
  isInfoModalOpen.value = true;
};

const closeInfoModal = () => {
  selectedEmail.value = {};
  isInfoModalOpen.value = false;
};

const deleteEmail = (email) => {
  useEmailStore().updateEmail(email, "trash");
};

const markImportant = (email) => {
  useEmailStore().updateEmail(email, "important");
};

const markRead = (email) => {
  useEmailStore().updateEmail(email, "read");
};
</script>
