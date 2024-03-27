<template>
  <div class="w-screen h-screen fixed top-0 -z-10 opacity-50 bg-[url('/images/bg.png')] bg-repeat bg-cover bg-center">
  </div>
  <Header />
  <main class="mt-[96px] min-h-screen-header px-4 pb-12 flex flex-col gap-8">
    <slot />
  </main>
  <Footer />
</template>