<script lang="ts" setup>
async function signup(e: Event) {
  await $fetch("/api/signup", {
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
      action="/api/signup"
      @submit.prevent="signup"
      class="bg-gray-200 p-2 rounded flex flex-col mx-auto"
    >
      <label htmlFor="email">Email</label>
      <input name="email" id="email" type="email" />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <br />
      <button>Continue</button>
    </form>
  </div>
</template>
