<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign Up to your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <img class="mx-auto h-42 w-64" src="../assets/1.png" alt="Workflow" />
        <form class="space-y-6" @submit="handleSubmit">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                v-model="email"
                type="email"
                required=""
                placeholder="Enter Email"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="username"
              class="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div class="mt-1">
              <input
                id="username"
                name="username"
                v-model="username"
                type="text"
                required=""
                placeholder="Enter Username"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                v-model="password"
                type="password"
                required=""
                placeholder="Enter Password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-dark-slate-grey focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>

          <div>
            <p class="mt-2 text-center text-sm text-gray-600">
              Already have an account?
              <router-link
                to="/login"
                class="font-medium text-dark-slate-grey"
              >
                Login
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "../store/auth";

const email = ref("");
const username = ref("");
const password = ref("");

const { registerAction } = useAuth();

const handleSubmit = async (e) => {
  e.preventDefault();
  let payload = {
    email: email.value,
    username: username.value,
    password: password.value,
  };
  await registerAction(payload);
};
</script>
