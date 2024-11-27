const isOpen = ref<boolean>(false);

export function useSidebarToggle() {
  const openSidebar = () => (isOpen.value = true);
  const closeSidebar = () => (isOpen.value = false);
  const toggleSidebar = () => (isOpen.value = !isOpen.value);

  return {
    isOpen,
    openSidebar,
    closeSidebar,
    toggleSidebar,
  };
}
