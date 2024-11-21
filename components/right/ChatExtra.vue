<script lang="ts" setup>
import { Switch } from "@/components/ui/switch";
const allowNotifications = ref(false);
const toggleNotifications = () => {
  allowNotifications.value = !allowNotifications.value;
};
</script>

<template>
  <div class="flex flex-col px-2 py-1.5">
    <button
      class="px-1.5 py-1 rounded-lg hover:bg-gray-100 duration-200 flex items-center gap-4 text-sm"
    >
      <Icon name="ic:baseline-alternate-email" class="size-5 text-gray-500" />
      <div>
        <p>@johndoe</p>
        <p class="text-[11px] -mt-1 text-gray-500">Username</p>
      </div>
    </button>
    <label
      for="notifications"
      class="px-1.5 py-2.5 cursor-pointer rounded-lg flex items-center justify-between hover:bg-gray-100 duration-200"
    >
      <div class="flex items-center gap-4 text-sm">
        <Icon
          name="ic:outline-notifications-none"
          class="size-5 text-gray-500"
        />
        <p>Notifications</p>
      </div>
      <Switch
        id="notifications"
        :checked="allowNotifications"
        @update:checked="toggleNotifications"
        class="mr-2 h-3 w-9 data-[state=checked]:bg-blue-500"
      >
        <template #thumb>
          <p
            class="size-5 bg-white rounded-full border-2"
            :class="{ 'border-blue-500': allowNotifications }"
          ></p>
        </template>
      </Switch>
    </label>
  </div>
</template>
