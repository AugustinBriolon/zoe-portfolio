<template>
  <nav class="flex w-screen items-center justify-between p-4 fixed backdrop-blur">
    <div class="flex items-center gap-4">
      <Button name="ZC" asLink href="/" />
      <Button name="Projets" logo="/icons/projets.svg" asLink href="/projets" />
      <Button name="Playground" logo="/icons/play.svg" asLink href="/playground" />
      <Button name="À Propos" logo="/icons/about.svg" asLink href="/about" />
    </div>
    <div class="flex items-center gap-4">
      <img src="/icons/insta.svg" alt="logo" class="w-6 h-6" />
      <img src="/icons/tiktok.svg" alt="logo" class="w-6 h-6" />
      <img src="/icons/linkedin.svg" alt="logo" class="w-6 h-6" />
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {},
};
</script>