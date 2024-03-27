<template>
  <footer
    class="grid gap-4  md:grid-cols-footer w-screen items-center justify-center px-4 py-8 bg-white bg-opacity-50 backdrop-blur-md">
    <div></div>
    <div class="w-full flex items-center justify-center gap-4">
      <a href="https://www.instagram.com/zoe_cassis/" target="_blank">
        <img src="/icons/insta.svg" alt="Icon Instagram" class="w-6 h-6">
      </a>
      <a href="https://www.tiktok.com/@zoe_cassis" target="_blank">
        <img src="/icons/tiktok.svg" alt="Icon TikTok" class="w-6 h-6">
      </a>
      <a href="https://www.linkedin.com/in/zo%C3%A9-cassis-8b97ba19a/?originalSubdomain=fr" target="_blank">
        <img src="/icons/linkedin.svg" alt="Icon Linkedin" class="w-6 h-6">
      </a>
    </div>
    <div class="flex items-center gap-1">
      <p class="text-sm">Code by</p>
      <a href="https://august1.dev/" target="_blank" class="text-purple text-md font-bold">Augustin Briolon</a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
};
</script>