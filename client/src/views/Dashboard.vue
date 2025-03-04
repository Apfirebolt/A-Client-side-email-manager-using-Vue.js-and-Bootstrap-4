<template>
  <section class="shadow sm:rounded-lg" id="about">
    <div class="px-4 py-5">
      <h2 class="text-3xl my-2 py-2 text-center text-jet-black">DASHBOARD</h2>
      <div class="flex flex-col items-center bg-gray-100 p-4 rounded-md">
        <p>
          Welcome to the dashboard,
          <span v-if="authData" class="text-lg font-semibold text-gray-700">
            {{ authData.username }}
          </span>
        </p>
      </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import AOS from "aos";
import {
  Dialog,
  TransitionChild,
  TransitionRoot,
  DialogPanel,
} from "@headlessui/vue";

import { useAuth } from "../store/auth";

const auth = useAuth();

const authData = computed(() => auth.getAuthData);

onMounted(async () => {
  AOS.init();
});
</script>
