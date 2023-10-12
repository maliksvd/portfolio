<template>
  <div>
    <section class="rounded-lg bg-[#1c1c1c] p-6 ring-[#282828] ring-1 h-full">
      <div class="space-y-1 mb-4">
        <h1 class="font-bold leading-none mb-1">Competences</h1>
        <p class="text-sm text-[#7C7F82]">
          A list of my competences and skills
        </p>
      </div>
      <Vue3Marquee :duration="30">
        <div v-for="(competence, index) in competences" :key="index" :class="[
          'flex items-center mr-6 py-2 px-4 rounded-full text-xs text-medium',
          'text-' + competence.textColor,
          'bg-' + competence.backgroundColor,
          'ring ring-inset ' + competence.ringColor + ' ring-1',
        ]">
          <UIcon :name="competence.icon" class="h-4 w-4 mr-4" />
          {{ competence.title }}
        </div>
      </Vue3Marquee>
    </section>
  </div>
</template>

<script lang="ts" setup>
const competences = [
  {
    title: 'Vue 3',
    icon: 'i-logos-vue',
    textColor: 'emerald-400',
    backgroundColor: 'emerald-400/5',
    ringColor: 'ring-emerald-400/20'

  },
  {
    title: 'Nuxt',
    icon: 'i-logos-nuxt-icon',
    textColor: 'green-400',
    backgroundColor: 'green-400/5',
    ringColor: 'ring-green-400/20'

  },
  {
    title: 'Vite',
    icon: 'i-logos-vitejs',
    textColor: 'cyan-400',
    backgroundColor: 'cyan-400/5',
    ringColor: 'ring-cyan-400/20'
  },
  {
    title: 'SwiftUI',
    icon: 'i-logos-swift',
    textColor: 'orange-400',
    backgroundColor: 'orange-400/5',
    ringColor: 'ring-orange-400/20'
  },
  {
    title: 'TypeScript',
    icon: 'i-logos-typescript-icon',
    textColor: 'blue-400',
    backgroundColor: 'blue-400/5',
    ringColor: 'ring-blue-400/20'
  },
  {
    title: 'JavaScript',
    icon: 'i-logos-javascript',
    textColor: 'yellow-400',
    backgroundColor: 'yellow-400/5',
    ringColor: 'ring-yellow-400/20'
  },
  {
    title: 'React',
    icon: 'i-logos-react',
    textColor: 'blue-400',
    backgroundColor: 'blue-400/5',
    ringColor: 'ring-blue-400/20'
  },
  {
    title: 'Vercel',
    icon: 'i-logos-vercel-icon',
    textColor: 'gray-400',
    backgroundColor: 'gray-400/5',
    ringColor: 'ring-gray-400/20'
  },
  {
    title: 'Tailwind',
    icon: 'i-logos-tailwindcss-icon',
    textColor: 'cyan-400',
    backgroundColor: 'cyan-400/5',
    ringColor: 'ring-cyan-400/20'
  },
  {
    title: 'Node',
    icon: 'i-logos-nodejs',
    textColor: 'green-400',
    backgroundColor: 'green-400/5',
    ringColor: 'ring-green-400/20'
  },
  {
    title: 'MongoDB',
    icon: 'i-logos-mongodb-icon',
    textColor: 'green-400',
    backgroundColor: 'green-400/5',
    ringColor: 'ring-green-400/20'
  },
]

</script>



<style></style>
