<script lang="ts" setup>
const { isOpen } = useSidebarToggle();
const secondChildClasses = computed(() =>
  isOpen.value ? "col-span-2" : "col-span-3"
);
const { id } = useRoute().params;
console.log("id", id);
const conversationStore = useConversationsStore();
await useAsyncData(async () => conversationStore.fetchConversation(id));
const { conversation } = storeToRefs(conversationStore);
console.log("conversation", conversation);
</script>

<template>
  <ColumnCenter :class="secondChildClasses" :conversation="conversation" />
  <ColumnRight v-show="isOpen" class="col-span-1" />
</template>
