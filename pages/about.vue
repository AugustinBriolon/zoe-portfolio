<template>
  <section class="h-fit w-full flex flex-col gap-12 md:gap-8 items-center px-4 max-w-screen-xl mx-auto">
    <h1>À Propos</h1>
    <div class="flex flex-col items-start justify-center w-full h-fit gap-8">
      <div class="relative">
        <img :src="computedExtra.media" alt="Photo de Zoé Cassis" class="rounded-full h-96 w-96 object-cover">
        <!-- <div class="absolute-center h-2 w-2 rounded-full bg-white "></div>
        <div class="absolute-center h-16 w-16 rounded-full border border-white"></div> -->
      </div>
      <p>
        {{ computedExtra.description }}
      </p>
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <Button name="zoecassis@gmail.com" asLink href="mailto:zoecassis@gmail.com" logo="/icons/mail.svg" />
        <Button name="Mon CV" asLink href="https://zoe-portfolio.vercel.app/images/cv.pdf" logo="/icons/file.svg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  data() {
    return {};
  },
  computed: {
    computedExtra() {
      return useExtra().value[0];
    },
  },
};
</script>

<!-- <style scoped>
.absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.spined-animation {
  animation: spin 8s linear infinite;
  transition: transform 0.5s;
}

.spined-animation:hover {
  animation-play-state: paused;
  transition: transform 0.5s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style> -->