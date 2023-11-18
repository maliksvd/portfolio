<template>
  <div class="hero h-[36rem] flex flex-col justify-end w-full rounded-lg px-8 py-8">
    <div class="max-w-xl">
      <h1 class="text-3xl md:text-5xl font-medium mb-2">Creating innovative digital experiences with SwiftUI and
        Nuxt.</h1>
      <p class="text-lg md:text-xl">Store Manager @ Bonlook</p>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
.hero {
  background: linear-gradient(to right, #cacbcd, #f9f9f9);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 400% 400%;

  animation: gradient 3s infinite alternate;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  100% {
    background-position: 100% 50%;
  }
}
</style>

