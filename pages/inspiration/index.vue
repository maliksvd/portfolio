<template>
  <div>
    <h2 class="font-semibold mb-2 text-xl">Inspiration Wall</h2>
    <p class="text-[#7c7f82] text-sm">Discover a curated collection resources: links, tweets, articles, and more that
      inspire me.</p>
    <section class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
      <ContentList path="/inspiration" v-slot="{ list }">
        <NuxtLink v-for="inspiration in list" :key="inspiration._path" :to="inspiration.source">
          <div>
            <div v-if="inspiration.image"><img :src="inspiration.image"
                class="opacity-50 rounded-lg h-48 mb-6 object-cover" alt="inspiration.title"></div>
            <div v-else class="bg-[#1c1c1c] h-48 w-full ring-[#282828] ring-1 rounded-lg mb-6"></div>
          </div>
        </NuxtLink>
      </ContentList>
    </section>
  </div>
</template>

<script lang="ts" setup>



</script>



<style></style>
