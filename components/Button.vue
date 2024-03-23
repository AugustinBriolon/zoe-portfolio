<template>
  <NuxtLink
    class="w-fit cursor-pointer px-2 py-1 border border-solid border-black flex items-center gap-2 rounded-full bg-white"
    :class="className" v-if="asLink" :to=href>
    <p class="text-lg" v-if="name">{{ name }}</p>
    <img v-if="logo" :src="logo" alt="logo" class="iconLink w-4 h-4" />
  </NuxtLink>
  <button @click="onClickFunction"
    class="w-fit px-2 py-1 border border-solid border-black flex items-center gap-2 rounded-full bg-white"
    :class="className" v-else>
    <p class="text-lg" v-if="name">{{ name }}</p>
    <img v-if="logo" :src="logo" alt="logo" class="iconLink w-4 h-4" />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: {
      type: String,
      required: false
    },
    className: {
      type: String,
      required: false
    },
    logo: {
      type: String,
      required: false
    },
    onClickFunction: {
      type: Function,
      required: false
    },
    asLink: {
      type: Boolean,
      required: false
    },
    href: {
      type: String,
      required: false
    }
  },
  data() {
    return {};
  },
}
</script>