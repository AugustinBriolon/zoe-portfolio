<template>
  <Section class="h-screen-header flex flex-col gap-8 items-center px-4">
    <h1 class="text-center">Zoé Cassis</h1>
    <div class="flex flex-col justify-between gap-8 w-3/4 h-full">
      <iframe src="https://www.youtube.com/embed/g7O6KN49iIE" frameborder=" 0" allowfullscreen
        class="aspect-video w-full  h-auto"></iframe>
      <div class="w-full flex items-center justify-center gap-4 mb-10 cursor-pointer" href="#projets">
        <img src="/icons/arrow.svg" alt="Icon Arrow" class="animate-bounce">
        <p>Voir mes projets</p>
        <img src="/icons/arrow.svg" alt="Icon Arrow" class="animate-bounce">
      </div>
    </div>
  </Section>

  <Section class="h-fit w-full px-4" id="#projets">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <div class="space-y-2">
        <img class="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Image Description">
        <img class="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
          alt="Image Description">
        <img class="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1567016526105-22da7c13161a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="Image Description">
      </div>
      <div class="space-y-2">
        <img class="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          alt="Image Description">
        <img class="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="Image Description">
      </div>
      <div class="space-y-2">
        <img class="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Image Description">
        <img class="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          alt="Image Description">
        <img class="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Image Description">
      </div>
      <div class="space-y-2">
        <img class="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
          alt="Image Description">
        <img class="w-full h-auto object-cover"
          src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
          alt="Image Description">
        <Button name="Tous les projets" logo="/icons/arrow.svg" asLink href="/projets"
          class="arrowIcon w-full justify-between" />
      </div>
    </div>
  </Section>

  <Section class="w-full px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
    <p class="text-xl font-bold">Un projet en tête ? Parlons-en !</p>
    <Button name="zoecassis@gmail.com" logo="/icons/mail.svg" asLink href="mailto:zoecassis@gmail.com" />
  </Section>
</template>

<script>
export default {
  name: "Index",
  data() {
  },
  methods: {},
};
</script>

<style>
.arrowIcon img {
  transform: rotate(-135deg);
}
</style>