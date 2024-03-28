<template>
  <header class="fixed top-0 flex justify-center z-50 w-full p-4">
    <nav
      class="navBar relative w-full bg-white bg-opacity-50 backdrop-blur-md border border-white rounded-[35px] px-4 py-3 flex flex-col gap-4 overflow-hidden "
      :class="isMenuOpen ? 'max-h-96' : 'max-h-16'">

      <div class="w-full flex items-center justify-between">
        <div class="flex items-center justify-start gap-4">
          <div @click="this.isMenuOpen = false" class="flex md:hidden">
            <Button name="ZC" asLink href="/" className="uppercase text-sm" />
          </div>
          <div class="hidden md:flex">
            <Button name="ZC" asLink href="/" />
          </div>
          <Button name="PROJETS" logo="/icons/projets.svg" asLink href="/projets"
            className="hidden md:flex uppercase text-sm" />
          <Button name="PLAYGROUNDS" logo="/icons/play.svg" asLink href="/playground"
            className="hidden md:flex uppercase text-sm" />
          <Button name="À PROPOS" logo="/icons/about.svg" asLink href="/about"
            className="hidden md:flex uppercase text-sm" />
        </div>

        <div class="hidden md:flex items-center justify-start gap-4">
          <img src="/icons/insta.svg" alt="Icon Instagram" class="w-6 h-6">
          <img src="/icons/tiktok.svg" alt="Icon TikTok" class="w-6 h-6">
          <img src="/icons/linkedin.svg" alt="Icon Linkedin" class="w-6 h-6">
        </div>

        <div class="flex md:hidden ">
          <Button logo="/icons/burger.svg" className="h-8" :onClickFunction="toggleMenu" />
        </div>
      </div>

      <div v-if="isMenuOpen" class="w-full flex md:hidden flex-col justify-start items-start gap-4 py-4">
        <div @click="toggleMenu">
          <Button name="PROJETS" logo="/icons/projets.svg" asLink href="/projets" className="flex uppercase" />
        </div>
        <div @click="toggleMenu">
          <Button name="PLAYGROUNDS" logo="/icons/play.svg" asLink href="/playground" className="flex uppercase" />
        </div>
        <div @click="toggleMenu">
          <Button name="À PROPOS" logo="/icons/about.svg" asLink href="/about" className="flex uppercase" />
        </div>
        <div class="flex items-center justify-start gap-4">
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
      </div>

    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.navBar {
  transition: max-height 0.3s;
}
</style>