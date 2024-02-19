<template>
  <div>
    <div class="fixed bottom-0 m-4">
      <button
        class="bg-gradient-to-r from-white/20 to-white/5 b text-white/90 backdrop-blur-xl px-4 py-2 rounded-lg text-base border border-white/5"
      >
        Navigation
      </button>
    </div>
    <div class="max-w-3xl mx-auto">
      <slot />
    </div>
  </div>
</template>
