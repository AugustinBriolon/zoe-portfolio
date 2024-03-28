<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import '@/scss/main.scss';

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

<script setup>
import { useNuxtApp } from "nuxt/app";
const { $client } = useNuxtApp();

const fetchProjets = async ($client) => {
  try {
    const { data: projects } = await useAsyncData('projects', () => $client.getEntries({ content_type: "projets", order: "-fields.date" }));

    const formattedData = projects._rawValue.items.map((item) => ({
      title: item.fields.title,
      description: item.fields.description,
      media: item.fields.media.fields.file.url,
      medias: item.fields.medias,
      url: item.fields.url,
      date: item.fields.date,
      tag: item.fields.tag,
    }));
    return formattedData;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

fetchProjets($client).then((projects) => {
  useProjects().value = projects;
});

const fetchPlayground = async ($client) => {
  try {
    const { data: playground } = await useAsyncData('playground', () => $client.getEntries({ content_type: "playground" }));

    const formattedData = playground._rawValue.items.map((item) => ({
      title: item.fields.title,
      description: item.fields.description,
      media: item.fields.media.fields.file.url,
      date: item.fields.date,
      tag: item.fields.tag,
    }));
    return formattedData;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

fetchPlayground($client).then((playground) => {
  usePlayground().value = playground;
});

const fetchExtra = async ($client) => {
  try {
    const { data: extra } = await useAsyncData('extra', () => $client.getEntries({ content_type: "extra" }));

    const formattedData = extra._rawValue.items.map((item) => ({
      name: item.fields.name,
      media: item.fields.media?.fields.file.url,
      description: item.fields.description,
    }));
    return formattedData;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

fetchExtra($client).then((extra) => {
  useExtra().value = extra;
});
</script>