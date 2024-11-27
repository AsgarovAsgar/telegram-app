<script lang="ts" setup>
const { openSidebar } = useSidebarToggle();
const props = defineProps<{
  conversation?: unknown;
}>();

const getDescription = (conversation) => {
  if (conversation.type === "couple") {
    return conversation.lastSeen ?? "last seen recently";
  } else {
    return `${conversation.contacts?.length} members`;
  }
};
</script>

<template>
  <div
    class="pl-4 pr-2 py-1 flex justify-between items-center border-b border-gray-100 shadow-lg"
  >
    <div
      class="grow flex gap-2 items-center cursor-pointer"
      @click="openSidebar()"
    >
      <img
        class="shrink-0 w-8 h-8 rounded-full object-cover"
        :src="getAvatar(conversation)"
        alt=""
      />
      <div class="flex flex-col -space-y-1">
        <p class="font-semibold">{{ getName(conversation) }}</p>
        <p class="text-[11px] text-gray-500">
          {{ getDescription(conversation) }}
        </p>
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
