<template>
  <section class="h-screen-header flex flex-col gap-12 md:gap-8 items-center justify-between px-4">
    <div class="flex flex-col items-center justify-center md:justify-start gap-8 w-full h-full">
      <h1 class="text-center">Zoé Cassis</h1>
      <iframe
        src="https://www.youtube.com/embed/g7O6KN49iIE?autoplay=1&mute=1&autohide=1&showinfo=0&controls=0&loop=1&playlist=g7O6KN49iIE"
        frameborder=" 0" allowfullscreen class="aspect-video w-full h-auto"></iframe>
    </div>
    <a class="w-full flex items-center justify-center gap-4 mb-32 md:mb-10 cursor-pointer" href="#projets">
      <img src="/icons/arrow.svg" alt="Icon Arrow" class="animate-bounce">
      <p class="text-xl">Voir mes projets</p>
      <img src="/icons/arrow.svg" alt="Icon Arrow" class="animate-bounce">
    </a>
  </section>

  <section class="h-fit w-full px-4 pt-12" id="projets">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
      <template v-for="(group, index) in computedProjectGroups" :key="index">
        <div class="flex flex-col gap-2">
          <CardProject v-for="project in group" :key="project.id" :projetData="project" />
          <template v-if="index === computedProjectGroups.length - 1">
            <Button name="Tous les projets" logo="/icons/arrow.svg" asLink href="/projets"
              class="arrowIcon w-full justify-between" />
          </template>
        </div>
      </template>
    </div>
  </section>



  <section class="w-full px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
    <p class="text-xl font-bold">Un projet en tête ? Parlons-en !</p>
    <Button name="zoecassis@gmail.com" logo="/icons/mail.svg" asLink href="mailto:zoecassis@gmail.com" />
  </section>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {},
  computed: {
    computedProjects() {
      return useProjects().value;
    },
    computedProjectGroups() {
      const projects = this.computedProjects;
      const groups = [];
      for (let i = 0; i < projects.length; i += 3) {
        groups.push(projects.slice(i, i + 3));
      }
      return groups;
    }
  },
  mounted() {
    this.computedProjects;
  }
};
</script>

<style>
.arrowIcon img {
  transform: rotate(-135deg);
  transition: transform 0.3s;
}

.arrowIcon:hover img {
  transform: rotate(-135deg) translateY(2px);
}
</style>