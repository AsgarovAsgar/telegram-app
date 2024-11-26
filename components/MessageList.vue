<script lang="ts" setup>
const groupedMessages = ref([
  {
    date: "2023-11-05",
    messages: [
      {
        id: 1,
        text: "Hello!",
        sender: "other",
        timestamp: "2023-11-05T10:30:00",
      },
      {
        id: 2,
        text: "Hi! How are you?",
        sender: "me",
        timestamp: "2023-11-05T10:32:00",
      },
      {
        id: 3,
        text: "I am fine, thanks for asking!",
        sender: "other",
        timestamp: "2023-11-05T10:35:00",
      },
      {
        id: 4,
        text: "What about you?",
        sender: "other",
        timestamp: "2023-11-05T10:36:00",
      },
      {
        id: 5,
        text: "I’m doing great, just busy with work.",
        sender: "me",
        timestamp: "2023-11-05T10:38:00",
      },
      {
        id: 6,
        text: "Understandable. Work can get hectic.",
        sender: "other",
        timestamp: "2023-11-05T10:40:00",
      },
    ],
  },
  {
    date: "2023-11-04",
    messages: [
      {
        id: 7,
        text: "Hey! Are you available tomorrow?",
        sender: "me",
        timestamp: "2023-11-04T12:00:00",
      },
      {
        id: 8,
        text: "I might be. What’s up?",
        sender: "other",
        timestamp: "2023-11-04T12:05:00",
      },
      {
        id: 9,
        text: "Let’s grab coffee if you’re free.",
        sender: "me",
        timestamp: "2023-11-04T12:10:00",
      },
      {
        id: 10,
        text: "Sounds good! Let’s meet around noon?",
        sender: "other",
        timestamp: "2023-11-04T12:12:00",
      },
    ],
  },
  {
    date: "2023-11-03",
    messages: [
      {
        id: 11,
        text: "Have you checked out that new movie?",
        sender: "me",
        timestamp: "2023-11-03T15:30:00",
      },
      {
        id: 12,
        text: "Not yet! Is it worth watching?",
        sender: "other",
        timestamp: "2023-11-03T15:35:00",
      },
      {
        id: 13,
        text: "Absolutely. The visuals are amazing!",
        sender: "me",
        timestamp: "2023-11-03T15:40:00",
      },
      {
        id: 14,
        text: "Alright, I’ll watch it this weekend!",
        sender: "other",
        timestamp: "2023-11-03T15:42:00",
      },
    ],
  },
  {
    date: "2023-10-10",
    messages: [
      {
        id: 15,
        text: "It’s been a while. How’ve you been?",
        sender: "other",
        timestamp: "2023-10-10T10:00:00",
      },
      {
        id: 16,
        text: "Busy, but all good! What about you?",
        sender: "me",
        timestamp: "2023-10-10T10:02:00",
      },
      {
        id: 17,
        text: "Same here. Life keeps us occupied!",
        sender: "other",
        timestamp: "2023-10-10T10:05:00",
      },
    ],
  },
]);
</script>

<template>
  <div
    v-for="group in groupedMessages"
    :key="group.date"
    class="flex flex-col gap-1.5"
  >
    <p
      class="mx-auto sticky top-2 px-3 pt-0.5 pb-1 mb-1 bg-green-700/50 text-white font-semibold rounded-full text-[13px] inline"
    >
      {{ group.date }}
    </p>
    <div
      v-for="message in group.messages"
      :key="message.id"
      class="px-1.5 py-1 max-w-sm text-sm rounded-lg shadow"
      :class="
        message.sender === 'me'
          ? 'self-end bg-green-300'
          : 'self-start bg-white'
      "
    >
      <div class="flex">
        <p>{{ message.text }}</p>
        <p
          class="text-[10px] ml-2 -mb-1 mt-auto"
          :class="message.sender === 'me' ? 'text-green-700' : 'text-gray-400'"
        >
          10:00
        </p>
      </div>
    </div>
  </div>
</template>
