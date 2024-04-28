<script setup>
  const { data: projects } = await useFetch('/api/projects');
</script>

<template>
  <div class="flex flex-col gap-3">
    <NuxtLink to="/projects/create" class="bg-green-500 hover:bg-green-400 px-2 py-1 text-white rounded mx-auto">Create New Project</NuxtLink>
    <DataPreview :data="projects"></DataPreview>
  </div>
</template>
