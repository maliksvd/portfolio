<template>
  <div>
    <h2 class="font-semibold mb-2 text-xl">Inspiration Wall</h2>
    <p class="text-[#7c7f82] text-sm">Discover a curated collection resources: links, tweets, articles, and more that
      inspire me.</p>
    <section class="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      <ContentList path="/inspiration" v-slot="{ list }">
        <NuxtLink v-for="inspiration in list" :key="inspiration._path" :to="inspiration._path">
          <div class="bg-[#1c1c1c] h-48 w-full ring-[#282828] ring-1 rounded-lg mb-6"></div>
          <h2 class="mt-2 text-sm font-medium">{{ inspiration.title }}</h2>
        </NuxtLink>
      </ContentList>
    </section>
  </div>
</template>

<script lang="ts" setup>

</script>



<style></style>
