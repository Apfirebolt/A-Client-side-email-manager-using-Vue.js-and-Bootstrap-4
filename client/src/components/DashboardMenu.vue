<template>
  <nav>
    <ul class="flex mt-4">
      <li class="my-2">
        <router-link
          to="/inbox"
          class="text-lg text-jet-black hover:text-jet-black transition duration-300 ease-in-out p-2 w-48 hover:bg-gray-200 hover:text-xl"
          >Inbox</router-link
        >
      </li>
      <li class="my-2">
        <router-link
          to="/sent"
          class="text-lg text-jet-black hover:text-jet-black transition duration-300 ease-in-out p-2 w-48 hover:bg-gray-200 hover:text-xl"
          >Sent</router-link
        >
      </li>
      <li class="my-2">
        <router-link
          to="/trash"
          class="text-lg text-jet-black hover:text-jet-black transition duration-300 ease-in-out p-2 w-48 hover:bg-gray-200 hover:text-xl"
          >Trash</router-link
        >
      </li>
      <li class="my-2">
        <router-link
          to="/important"
          class="text-lg text-jet-black hover:text-jet-black transition duration-300 ease-in-out p-2 w-48 hover:bg-gray-200 hover:text-xl"
          >Important</router-link
        >
      </li>
      <li class="my-2">
        <router-link
          to="/read"
          class="text-lg text-jet-black hover:text-jet-black transition duration-300 ease-in-out p-2 w-48 hover:bg-gray-200 hover:text-xl"
          >Read</router-link
        >
      </li>
      <li class="my-2">
        <router-link
          to="/compose"
          class="text-lg text-jet-black hover:text-jet-black transition duration-300 ease-in-out p-2 w-48 hover:bg-gray-200 hover:text-xl"
          >Compose</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>

</script>
