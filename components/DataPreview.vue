<script setup>
    const props = defineProps({
        data: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <div class="w-full flex">
        <pre class="bg-gray-300 p-3 mx-auto">{{ props.data }}</pre>
    </div>
</template>