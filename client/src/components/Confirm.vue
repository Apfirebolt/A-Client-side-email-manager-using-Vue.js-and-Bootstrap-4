<template>
  <div>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="text-center text-3xl font-extrabold bg-ghost-grey py-2">
        Confirmation
      </h2>
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-md text-jet-black">
      <div class="py-8 px-4 shadow sm:rounded-lg">
        <form class="space-y-6" @submit="handleSubmit">
          <p class="font-semibold text-center text-lg">
            {{ message }}
          </p>
          <div class="flex justify-center">
            <button
              type="submit"
              class="py-2 mr-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-dark-slate-grey text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Confirm
            </button>

            <button
              @click="closeModalUtil"
              class="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-jet-black text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["confirmAction", "closeModal"]);

const handleSubmit = async (e) => {
  e.preventDefault();
  emits("confirmAction");
};

const closeModalUtil = (e) => {
  e.preventDefault();  
  emits("closeModal");
};
</script>
