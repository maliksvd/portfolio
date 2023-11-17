<template>
  <div>
    <section class="rounded-lg bg-white ring-neutral-300 shadow-sm ring-1 p-6 py-4 h-full">
      <div class="flex space-x-2 items-center mb-4">
        <UIcon name="i-ph-pen-nib-duotone" class="h-5 w-5" />
        <h2 class="font-bold text-lg">Publications</h2>
      </div>
      <div v-for="publication in publications" class="mb-2">
        <NuxtLink :to="publication._path" class="text-sm">{{ publication.title }}</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: publications } = await useAsyncData('/', () => queryContent('/publications').find())

console.log(publications.value[0]._path)
</script>



<style>
</style>
