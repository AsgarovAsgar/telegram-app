<script lang="ts" setup>
const { isOpen } = useSidebarToggle();
const secondChildClasses = computed(() =>
  isOpen.value ? "col-span-2" : "col-span-3"
);
</script>

<template>
  <ColumnCenter :class="secondChildClasses" />
  <ColumnRight v-show="isOpen" class="col-span-1" />
</template>
