<template>
  <section class="h-fit flex flex-col gap-24 items-center px-4">
    <div class="flex flex-col gap-8 items-center justify-center w-full">
      <div class="max-w-1/2 flex flex-col items-center justify-center gap-4">
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

    <div v-if="computedProject.medias" class="h-px bg-primary w-full"></div>

    <div class="columns-1 md:columns-2 gap-2 md:gap-4 [&>div:not(:first-child)]:mt-2 md:[&>div:not(:first-child)]:mt-4">
      <div v-for="(project) in computedProject.medias" :key="project.id"
        class="w-full h-fit relative overflow-hidden rounded transition hover:shadow-lg">
        <img :alt="`${project.title}`" :src="`https:${project.fields.file.url}`" class="h-full w-full object-cover" />
      </div>
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
  },
  created() {
    console.log(this.computedProject)
  }
};
</script>