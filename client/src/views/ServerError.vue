<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h1 class="text-3xl font-bold mb-4">500 Internal Server Error</h1>
            <p class="text-gray-700 mb-4">Sorry, something went wrong on our end. Please try again later.</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="goBack">Go
                Back</button>
        </div>
    </div>
</template>

<script setup>

const goBack = () => {
    window.history.back();
};
</script>
