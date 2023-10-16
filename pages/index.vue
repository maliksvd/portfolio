<template>
  <div class="homeWrapper opacity-0">
    <section>
      <div class='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
        <div class='md:col-span-2'>
          <HomeIntroduction />
        </div>
        <HomeLatestPublications />
      </div>
    </section>
    <section class="mb-12">
      <HomeCompetences />
    </section>
    <section class='grid grid-cols-1 md:grid-cols-3 gap-8'>
      <HomeBlankCard />
      <HomeCurrentWork />
      <HomeBlankCard />
    </section>
  </div>
</template>

<script lang="ts" setup>
const { $gsap } = useNuxtApp()

console.log($gsap)

onBeforeMount(() => {
  $gsap.fromTo('.homeWrapper', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1.5 })
})
</script>



<style></style>
