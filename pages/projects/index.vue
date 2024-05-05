<script setup>
  const { data: projects } = await useFetch('/api/projects');

  const deleteProject = async (id) => {
      await useFetch('/api/projects/delete',{
          method: 'POST',
          body: {
              id: id,
          }
      })
  }
</script>

<template>
  <div class="flex flex-col gap-3">
    <NuxtLink to="/projects/create" class="bg-green-500 hover:bg-green-400 px-2 py-1 text-white rounded mx-auto">Create New Project</NuxtLink>
    <div class="flex justify-evenly">
      <DataPreview class="w-1/3" :data="projects"></DataPreview>
      <div v-if="projects.length" class="flex flex-col gap-4">
        <button class="bg-red-500 p-2 rounded" v-for="project in projects" @click="deleteProject(project.id)">delete - {{ project.id }}</button>
      </div>
    </div>
  </div>
</template>
