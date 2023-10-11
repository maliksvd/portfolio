<template>
  <div class="w-full min-h-screen flex">
    <div class="fixed flex justify-center bg-zinc-800/40 h-screen border-r border-r-[#7C7F82]/20">
      <nav>
        <ul class="flex flex-col justify-center items-center space-y-4 h-full">
          <li class="mx-4">
            <UTooltip text="Homepage" :ui="ui" :popper="{
              placement: 'right',
            }">
              <NuxtLink to="/">
                <UIcon name="i-solar-home-angle-broken" class="w-6 h-6" />
              </NuxtLink>
            </UTooltip>
          </li>
          <li class="mx-4">
            <UTooltip text="All publications" :ui="ui" :popper="{
              placement: 'right',
            }">
              <NuxtLink to="/publications">
                <UIcon name="i-solar-book-2-broken" class="w-6 h-6" />
              </NuxtLink>
            </UTooltip>
          </li>
          <li class="mx-4">
            <UTooltip text="Inspiration wall" :ui="ui" :popper="{
              placement: 'right',
            }">
              <NuxtLink to="/inspiration">
                <UIcon name="i-solar-album-broken" class="w-6 h-6" />
              </NuxtLink>
            </UTooltip>
          </li>
          <li class="mx-4">
            <UTooltip text="Contact" :ui="ui" :popper="{
              placement: 'right',
            }">
              <NuxtLink to="/contact">
                <UIcon name="i-solar-mailbox-broken" class="w-6 h-6" />
              </NuxtLink>
            </UTooltip>
          </li>
        </ul>
      </nav>
    </div>
    <main class="max-w-xs md:max-w-6xl mx-auto my-12">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
const ui = {
  background: 'bg-white dark:bg-white',
  color: 'text-black dark:text-black',
}
</script>

<style></style>
