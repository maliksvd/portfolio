<template>
  <div>
    <div
      class="bottom-0 fixed flex justify-center  bg-[#1c1c1c] h-auto border-t border-t-[#7C7F82]/20 w-full py-4 md:py-0 px-4 z-50">
      <nav>
        <ul class="flex justify-start p-4 space-x-4">
          <li>
            <NuxtLink to="/" class="flex items-center space-x-2">
              <UIcon name="i-solar-home-angle-broken" class="w-5 h-5 text-[#7C7F82]" />
              <p class="hidden md:block text-[#7C7F82] text-sm">Homepage</p>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/publications" class="flex items-center space-x-2">
              <UIcon name="i-solar-book-2-broken" class="w-5 h-5 text-[#7C7F82]" />
              <p class="hidden md:block text-[#7C7F82] text-sm">Publications</p>

            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/inspiration" class="flex items-center space-x-2">
              <UIcon name="i-solar-album-broken" class="w-5 h-5 text-[#7C7F82]" />
              <p class="hidden md:block text-[#7C7F82] text-sm">Inspiration wall</p>

            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="flex items-center space-x-2">
              <UIcon name="i-solar-mailbox-broken" class="w-5 h-5 text-[#7C7F82]" />
              <p class="hidden md:block text-[#7C7F82] text-sm">Contact</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
const ui = {
  background: 'bg-white dark:bg-white',
  color: 'text-black dark:text-black',
}
</script>



<style></style>
