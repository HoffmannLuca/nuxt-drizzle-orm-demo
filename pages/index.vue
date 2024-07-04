<script setup>
const { data } = await useFetch("/api/hello");
const user = useAuthUser();
</script>

<template>
  <div class="bg-green-500 h-1"></div>
  <DataPreview :data="user" />
</template>
