<script setup>
    const { data } = await useFetch('/api/hello')
</script>

<template>
    <DataPreview :data="data" />
</template>