<script lang="ts" setup>
const { closeSidebar } = useSidebarToggle();
</script>

<template>
  <div
    class="px-2 py-1.5 pb-[7px] flex items-center justify-between border-l border-gray-100"
  >
    <div class="flex items-center gap-4">
      <button
        @click="closeSidebar()"
        class="p-1.5 grid place-content-center rounded-full cursor-pointer hover:bg-gray-100 transition duration-200"
      >
        <Icon name="ic:outline-close" class="size-5 bg-gray-500" />
      </button>
      <p class="font-medium">User Info</p>
    </div>
    <button
      class="p-1.5 grid place-content-center rounded-full cursor-pointer hover:bg-gray-100 transition duration-200"
    >
      <Icon name="ic:outline-person-add" class="size-5 bg-gray-500" />
    </button>
  </div>
</template>
