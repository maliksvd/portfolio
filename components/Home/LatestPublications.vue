<template>
  <div>
    <section class="rounded-lg bg-[#1c1c1c] ring-[#282828] ring-1 p-6 h-full">
      <div class="space-y-1 mb-4">
        <NuxtLink to="/publications" class="font-bold leading-none mb-1">Latest publications</NuxtLink>
        <p class="text-sm text-[#7C7F82]">
          Check out my latest publications and talks
        </p>
      </div>
      <div v-for="publication in publications" class="mb-2">
        <NuxtLink :to="publication._path" class="text-sm text-[#7C7F82]">{{ publication.title }}</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: publications } = await useAsyncData('/', () => queryContent('/publications').find())

console.log(publications.value[0]._path)
</script>



<style></style>
