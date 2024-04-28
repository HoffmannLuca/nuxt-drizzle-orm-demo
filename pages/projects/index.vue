<script setup>
  const { data } = await useFetch('/api/projects');
</script>

<template>
  <DataPreview :data="data"></DataPreview>
</template>
