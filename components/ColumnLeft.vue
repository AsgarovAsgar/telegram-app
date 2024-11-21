<script lang="ts" setup></script>

<template>
  <div class="border-r border-gray-200 h-screen overflow-hidden flex flex-col">
    <LeftHeader />

    <div class="pl-3 py-1.5 flex flex-col overflow-y-scroll scrollbar">
      <ChatList />
    </div>
  </div>
</template>
