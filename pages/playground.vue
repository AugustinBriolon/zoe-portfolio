<template>
  <section class="h-fit flex flex-col gap-12 px-4 mx-auto max-w-screen-xl">
    <h1 class="text-center">Playground</h1>

    <div class="flex flex-col gap-4">
      <h4>Dessins</h4>
      <div ref="dessinsSlider" class="flex gap-4 md:gap-10 overflow-x-scroll no-scrollbar">
        <div ref="dessinsSliderItem" v-for="(playground, index) in dessinsPlaygrounds" :key="index"
          class="margin-x-slider w-3/4 sm:w-2/4 lg:w-1/3 min-w-[200px] aspect-square shrink-0 rounded-bl-small rounded-tr-small relative group max-w-md">
          <img
            class="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-bl-small rounded-tr-small overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500"
            :src="playground.image" alt="Image Playground" />
        </div>
      </div>

      <div class="flex gap-10 justify-start items-center">
        <Arrow color="black" direction="left" @click="scrollLeft('dessinsSlider')" />
        <Arrow color="black" direction="right" @click="scrollRight('dessinsSlider')" />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h4>Coutures</h4>
      <div ref="couturesSlider" class="flex gap-4 md:gap-10 overflow-x-scroll no-scrollbar">
        <div ref="couturesSliderItem" v-for="(playground, index) in couturesPlaygrounds" :key="index"
          class="margin-x-slider w-3/4 sm:w-2/4 lg:w-1/3 min-w-[200px] aspect-square shrink-0 rounded-bl-small rounded-tr-small relative group max-w-md">
          <img
            class="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-bl-small rounded-tr-small overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500"
            :src="playground.image" alt="Image Playground" />
        </div>
      </div>

      <div class="flex gap-10 justify-start items-center">
        <Arrow color="black" direction="left" @click="scrollLeft('couturesSlider')" />
        <Arrow color="black" direction="right" @click="scrollRight('couturesSlider')" />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Playground",
  data() {
    return {
      paddingProjects: 0,
      dessinsPlaygrounds: [
        {
          image: "https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
        },
        {
          image: "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        },
        {
          image: "https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        },
        {
          image: "https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        }
      ],
      couturesPlaygrounds: [
        {
          image: "https://images.unsplash.com/photo-1668906093328-99601a1aa584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
        },
        {
          image: "https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
        },
        {
          image: "https://images.unsplash.com/photo-1664574654529-b60630f33fdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        },
        {
          image: "https://images.unsplash.com/photo-1542125387-c71274d94f0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        },
        {
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        }
      ],
    };
  },
  methods: {
    scrollRight(refName) {
      const container = this.$refs[refName];
      const sliderItem = this.$refs[refName + 'Item'][0];
      this.paddingProjects = window.innerWidth >= 768 ? 56 : 32;
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 1
        ? container.scrollTo({
          behavior: "smooth",
          left: 0,
        })
        : container.scrollTo({
          behavior: "smooth",
          left: container.scrollLeft + (sliderItem.clientWidth + this.paddingProjects),
        });
    },
    scrollLeft(refName) {
      const container = this.$refs[refName];
      const sliderItem = this.$refs[refName + 'Item'][0];
      this.paddingProjects = window.innerWidth >= 768 ? 56 : 32;
      container.scrollLeft <= 1
        ? container.scrollTo({
          behavior: "smooth",
          left: container.scrollWidth - container.clientWidth,
        })
        : container.scrollTo({
          behavior: "smooth",
          left: container.scrollLeft - (sliderItem.clientWidth + this.paddingProjects),
        });
    },
  },
};
</script>
