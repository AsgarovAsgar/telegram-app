<script lang="ts" setup>
import { Input } from "@/components/ui/input";
</script>

<template>
  <div class="px-3 py-1.5 flex gap-3">
    <button
      class="p-1.5 rounded-full grid place-content-center cursor-pointer hover:bg-gray-100 transition duration-200"
    >
      <Icon name="ic:round-menu" class="size-5 bg-gray-500" />
    </button>
    <div class="relative flex w-full max-w-sm items-center">
      <Input
        id="search"
        type="text"
        placeholder="Search"
        class="pl-10 border-2 focus-visible:ring-transparent bg-gray-200 rounded-full focus:border-blue-400 focus:bg-white"
      />
      <span class="absolute start-3 inset-y-0 flex items-center justify-center">
        <Icon name="ic:round-search" class="size-5 bg-gray-500" />
      </span>
    </div>
  </div>
</template>
