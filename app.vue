<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui";

@layer utilities {
  .scrollbar::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  .scrollbar::-webkit-scrollbar-thumb {
    background: lightgray;
    border: 1px solid #fff;
  }
}
</style>
