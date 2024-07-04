<script lang="ts" setup>
async function logout() {
  await $fetch("/api/logout", {
    method: "POST",
  });
  await navigateTo("/login");
}
</script>

<template>
  <form @submit.prevent="logout">
    <button>Sign out</button>
  </form>
</template>
