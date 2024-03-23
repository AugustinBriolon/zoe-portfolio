<template>
  <section class="h-fit flex flex-col gap-12 md:gap-8 items-center px-4">
    <h1>À Propos</h1>
    <div class="flex flex-col items-start justify-center w-full h-fit gap-8">
      <img
        src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
        alt="Photo de Zoé Cassis" class="rounded-full h-44 w-44">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit
        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
        quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
        tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
        iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
        fugiat quo voluptas nulla pariatur?
      </p>
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
        <Button name="zoecassis@gmail.com" asLink href="mailto:zoecassis@gmail.com" logo="/icons/mail.svg" />
        <Button name="Mon CV" asLink href="/cv.pdf" logo="/icons/file.svg" />
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
  methods: {},
};
</script>