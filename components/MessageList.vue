<script lang="ts" setup>
const props = defineProps<{
  messages: unknown[];
}>();

console.log("props.messages:", props.messages);

const groupedMessages = ref([
  {
    date: "Today",
    messages: [
      {
        id: 1,
        content: "Lorem ipsum dolor sit amet.",
        date: "3:00 pm",
        state: "read",
        sender: {
          id: 6,
          email: "user@gmail.com",
          firstName: "Elijah",
          lastName: "Sabrina",
          lastSeen: new Date(),
          avatar:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
      },
      {
        id: 2,
        content: "Lorem ipsum dolor sit amet.",
        date: "4:00 pm",
        state: "sent",
        sender: {
          id: 1,
          firstName: "Dawn",
          lastName: "Sabrina",
          lastSeen: new Date(),
          email: "sabrina@gmail.com",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        replyTo: 1,
      },
      {
        id: 4,
        content: "Check this out https://github.com/",
        date: "4:00 pm",
        state: "read",
        sender: {
          id: 6,
          email: "user@gmail.com",
          firstName: "Elijah",
          lastName: "Sabrina",
          lastSeen: new Date(),
          avatar:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        previewData: {
          link: "https://github.com/",
          title: "Github",
          image:
            "https://github.blog/wp-content/uploads/2021/01/102393310-07478b80-3f8d-11eb-84eb-392d555ebd29.png?fit=1200%2C630",
          description:
            "GitHub is where over 83 million developers shape the future of software, together. Contribute to the open source community",
          domain: "github.com",
        },
      },
    ],
  },
  {
    date: "Yesterday",
    messages: [
      {
        id: 5,
        content: "Lorem ipsum dolor sit amet.",
        date: "5:00 pm",
        state: "delivered",
        sender: {
          id: 1,
          firstName: "Dawn",
          lastName: "Sabrina",
          lastSeen: new Date(),
          email: "sabrina@gmail.com",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        attachments: [
          {
            id: 3,
            type: "image",
            name: "mountain.jpg",
            size: "20 MB",
            url: "https://images.unsplash.com/photo-1664091729644-07a158d7c4ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
          },
        ],
        replyTo: 4,
      },
      {
        id: 6,
        date: "5:30 pm",
        state: "read",
        attachments: [
          {
            id: 4,
            type: "file",
            name: "lecture-10.pdf",
            size: "54.5 MB",
            url: "https://losalamos.unm.edu/forms/study-methods.pdf",
          },
        ],
        sender: {
          id: 6,
          email: "user@gmail.com",
          firstName: "Elijah",
          lastName: "Sabrina",
          lastSeen: new Date(),
          avatar:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
      },
    ],
  },
  {
    date: "Last Week",
    messages: [
      {
        id: 7,
        date: "6:00 pm",
        state: "read",
        attachments: [
          {
            id: 5,
            type: "video",
            name: "fun-video.mp4",
            size: "11.4 MB",
            url: "https://www.w3schools.com/html/mov_bbb.mp4",
            thumbnail:
              "https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          },
        ],
        sender: {
          id: 6,
          email: "user@gmail.com",
          firstName: "Elijah",
          lastName: "Sabrina",
          lastSeen: new Date(),
          avatar:
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
      },
      {
        id: 8,
        type: "recording",
        state: "waiting",
        content: {
          id: 1,
          size: "10 MB",
          src: "https://assets.mixkit.co/music/614/614.mp3",
          duration: "23s",
        },
        date: "6:20 pm",
        sender: {
          id: 1,
          firstName: "Dawn",
          lastName: "Sabrina",
          lastSeen: new Date(),
          email: "sabrina@gmail.com",
          avatar:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
      },
    ],
  },
]);

const reversedGroups = computed(() => [...groupedMessages.value].reverse());
</script>

<template>
  <div
    v-for="group in reversedGroups"
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
        message.sender.id == '1'
          ? 'self-end bg-green-300'
          : 'self-start bg-white'
      "
    >
      <div
        v-if="message.content && typeof message.content === 'string'"
        class="flex"
      >
        <p>{{ message.content }}</p>
        <p
          class="text-[10px] ml-2 -mb-1 mt-auto"
          :class="message.sender.id == '1' ? 'text-green-700' : 'text-gray-400'"
        >
          {{ message.date }}
        </p>
      </div>
      <div
        class="flex"
        v-else-if="message.content && message.type === 'recording'"
      >
        <MessageRecording :content="message.content" />
      </div>
    </div>
  </div>
</template>
