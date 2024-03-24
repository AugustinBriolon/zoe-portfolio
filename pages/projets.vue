<template>
  <section class="h-fit flex flex-col gap-12 md:gap-8 items-center px-4">
    <h1>Projets</h1>
    <div class="w-full">
      <div class="flex gap-2 overflow-x-scroll no-scrollbar">
        <Button name="ALL" class="uppercase whitespace-nowrap" :onClickFunction="() => filterProjects('all')" />
        <Button v-for="(tag, index) in getTagsFromProjects" :key="index" :name="tag" class="uppercase whitespace-nowrap"
          :onClickFunction="() => filterProjects(tag)" />
      </div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <template v-for="(projects, index) in filteredProjects" :key="index">
        <div class="flex flex-col gap-2">
          <CardProject :projetData="projects" />
        </div>
      </template>
    </div>

  </section>
</template>

<script>
export default {
  name: "Projets",
  data() {
    return {
      currentTag: null,
    };
  },
  computed: {
    computedProjects() {
      return useProjects().value;
    },
    filteredProjects() {
      return this.computeFilteredProjects();
    },
    getTagsFromProjects() {
      const projects = this.computedProjects;
      let tags = projects.map((project) => project.tag);
      tags = tags.map(tag => tag.replace(/([A-Z])/g, ' $1'));
      return [...new Set(tags)];
    },
  },
  methods: {
    filterProjects(tag) {
      if (tag === 'all') {
        this.currentTag = null;
        return;
      }
      this.currentTag = tag;
    },
    computeFilteredProjects() {
      return this.currentTag
        ? this.computedProjects.filter((project) => {
          const formattedTag = project.tag.replace(/([A-Z])/g, ' $1');
          return formattedTag === this.currentTag;
        })
        : this.computedProjects;
    },

  },
  mounted() {
    this.computedProjects;
  },
};
</script>
