<script lang="ts" setup>
import { faker } from '@faker-js/faker';
import { Input } from '@/components/ui/input'
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
        <Icon name="ic:round-menu" class="size-5 bg-gray-500"/>
      </button>
      <div class="relative flex w-full max-w-sm items-center">
        <Input id="search" type="text" placeholder="Search" class="pl-10 border-2 focus-visible:ring-transparent bg-gray-200 rounded-full focus:border-blue-400 focus:bg-white" />
        <span class="absolute start-3 inset-y-0 flex items-center justify-center">
          <Icon name="ic:round-search" class="size-5 bg-gray-500"/>
        </span>
      </div>
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
