<template>
  <div>
    <DMHeader/>
    <main id="main" class="main">
      <div class="main__container">
        <Nuxt/>
      </div>
    </main>
  </div>
</template>

<script>
import DMHeader from "~/components/DMHeader";

export default {
  components: {DMHeader}
}
</script>

<style lang="scss">
html {
  font-family: 'Quicksand', sans-serif;
  @apply bg-gray-900 text-white;
}

.main {
  @apply flex flex-col justify-center items-center p-8;

  &__container {
    @apply max-w-5xl w-full;

    @media (min-width: 64em) {
      @apply px-6;
    }
  }
}
</style>
