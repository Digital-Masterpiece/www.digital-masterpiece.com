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

h1, h2, h3, h4, h5, h6, p, ul, ol {
  @apply mb-2 mx-auto max-w-xl;
}

h1 {
  @apply text-3xl font-medium text-center;
}

h2 {
  @apply text-2xl font-medium mt-8;
}

p, ol, ul {
  @apply text-lg;
}

ol {
  @apply list-decimal list-outside pl-4;
}

.main {
  @apply flex flex-col justify-center items-center p-8 py-16;

  &__container {
    @apply max-w-5xl w-full;

    @media (min-width: 64em) {
      @apply px-6;
    }
  }
}

// Transitions
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s linear;
}

.fade-enter {
  transform: translateY(-1rem)
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
