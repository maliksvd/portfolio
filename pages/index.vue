<script setup>
useHead({
  title: "Malik Krechiche - Self-taught Web Developer & UI/UX Enthusiast",
  meta: [
    {
      name: "description",
      content:
        "I'm a self-taught and passionate web developer and UI/UX enthusiast. Based in Canada, I specialize in creating modern, responsive, and user-friendly websites and applications. I'm always looking for new opportunities to work on exciting projects and collaborate with talented people.",
    },
    {
      name: "keywords",
      content: "web development, ui/ux design, branding, chat assistant, seo",
    },
  ],
});

definePageMeta({
  layout: "default",
});
</script>

<template>
  <div class="flex flex-col justify-center h-screen">
    <div class="flex flex-col items-center justify-center">
      <img
        src="/avatar.jpg"
        width="144"
        height="144"
        alt="Avatar of Malik Krechiche"
        class="rounded-full w-36 h-36 opacity-90"
      />
      <span class="-mt-6 z-50 badge py-1.5 px-4 rounded-full text-sm"
        ><p class="text-white/70 uppercase">Available</p></span
      >
    </div>
    <div class="flex flex-col items-center justify-center space-y-4 mt-12">
      <h1
        class="bg-gradient-to-r from-white/95 to-white/50 bg-clip-text text-transparent text-4xl"
      >
        Malik Krechiche
      </h1>
      <p class="text-white/55 text-xl max-w-lg text-center">
        9 years of self-taught experience in web development and UI enthusiasm.
      </p>
    </div>
  </div>
</template>

<style>
.badge {
  background: linear-gradient(145deg, #46484a, #232327/70);
  @apply backdrop-blur-xl;
}
</style>
