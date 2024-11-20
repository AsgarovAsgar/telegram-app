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

const groupedMessages = ref([
  {
    date: '2023-11-05',
    messages: [
      { id: 1, text: 'Hello!', sender: 'other', timestamp: '2023-11-05T10:30:00' },
      { id: 2, text: 'Hi! How are you?', sender: 'me', timestamp: '2023-11-05T10:32:00' },
      { id: 3, text: 'I am fine, thanks for asking!', sender: 'other', timestamp: '2023-11-05T10:35:00' },
      { id: 4, text: 'What about you?', sender: 'other', timestamp: '2023-11-05T10:36:00' },
      { id: 5, text: 'I’m doing great, just busy with work.', sender: 'me', timestamp: '2023-11-05T10:38:00' },
      { id: 6, text: 'Understandable. Work can get hectic.', sender: 'other', timestamp: '2023-11-05T10:40:00' },
    ],
  },
  {
    date: '2023-11-04',
    messages: [
      { id: 7, text: 'Hey! Are you available tomorrow?', sender: 'me', timestamp: '2023-11-04T12:00:00' },
      { id: 8, text: 'I might be. What’s up?', sender: 'other', timestamp: '2023-11-04T12:05:00' },
      { id: 9, text: 'Let’s grab coffee if you’re free.', sender: 'me', timestamp: '2023-11-04T12:10:00' },
      { id: 10, text: 'Sounds good! Let’s meet around noon?', sender: 'other', timestamp: '2023-11-04T12:12:00' },
    ],
  },
  {
    date: '2023-11-03',
    messages: [
      { id: 11, text: 'Have you checked out that new movie?', sender: 'me', timestamp: '2023-11-03T15:30:00' },
      { id: 12, text: 'Not yet! Is it worth watching?', sender: 'other', timestamp: '2023-11-03T15:35:00' },
      { id: 13, text: 'Absolutely. The visuals are amazing!', sender: 'me', timestamp: '2023-11-03T15:40:00' },
      { id: 14, text: 'Alright, I’ll watch it this weekend!', sender: 'other', timestamp: '2023-11-03T15:42:00' },
    ],
  },
  {
    date: '2023-10-10',
    messages: [
      { id: 15, text: 'It’s been a while. How’ve you been?', sender: 'other', timestamp: '2023-10-10T10:00:00' },
      { id: 16, text: 'Busy, but all good! What about you?', sender: 'me', timestamp: '2023-10-10T10:02:00' },
      { id: 17, text: 'Same here. Life keeps us occupied!', sender: 'other', timestamp: '2023-10-10T10:05:00' },
    ],
  },
]);

</script>

<template>
  <div class="flex flex-col overflow-hidden h-screen">
    <div class="pl-4 pr-2 py-1 flex justify-between items-center border-b border-gray-100 shadow-lg">
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
    <div class="relative flex flex-col overflow-hidden grow">
      <img class="absolute top-0 h-screen object-cover -z-10" src="~/assets/telegram-bg.png" alt="">
      <div ref="messageContainerRef" class="mb-2 flex mt-auto flex-col overflow-hidden overflow-y-scroll scrollbar-chat">
        <div :class="isChatVisible ? 'visible': 'invisible'" class="pt-10 pb-1 flex flex-col gap-4 max-w-lg mx-auto w-full">
          <div v-for="group in groupedMessages" :key="group.date" class="flex flex-col gap-1.5">
            <p class="mx-auto sticky top-2 px-3 pt-0.5 pb-1 mb-1 bg-green-700/50 text-white font-semibold rounded-full text-[13px] inline">
              {{ group.date }}
            </p>
            <div 
              v-for="message in group.messages" 
              :key="message.id" 
              class="px-1.5 py-1 max-w-sm text-sm rounded-lg shadow"
              :class="message.sender === 'me' ? 'self-end bg-green-300' : 'self-start bg-white'"
            >
              <div class="flex">
                <p>{{ message.text }}</p>
                <p 
                  class="text-[10px] ml-2 -mb-1 mt-auto"
                  :class="message.sender === 'me' ? 'text-green-700' : 'text-gray-400'"
                >10:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="sticky -translate-x-1 bottom-0 w-full max-w-lg mb-4 mx-auto flex gap-2">
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
      </div> -->
    </div>
  </div>
</template>
