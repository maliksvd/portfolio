<template>
  <div>
    <section class="rounded-lg py-8 bg-[#1c1c1c] p-6 ring-[#282828] ring-1">
      <h1 class="text-3xl md:text-4xl bg-gradient mb-6 gradient-text max-w-2xl leading-6">Creating innovative digital
        experiences with SwiftUI, Nuxt, and Figma.</h1>
      <p class="text-[rgb(169,169,169)] text-base mb-8">Based in Canada</p>
      <UButton icon="i-solar-arrow-right-linear" label="Contact/Get in touch" color="black" size="lg" variant="ghost"
        class="ring-[#282828] ring-1" @click="openEmailClient" />
    </section>
  </div>
</template>

<script lang="ts" setup>
const openEmailClient = () => {
  window.location.href = 'mailto:malik.krechiche@gmail.com';
}
</script>


<style></style>
