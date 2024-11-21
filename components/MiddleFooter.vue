<script lang="ts" setup></script>

<template>
  <div
    class="sticky -translate-x-1 bottom-0 w-full max-w-lg mb-4 mx-auto flex gap-2"
  >
    <div class="w-full flex bg-white items-center p-3 gap-1.5 rounded-xl">
      <button class="grid place-content-center">
        <Icon
          name="ic:baseline-insert-emoticon"
          class="size-5 text-gray-400 hover:bg-blue-400 transition duration-200"
        />
      </button>
      <input
        type="text"
        placeholder="Message"
        class="px-1 w-full text-sm rounded-xl border-none focus:outline-none"
      />
      <button class="grid place-content-center">
        <Icon
          name="ic:baseline-attach-file"
          class="size-5 rotate-30 text-gray-400 hover:bg-blue-400 transition duration-200"
        />
      </button>
    </div>
    <button
      class="bg-white rounded-full py-2.5 px-3 cursor-pointer grid place-items-center transition duration-200 hover:bg-blue-400 group"
    >
      <Icon
        name="ic:baseline-mic-none"
        class="size-5 text-gray-400 group-hover:text-white"
      />
    </button>
  </div>
</template>
