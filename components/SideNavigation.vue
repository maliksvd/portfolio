<template>
  <div>
    <div
      class="bottom-0 fixed md:flex justify-center bg-[#1c1c1c] h-auto md:h-screen md:border-r md:border-r-[#7C7F82]/20 border-t border-t-[#7C7F82]/20 md:border-t-0 w-full md:w-auto py-4 md:py-0 px-4 z-50">
      <nav>
        <ul class="flex md:flex-col justify-center items-center space-x-4 md:space-y-4 md:space-x-0 h-full">
          <li>
            <UTooltip text="Homepage" :ui="ui" :popper="{
              placement: 'right',
            }">
              <NuxtLink to="/">
                <UIcon name="i-solar-home-angle-broken" class="w-5 h-5" />
              </NuxtLink>
            </UTooltip>
          </li>
          <li>
            <UTooltip text="All publications" :ui="ui" :popper="{
              placement: 'right',
            }">
              <NuxtLink to="/publications">
                <UIcon name="i-solar-book-2-broken" class="w-5 h-5" />
              </NuxtLink>
            </UTooltip>
          </li>
          <li>
            <UTooltip text="Inspiration wall" :ui="ui" :popper="{
              placement: 'right',
            }">
              <NuxtLink to="/inspiration">
                <UIcon name="i-solar-album-broken" class="w-5 h-5" />
              </NuxtLink>
            </UTooltip>
          </li>
          <li>
            <UTooltip text="Contact" :ui="ui" :popper="{
              placement: 'right',
            }">
              <NuxtLink to="/contact">
                <UIcon name="i-solar-mailbox-broken" class="w-5 h-5" />
              </NuxtLink>
            </UTooltip>
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
