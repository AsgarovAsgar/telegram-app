import { conversations as cons } from "~/data";

export const useConversationsStore = defineStore("conversations", () => {
  const conversation = ref(null);
  const conversations = ref(cons);

  function fetchConversation(id) {
    conversation.value = conversations.value.find((c) => c.id == id);
  }

  return {
    conversation,
    conversations,
    fetchConversation,
  };
});
