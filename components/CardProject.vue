<template>
  <NuxtLink to="/project/ze" class="relative overflow-hidden rounded shadow transition hover:shadow-lg">
    <img alt="" :src="projetData.image" class="h-auto w-full object-cover" />
    <div
      class="absolute inset-0 h-full w-full transition-all opacity-0 hover:opacity-100 bg-transparent hover:bg-gray-900/25 flex flex-col items-start justify-end">
      <div class="p-4 sm:p-6 flex flex-col gap-2">
        <p class="text-xs text-white">{{ projetData.date }}</p>
        <h4 class="text-lg text-white line-clamp-2">{{ projetData.title }}</h4>
        <p class="line-clamp-3 text-sm text-white">{{ projetData.description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: "CardProject",
  props: {
    projetData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {};
  },
};
</script>