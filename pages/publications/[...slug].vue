<template>
  <div>
    <main>
      <ContentDoc v-slot="{ doc }">
        <article class="prose-sm prose-zinc prose-invert bg-[#1c1c1c] ring-[#282828] ring-1 mx-auto p-12 rounded-lg">
          <h1 class="font-semibold text-2xl mb-8">{{ doc.title }}</h1>
          <div class="ring-[#282828] ring-1 rounded-full mb-24"></div>
          <ContentRenderer :value="doc" />
        </article>
      </ContentDoc>
    </main>
  </div>
</template>

<script lang="ts" setup>

</script>



<style>
.shiki {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  @apply ring-[#282828] ring-1;
}
</style>
