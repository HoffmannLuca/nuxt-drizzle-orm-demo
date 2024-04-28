<script setup>
const { data } = await useFetch('/api/test',{
  method: 'POST',
  body: {
    email: 'test@test.com',
    password: 'password123456789'
  }
})
</script>

<template>
  <DataPreview :data="data" />
</template>