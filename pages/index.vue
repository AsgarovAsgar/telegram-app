<script lang="ts" setup>

const isVisible = ref(false)

const secondChildClasses = computed(() => (isVisible.value ? 'col-span-2 delay-300' : 'col-span-3 delay-300'))

const toggleThirdChild = () => {
  isVisible.value = !isVisible.value
}

</script>

<template>
  <div class="grid grid-cols-4 relative bg-primary overflow-hidden">
    <ColumnLeft />
    <div :class="secondChildClasses" class="flex flex-col overflow-hidden h-screen">
      <div class="pl-4 px-2 py-1 flex justify-between items-center shadow-md shadow-gray-500/50">
        <div class="grow flex gap-2 items-center cursor-pointer" @click="toggleThirdChild">
          <p class="w-8 h-8 shrink-0 bg-green-400 rounded-full"></p>
          <div class="flex flex-col -space-y-1">
            <p class="font-semibold">John Doe</p>
            <p class="text-[10px] text-gray-500">last seen recently</p>
          </div>
        </div>
        <div class="flex gap-1 item-center">
          <button class="p-1.5 grid place-content-center rounded-full cursor-pointer hover:bg-gray-100 transition duration-200">
            <UIcon name="ic:round-search" class="size-5 bg-gray-500"/>
          </button>
          <button class="p-1.5 grid place-content-center rounded-full cursor-pointer hover:bg-gray-100 transition duration-200">
            <UIcon name="ic:baseline-more-vert" class="size-5 bg-gray-500" />
          </button>
        </div>
      </div>
      <div class="bg-red-400 grow">rest</div>
    </div>
    <div v-show="isVisible" class="col-span-1 bg-red-300">
      Third Child
    </div>
  </div>
</template>
