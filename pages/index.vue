<script lang="ts" setup>

const isVisible = ref(false)

const secondChildClasses = computed(() => (isVisible.value ? 'col-span-2' : 'col-span-3'))

const toggleThirdChild = () => {
  isVisible.value = !isVisible.value
}

</script>

<template>
  <div class="grid grid-cols-4 relative overflow-hidden">
    <ColumnLeft />
    
    <ColumnCenter :class="secondChildClasses" @on-toggle="toggleThirdChild" />
    <div v-show="isVisible" class="col-span-1 bg-red-300">
      Third Child
    </div>
  </div>
</template>
