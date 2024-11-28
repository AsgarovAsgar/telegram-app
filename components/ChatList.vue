<script lang="ts" setup>
const conversationStore = useConversationsStore();
const { conversations } = storeToRefs(conversationStore);

const getAvatar = (conversation) => {
  if (conversation.type === "couple") {
    return conversation.contacts?.[0].avatar;
  } else {
    return conversation?.avatar;
  }
};

const getName = (conversation) => {
  if (conversation.type === "couple") {
    return `${conversation.contacts?.[0].firstName} ${conversation.contacts[0].lastName}`;
  } else {
    return conversation.name;
  }
};

const getLastMessage = (conversation) => {
  const message = conversation.messages?.at(-1);
  let text = undefined;
  if (typeof message.content === "string") {
    text = message.content;
  } else {
    text = message?.type;
  }
  return text;
};
</script>

<template>
  <NuxtLink
    :to="{ name: 'a-id', params: { id: conversation.id } }"
    v-for="conversation in conversations"
    class="flex relative gap-1 p-1.5 rounded-lg items-center cursor-pointer hover:bg-gray-100"
  >
    <p class="absolute top-2 right-1.5 text-[10px]">
      {{ conversation.messages?.at(-1).date }}
    </p>
    <img
      class="shrink-0 w-[50px] h-[50px] rounded-full object-cover"
      :src="getAvatar(conversation)"
      alt=""
    />
    <div class="text-sm">
      <p class="font-semibold">{{ getName(conversation) }}</p>
      <p class="line-clamp-1">{{ getLastMessage(conversation) }}</p>
    </div>
  </NuxtLink>
</template>
