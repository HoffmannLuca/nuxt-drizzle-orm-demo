<script setup>
    const createProjectForm = reactive({
        title: '',
        description: ''
    })
    const submitProject = async () => {
        const { data, pending, error } = await useFetch('/api/projects/create',{
            method: 'POST',
            body: {
                title: createProjectForm.title,
                description: createProjectForm.description
            }
        })
        createResponse.value = data;
    }
    const createResponse = ref('');
</script>

<template>
    <form @submit.prevent="submitProject" class="mb-3 flex flex-col gap-3">

        <label for="title" class="mx-auto">Title</label>
        <input type="text" class="bg-gray-300 mx-auto" name="title" v-model="createProjectForm.title">

        <label for="description" class="mx-auto">Description</label>
        <input type="text" class="bg-gray-300 mx-auto" name="description" v-model="createProjectForm.description">

        <button class="bg-green-500 hover:bg-green-400 px-2 py-1 text-white rounded mx-auto" type="submit">Create</button>
    </form>
    <DataPreview :data="createResponse"></DataPreview>
</template>