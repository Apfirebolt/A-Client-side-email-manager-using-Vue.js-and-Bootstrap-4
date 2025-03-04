<template>
  <section class="shadow sm:rounded-lg" id="about">
    <div class="px-4 py-5 sm:p-6">
      <h2 class="text-3xl my-2 py-2 text-center text-jet-black">ABOUT</h2>
      <p>
        Mini Url is a simple URL shortening service that allows you to shorten
        long URLs into short and manageable links.
      </p>
      <p class="mt-4">
        The app is built using Vue.js, Tailwind CSS, and Express. It is a single
        page application that uses Express back-end for authentication and
        MongoDB for data storage. The app is responsive and works on desktop,
        tablet, and mobile devices.
      </p>
    </div>
  </section>

  <section class="bg-white shadow sm:rounded-lg" id="contact">
    <div class="px-4 py-5 sm:p-6">
      <h2 class="text-3xl my-2 py-2 text-center text-jet-black">CONTACT</h2>
      <div class="grid grid-cols-2 gap-4 mt-3">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Feel free to reach out to us!
          </h3>
          <p class="mt-2 max-w-xl text-sm text-gray-500">
            If you have any questions or feedback, please feel free to reach out
            to us. We would love to hear from you!
          </p>
        </div>
        <form class="space-y-6 p-4 border border-gray-200 rounded-lg">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Name</label
            >
            <div class="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                class="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email</label
            >
            <div class="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                class="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                required
              />
            </div>
          </div>
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700"
              >Message</label
            >
            <div class="mt-1">
              <textarea
                id="message"
                name="message"
                rows="4"
                class="block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
                required
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuth } from "../store/auth";
const auth = useAuth();

onMounted(async () => {
  await auth.getProfileData();
});
</script>
