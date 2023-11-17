<template>
  <div>
    <div class="flex flex-col space-y-12 justify-between">
      <div class="flex space-x-4 items-center">
        <UAvatar chip-color="primary" chip-text="" chip-position="top-right" size="sm" src="/avatar.png" alt="Avatar" />
        <h1 class="font-semibold">Malik Krechiche</h1>
      </div>
      <HomeHero />
      <HomeProjects />

    </div>
  </div>
</template>

<script lang="ts" setup>
const skills = [
  {
    id: 1,
    title: 'Vue 3',
    description: 'Vue 3 is the latest version of Vue.js. It is a progressive framework for building user interfaces.',
    icon: 'i-logos-vue'
  },
  {
    id: 2,
    title: 'Nuxt 3',
    description: 'Nuxt 3 is the latest version of Nuxt.js. It is a progressive framework for building user interfaces.',
    icon: 'i-logos-nuxt-icon'
  },
  {
    id: 3,
    title: 'SQL and Database Management',
    description: 'SQL is a standard language for storing, manipulating and retrieving data in databases.',
    icon: 'i-logos-database'
  },
  {
    id: 4,
    title: 'Swift',
    description: 'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. and the open-source community.',
    icon: 'i-logos-swift'
  },
  {
    id: 5,
    title: 'Javascript',
    description: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.',
    icon: 'i-logos-javascript'
  }
]
</script>


<style>
</style>
