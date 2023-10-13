<template>
  <div>
    <h2 class="font-semibold mb-2 text-xl">All publications</h2>
    <p class="text-[#7c7f82] text-sm">Check out my latest publications and talks</p>
    <section class="mt-12 grid grid-cols-2 md:md:grid-cols-5 gap-8">
      <ContentList path="/publications" v-slot="{ list }">
        <NuxtLink v-for="publication in list" :key="publication._path" :to="publication._path">
          <div class="bg-[#1c1c1c] h-32 w-full ring-[#282828] ring-1 rounded-lg mb-6"></div>
          <div class="flex flex-wrap mt-2">
            <span v-for="category in publication.categories" :key="category"
              :class="`px-6 py-1 rounded-full text-xs bg-${getCategoryColor(category)}/10 text-${getCategoryColor(category)} ring-${getCategoryColor(category)}/20 ring-1 mb-2`">
              {{ category }}
            </span>
          </div>
          <h2 class="mt-2 text-sm font-medium">{{ publication.title }}</h2>
        </NuxtLink>
      </ContentList>
    </section>
  </div>
</template>

<script lang="ts" setup>
const categoriesColor = {
  'Swift': 'orange-400',
  'SwiftUI': 'orange-400',
  'Vue': 'emerald-400',
  'Nuxt': 'green-400',
  'Vite': 'cyan-400',
  'TypeScript': 'blue-400',
  'JavaScript': 'yellow-400',
  'CSS': 'blue-400',
  'HTML': 'red-400',
  'PHP': 'purple-400',
  'Laravel': 'red-400',
  'Tailwind': 'cyan-400',
  'Bootstrap': 'purple-400',
  'Sass': 'pink-400',
  'Git': 'red-400',
  'GitHub': 'pink-400',
  'GitLab': 'orange-400',
  'Bitbucket': 'blue-400',
  'Docker': 'blue-400',
  'Linux': 'green-400',
  'macOS': 'gray-400',
  'Windows': 'blue-400',
  'Android': 'green-400',
  'iOS': 'blue-400',
  'Firebase': 'yellow-400',
  'MySQL': 'blue-400',
  'MariaDB': 'blue-400',
  'PostgreSQL': 'blue-400',
  'MongoDB': 'green-400',
  'Redis': 'red-400',
  'Node.js': 'green-400',
  'Express': 'green-400',
  'NestJS': 'red-400',
  'GraphQL': 'pink-400',
  'REST': 'green-400',
  'API': 'green-400',
  'JSON': 'yellow-400',
  'JWT': 'green-400',
  'OAuth': 'blue-400',
  'OpenAPI': 'green-400',
  'Python': 'blue-400',
}

// create an function to display the color for each category
const getCategoryColor = (category: string): string => {
  return categoriesColor[category] || 'gray-400';
}
</script>



<style></style>
