<script lang="ts" setup>
async function login(e: Event) {
  await $fetch("/api/login", {
    method: "POST",
    body: new FormData(e.target as HTMLFormElement),
  });
  await navigateTo("/");
}
</script>

<template>
  <div class="flex">
    <form
      method="post"
      action="/api/login"
      @submit.prevent="login"
      class="bg-gray-200 p-2 rounded flex flex-col mx-auto"
    >
      <label htmlFor="email">Email</label>
      <input name="email" id="email" />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <br />
      <button>Continue</button>
    </form>
  </div>
</template>
