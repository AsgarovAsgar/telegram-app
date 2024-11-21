<script lang="ts" setup>
const { openSidebar } = useSidebarToggle();
</script>

<template>
  <div
    class="pl-4 pr-2 py-1 flex justify-between items-center border-b border-gray-100 shadow-lg"
  >
    <div
      class="grow flex gap-2 items-center cursor-pointer"
      @click="openSidebar()"
    >
      <p class="w-8 h-8 shrink-0 bg-green-400 rounded-full"></p>
      <div class="flex flex-col -space-y-1">
        <p class="font-semibold">John Doe</p>
        <p class="text-[11px] text-gray-500">last seen recently</p>
      </div>
    </div>
    <div class="flex gap-1 item-center">
      <button
        class="p-1.5 grid place-content-center rounded-full cursor-pointer hover:bg-gray-100 transition duration-200"
      >
        <Icon name="ic:round-search" class="size-5 bg-gray-500" />
      </button>
      <button
        class="p-1.5 grid place-content-center rounded-full cursor-pointer hover:bg-gray-100 transition duration-200"
      >
        <Icon name="ic:baseline-more-vert" class="size-5 bg-gray-500" />
      </button>
    </div>
  </div>
</template>
