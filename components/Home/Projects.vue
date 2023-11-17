<template>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div v-for="project in projects" :key="project.id" class="border rounded-2xl p-4">
      <h2 class="font-semibold">{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const projects = [
  {
    id: 1,
    title: 'Optic Genius',
    description: 'An optical platform to find professionals and book appointments.'
  },
  {
    id: 2,
    title: 'Excel & SQL Assistant',
    description: 'An assistant to help you with your Excel and SQL tasks build with AI Api.'
  },
  {
    id: 3,
    title: 'M-Notes',
    description: 'An proof of concept of a note taking app.'
  },
  {
    id: 4,
    title: 'Coming soon',
    description: 'Somes projects/side-projects are coming soon.'
  }
]
</script>

<style>
</style>

