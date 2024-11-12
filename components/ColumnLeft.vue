<script lang="ts" setup>
import { faker } from '@faker-js/faker';
// create 10 dummy data for the chat,each person should be different
const { data }  = useAsyncData('users', async () => {
  const res = await fetch('https://randomuser.me/api/?results=20')
  const data = await res.json()
  data.results.forEach((user:any) => {
    user.message = faker.lorem.sentence()
  })
  return data.results  
})


</script>

<template>
  <div class="border-r border-gray-200 h-screen overflow-hidden flex flex-col">
    <div class="px-3 py-1.5 flex gap-3">
      <button class="p-1.5 rounded-full grid place-content-center cursor-pointer hover:bg-gray-100 transition duration-200">
        <UIcon name="ic:round-menu" class="size-5 bg-gray-500"/>
      </button>
      <UInput icon="ic:round-search" variant="soft" :ui="{ base: 'rounded-full bg-gray-100' }" class="flex-1" placeholder="Search"></UInput>
    </div>

    <div class="pl-3 py-1.5 flex flex-col overflow-y-scroll scrollbar">
      <div v-for="user in data" class="flex relative gap-1 p-1.5 rounded-lg items-center cursor-pointer hover:bg-gray-100">
        <p class="absolute top-2 right-1.5 text-[10px]">Tue</p>
        <img class="shrink-0 w-[50px] h-[50px] rounded-full" :src="user.picture.medium" alt="">
        <div class="text-sm">
          <p class="font-semibold">{{ user.name.first }} {{ user.name.last }}</p>
          <p class="line-clamp-1">{{ user.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
