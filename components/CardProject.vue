<template>
  <div class="relative overflow-hidden rounded shadow transition hover:shadow-lg">
    <img alt="" :src="projetData.image" class="h-full w-full object-cover" />

    <NuxtLink to="/project"
      class="absolute opacity-0 hover:opacity-100 inset-0 h-full w-full bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
      <div class="p-4 sm:p-6 flex flex-col gap-2">
        <p class="text-xs text-white">{{ projetData.date }}</p>
        <h4 class="text-lg text-white line-clamp-2">{{ projetData.title }}</h4>
        <p class="line-clamp-3 text-sm text-white">{{ projetData.description }}</p>
      </div>
    </NuxtLink>
  </div>
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