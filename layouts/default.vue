<script setup>
    const router = useRouter();
    const navPages = router.getRoutes().filter((route)  => {
        return !route.path.replace('/', '').includes('/')
    })
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <nav class="bg-sky-500 p-2">
            <ul class="flex justify-evenly">
                <li v-for="page in navPages">
                    <NuxtLink v-if="page" :to="page.path" class="hover:bg-sky-400 px-2 py-1 text-white rounded">{{ page.name }}</NuxtLink>
                </li>
            </ul>
        </nav>
        <main class="flex-grow">
            <h1 class="text-center text-xl p-3 uppercase">{{ router.currentRoute.value.name }}</h1>
            <slot />
        </main>
    </div>
</template>
