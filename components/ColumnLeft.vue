<script lang="ts" setup>

</script>

<template>
  <div class="border-r border-gray-200 h-screen overflow-hidden flex flex-col">
    <div class="px-3 py-1.5 flex gap-3">
      <button class="p-1.5 rounded-full grid place-content-center cursor-pointer hover:bg-gray-100 transition duration-200">
        <UIcon name="ic:round-menu" class="size-5 bg-gray-500"/>
      </button>
      <UInput icon="ic:round-search" variant="soft" :ui="{ base: 'rounded-full bg-gray-100' }" class="flex-1" placeholder="Search"></UInput>
    </div>

    <div class="px-3 py-1.5 flex flex-col overflow-scroll">
      <div v-for="i in 10" class="flex relative gap-1 p-1.5 rounded-lg items-center cursor-pointer hover:bg-gray-100">
        <p class="absolute top-2 right-1.5 text-[10px]">Tue</p>
        <p class="shrink-0 w-[50px] h-[50px] rounded-full bg-green-500"></p>
        <div class="text-sm">
          <p class="font-semibold">John Doe</p>
          <p class="line-clamp-1">Hello, how are you? A looooong message here</p>
        </div>
      </div>
    </div>
  </div>
</template>
