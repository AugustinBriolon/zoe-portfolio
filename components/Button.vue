<template>
  <NuxtLink 
    class="cursor-pointer px-2 py-1 border border-solid border-black flex items-center gap-2 rounded-full bg-white"
    :class="className" v-if="asLink" :to=href>
    <p class="text-lg">{{ name }}</p>
    <img v-if="logo" :src="logo" alt="logo" class="w-4 h-4" />
  </NuxtLink>
  <button @click="onclick"
    class="px-2 py-1 border border-solid border-black flex items-center gap-2 rounded-full bg-white" :class="className"
    v-else>
    <p class="text-lg">{{ name }}</p>
    <img v-if="logo" :src="logo" alt="logo" class="w-4 h-4" />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      required: false
    },
    logo: {
      type: String,
      required: false
    },
    onclick: {
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