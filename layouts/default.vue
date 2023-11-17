<template>
  <div class="w-full">
    <main class="main-wrapper opacity-0 px-8 py-8 mx-auto">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()
const { $gsap } = useNuxtApp()

if ($gsap) {
  const animate = () => {
    return $gsap.fromTo(".main-wrapper", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
  }

  onMounted(animate)
  watch(() => route.path, animate)
} else {
  console.error("$gsap is undefined")
}
</script>

<style>
</style>
