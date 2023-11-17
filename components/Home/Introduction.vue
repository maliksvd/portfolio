<template>
  <div class="col-span-2 rounded-lg p-6 py-4 bg-white ring-neutral-300 shadow-sm ring-1">
    <div class="flex space-x-2 items-center mb-4">
      <UIcon name="i-ph-megaphone-simple-duotone" class="h-5 w-5" />
      <h2 class="font-bold text-lg">Introduction</h2>
    </div>
    <p class="text-sm">Avec plus de 6 ans d'expérience dans le domaine, je prends plaisir à mêler beau,
      design et
      technologie pour créer
      des expériences web uniques et sur mesure qui dépassent les attentes de mes clients.</p>
  </div>
</template>

<script lang="ts" setup>
const openEmailClient = () => {
  window.location.href = 'mailto:malik.krechiche@gmail.com';
}
</script>


<style>
</style>
