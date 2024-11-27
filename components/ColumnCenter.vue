<script lang="ts" setup>
const messageContainerRef = ref<HTMLElement | null>(null);
const isChatVisible = ref(false);

onMounted(() => {
  scrollToBottom();
  isChatVisible.value = true;
});

function scrollToBottom() {
  const container = messageContainerRef.value;
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

const props = defineProps<{
  conversation?: unknown;
}>();
</script>

<template>
  <div class="flex flex-col overflow-hidden h-screen">
    <MiddleHeader :conversation="conversation" />
    <div class="relative flex flex-col overflow-hidden grow">
      <img
        class="absolute top-0 h-screen object-cover -z-10"
        src="@/assets/telegram-bg.png"
        alt=""
      />
      <div
        ref="messageContainerRef"
        class="mb-2 flex mt-auto flex-col overflow-hidden overflow-y-scroll scrollbar-chat"
      >
        <div
          :class="isChatVisible ? 'visible' : 'invisible'"
          class="pt-10 pb-1 flex flex-col gap-4 max-w-lg mx-auto w-full"
        >
          <MessageList />
        </div>
      </div>
      <MiddleFooter />
    </div>
  </div>
</template>
