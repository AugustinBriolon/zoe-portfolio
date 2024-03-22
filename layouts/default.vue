<template>
  <div>
    <div
      class="w-screen h-screen fixed top-0 -z-10 opacity-50 bg-[url('/images/bg.png')] bg-repeat bg-contain bg-center">
    </div>
    <Header />
    <main class="mt-[96px] h-screen-header p-4">
      <slot />
    </main>
    <Footer />
  </div>
</template>
