<template>
  <div class="w-fit h-fit relative overflow-hidden rounded transition hover:shadow-lg">
    <NuxtLink :to="`/project/${projetData.title}`" class=" w-fit h-fit" :class="className">
      <img :alt="`${projetData.title}`" :src="`https:${projetData.media}`" class="h-auto w-full object-cover" />
      <div
        class="absolute inset-0 h-full w-full transition-all opacity-0 hover:opacity-100 bg-transparent hover:bg-gray-900/50 flex flex-col items-start justify-end">
        <div class="p-4 sm:p-6 flex flex-col gap-2 text-white">
          <p class="text-xs uppercase">{{ formatDate(projetData.date) }}</p>
          <h4 class="text-lg font-bold line-clamp-2">{{ projetData.title }}</h4>
          <p class="line-clamp-3 text-sm">{{ projetData.description }}</p>
        </div>
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
    className: {
      type: String,
      required: false,
    },
  },
  methods: {
    formatDate(dateString) {
      const [year, month, day] = dateString.split('-');
      const date = new Date(year, month - 1, day);

      const options = { month: "long", year: "numeric" };
      return date.toLocaleDateString("fr-FR", options);
    }
  }
}
</script>