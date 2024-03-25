<template>
  <section class="h-fit flex flex-col gap-24 items-center px-4">
    <div class="flex flex-col md:flex-row gap-4 items-start justify-center w-full">
      <div class="max-w-1/2 flex flex-col items-start justify-center gap-4">
        <h1>{{ computedProject.title }}</h1>
        <p>{{ computedProject.description }}</p>
      </div>
      <div class="w-1/2">
        <img :src="`https:${computedProject.media}`" :alt="`${computedProject.title}`"
          class="h-auto w-full object-cover" />
      </div>
    </div>

    <div class="h-px bg-primary w-full"></div>

    <div class="w-full">
      <iframe :src="formatUrl" frameborder="0" allowfullscreen class="aspect-video w-full h-auto"></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projet",
  data() {
    return {};
  },
  computed: {
    computedProject() {
      return useProjects().value.find((project) => project.title === this.$route.params.projet);
    },
    formatUrl() {
      const url = this.computedProject.url;
      const id = url.split('/').pop();
      return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0`;
    }
  },
  onMounted() {
    this.computedProject;
  }
};
</script>