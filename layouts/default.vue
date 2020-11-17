<template>
  <div class="main">
    <DMHeader/>
    <main id="main" class="main">
      <Nuxt/>
    </main>
  </div>
</template>

<script>
import DMHeader from "~/components/DMHeader";

export default {
  components: {DMHeader}
}
</script>

<style>
html {
  font-family: 'Quicksand', sans-serif;
  @apply bg-gray-900 text-white;
}
</style>
