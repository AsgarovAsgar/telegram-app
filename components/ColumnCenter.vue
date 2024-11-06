<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col overflow-hidden h-screen">
    <div class="pl-4 pr-2 py-1 flex justify-between items-center border-b border-gray-50 shadow-lg">
      <div class="grow flex gap-2 items-center cursor-pointer" @click="$emit('on-toggle')">
        <p class="w-8 h-8 shrink-0 bg-green-400 rounded-full"></p>
        <div class="flex flex-col -space-y-1">
          <p class="font-semibold">John Doe</p>
          <p class="text-[10px] text-gray-500">last seen recently</p>
        </div>
      </div>
      <div class="flex gap-1 item-center">
        <button class="p-1.5 grid place-content-center rounded-full cursor-pointer hover:bg-gray-100 transition duration-200">
          <UIcon name="ic:round-search" class="size-5 bg-gray-500"/>
        </button>
        <button class="p-1.5 grid place-content-center rounded-full cursor-pointer hover:bg-gray-100 transition duration-200">
          <UIcon name="ic:baseline-more-vert" class="size-5 bg-gray-500" />
        </button>
      </div>
    </div>
    <div class="bg-green-200 flex flex-col overflow-hidden">
      <div class="mb-2 flex flex-col overflow-y-scroll scrollbar-chat">
        <div class="flex flex-col gap-1 max-w-lg mx-auto w-full pt-10">
          <div v-for="i, index in 20" class="bg-white p-1 rounded">
            hello index {{ index }}
          </div>
        </div>
      </div>
      <div class="sticky bottom-0 w-full max-w-lg mb-4 mx-auto flex gap-2">
        <div class="w-full flex bg-white items-center p-3 gap-1.5 rounded-xl">
          <button class="grid place-content-center">
            <UIcon name="ic:baseline-insert-emoticon" class="size-5 text-gray-400 hover:bg-blue-400 transition duration-200" />
          </button>
          <input type="text" placeholder="Message" class="px-1 w-full text-sm rounded-xl border-none focus:outline-none">
          <button class="grid place-content-center">
            <UIcon name="ic:baseline-attach-file" class="size-5 rotate-30 text-gray-400 hover:bg-blue-400 transition duration-200"  />
          </button>
        </div>
        <button class="bg-white rounded-full py-2.5 px-3 cursor-pointer grid place-items-center transition duration-200 hover:bg-blue-400 group">
          <UIcon name="ic:baseline-mic-none" class="size-5 text-gray-400 group-hover:text-white" />
        </button>
      </div>
    </div>
  </div>
</template>
