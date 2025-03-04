<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit="onSubmit">
          <img class="mx-auto h-42 w-64" src="../assets/1.png" alt="Workflow" />
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <input
                id="email"
                v-bind="email"
                name="email"
                type="email"
                placeholder="Enter Email"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <p class="my-2 text-red-800">
              {{ errors.email }}
            </p>
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
                v-bind="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <p class="my-2 text-red-800">
              {{ errors.password }}
            </p>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-dark-slate-grey focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Sign in
            </button>
          </div>

          <div>
            <p class="mt-2 text-center text-sm text-gray-600">
              Don't have an account?
              <router-link
                to="/register"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Register
              </router-link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAuth } from "../store/auth";
import { useForm } from "vee-validate";
import router from "../routes/index";

const auth = useAuth();
const authData = computed(() => auth.getAuthData);

if (authData.value) {
  router.push({ name: 'Dashboard' });
}

// Validation, or use `yup` or `zod`
function required(value) {
  return value ? true : "Email field is required";
}

function passwordRequired(value) {
  if (!value) {
    return "Password is a required field";
  }
  if (value.length < 8) {
    return "Password is too short";
  }
  return true;
}

// Create the form
const { defineInputBinds, handleSubmit, errors } = useForm({
  validationSchema: {
    email: required,
    password: passwordRequired,
  },
});

// Define fields
const email = defineInputBinds("email");
const password = defineInputBinds("password");

// Submit handler
const onSubmit = handleSubmit(async (values) => {
  // Submit to API
  await auth.loginAction(values);
  // router.push({ name: 'Expense' });
});
</script>
