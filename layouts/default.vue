<template>
  <div class="w-full min-h-screen flex flex-col md:flex-row">
    <SideNavigation />
    <main class="main-wrapper opacity-0 max-w-sm md:max-w-6xl mx-auto my-12">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>

const route = useRoute()
const { $gsap } = useNuxtApp()

console.log($gsap)

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

<style></style>