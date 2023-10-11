<template>
  <div>
    <main>
      <ContentDoc v-slot="{ doc }">
        <article
          class="prose-base prose-zinc prose-invert bg-zinc-800/40 border border-[#7C7F82]/20 mx-auto p-12 rounded-lg">
          <h1 class="text-4xl mb-8">{{ doc.title }}</h1>
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
  @apply border border-[#7C7F82]/20;
}
</style>
