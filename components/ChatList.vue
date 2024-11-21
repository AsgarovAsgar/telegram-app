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
  <div v-for="user in data" class="flex relative gap-1 p-1.5 rounded-lg items-center cursor-pointer hover:bg-gray-100">
    <p class="absolute top-2 right-1.5 text-[10px]">Tue</p>
    <img class="shrink-0 w-[50px] h-[50px] rounded-full" :src="user.picture.medium" alt="">
    <div class="text-sm">
      <p class="font-semibold">{{ user.name.first }} {{ user.name.last }}</p>
      <p class="line-clamp-1">{{ user.message }}</p>
    </div>
  </div>
</template>
