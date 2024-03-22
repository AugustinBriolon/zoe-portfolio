<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import '@/scss/main.scss';
</style>

<script setup>
import { useNuxtApp } from "nuxt/app";
const { $client } = useNuxtApp();

const fetchProjets = async ($client) => {
  try {
    const { data: projets } = await useAsyncData('projets', () => $client.getEntries({ content_type: "projets" }));

    const formattedData = projets._rawValue.items.map((item) => ({
      title: item.fields.title,
      // subtitle: item.fields.subtitle,
    }));
    return formattedData;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

fetchProjets($client).then((projets) => {
  useProjets().value = projets;
});

const fetchPlayground = async ($client) => {
  try {
    const { data: playground } = await useAsyncData('playground', () => $client.getEntries({ content_type: "playground" }));

    const formattedData = playground._rawValue.items.map((item) => ({
      title: item.fields.title,
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
</script>
