<script lang="ts" setup>
import WaveSurfer from "wavesurfer.js";

const props = defineProps<{
  recording?: unknown;
}>();

const wavesurfer = ref(undefined);
const playing = ref(false);

const togglePlay = () => {
  if (!wavesurfer.value) return;

  if (playing.value) {
    wavesurfer.value.pause();
  } else {
    wavesurfer.value.play();
  }

  playing.value = !playing.value;
};

onMounted(() => {
  const waveform: HTMLElement | null = document.querySelector(
    "#waveform-" + props.recording.id
  );

  if (!waveform) return;

  wavesurfer.value = WaveSurfer.create({
    container: waveform,
    waveColor: "rgb(209 213 219)",
    progressColor: "rgb(165 180 252)",
    cursorColor: "transparent",
    barWidth: 1,
    barRadius: 1,
    cursorWidth: 1,
    height: 30,
    barGap: 4,
  });
  wavesurfer.value.load(props.recording.src);
});
</script>

<template>
  <div class="flex gap-2">
    <button
      @click="togglePlay"
      class="p-1 mr-4 flex justify-center items-center rounded-full outline-none transition-all duration-200 bg-green-600 hover:bg-green-500"
      :aria-label="playing ? 'pause' : 'play'"
    >
      <Icon v-if="playing" name="ic:baseline-pause" class="size-7 bg-white" />
      <Icon v-else name="ic:baseline-play-arrow" class="size-7 bg-white" />
    </button>
    <div class="w-full mr-4 relative flex items-center">
      <div :id="`waveform-${recording.id}`" class="w-[9.375rem]"></div>
      <div
        class="absolute border animate-pulse w-[9.375rem] border-gray-300"
      ></div>
    </div>
  </div>
</template>
