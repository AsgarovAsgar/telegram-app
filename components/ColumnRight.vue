<script lang="ts" setup></script>

<template>
  <div>
    <RightHeader />
    <div>
      <div class="relative">
        <img
          class="w-full aspect-square object-cover"
          src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div
          class="absolute bottom-0 left-0 right-0 px-3.5 pb-2 pt-20 bg-gradient-to-t from-black/60 to-transparent"
        >
          <p class="text-white font-semibold">John Doe</p>
          <p class="text-white/70 text-[11px]">last seen recently</p>
        </div>
      </div>

      <RightChatExtra />
    </div>
  </div>
</template>
