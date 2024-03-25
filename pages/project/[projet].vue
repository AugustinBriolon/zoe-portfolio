<template>
  <section class="h-fit flex flex-col gap-12 items-center px-4">
    <div class="flex flex-col md:flex-row gap-4 items-start justify-center w-full">
      <div class="w-1/2 flex flex-col items-start justify-center">
        <h1>{{ computedProject.title }}</h1>
        <p>{{ computedProject.description }}</p>
      </div>
      <div class="w-1/2">
        <img :src="`https:${computedProject.media}`" :alt="`${computedProject.title}`"
          class="h-auto w-full object-cover" />
      </div>
    </div>

    <div class="h-px bg-black w-full"></div>

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
      const videoId = url.split('https://youtu.be/')[1];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&autohide=1&showinfo=0&controls=0&loop=1&playlist=${videoId}`;
    }
  },
  mounted() {
    this.computedProject;
  },
  watch: {
    computedProject: {
      immediate: true,
    },
  },
};
</script>