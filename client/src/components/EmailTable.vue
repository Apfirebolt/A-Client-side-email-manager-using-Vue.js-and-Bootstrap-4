<template>
<div class="overflow-x-auto mt-4">
    <table class="min-w-full bg-white border border-gray-200">
        <thead class="bg-secondary-100">
            <tr>
                <th class="py-3 px-4 text-left text-white font-medium">From</th>
                <th class="py-3 px-4 text-left text-white font-medium">Subject</th>
                <th class="py-3 px-4 text-left text-white font-medium">Date</th>
                <th class="py-3 px-4 text-left text-white font-medium">Date</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="email in emails" :key="email.id" class="border-t border-gray-200 hover:bg-gray-50">
                <td class="py-3 px-4">{{ email.from.email }}</td>
                <td class="py-3 px-4">{{ email.subject }}</td>
                <td class="py-3 px-4">{{ email.date }}</td>
                <td class="py-3 px-4">
                    <span>
                        Delete
                    </span>
                    <span>
                        Mark Important
                    </span>
                    <span>
                        Mark Read
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script setup>

const props = defineProps({
  emails: {
    type: Array,
    required: true,
    default: [],
  },
});
</script>
