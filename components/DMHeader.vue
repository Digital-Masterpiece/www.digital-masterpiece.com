<template>
  <header class="header">
    <nuxt-link to="/" class="header__link">
      <Logo/>
    </nuxt-link>
    <nuxt-link to="/about" class="header__link">
      About
    </nuxt-link>
    <nuxt-link to="/services" class="header__link">
      Services
    </nuxt-link>
    <nuxt-link to="/contact" class="header__link">
      Contact Us
    </nuxt-link>
  </header>
</template>

<script>
import Logo from "~/components/Logo";

export default {
  components: {Logo}
}
</script>

<style lang="scss">
.header {
  @apply w-full flex justify-center items-center bg-black text-lg;

  &__link {
    @apply p-6 border-b border-transparent;

    &.nuxt-link-exact-active {
      @apply border-yellow-500;
    }
  }
}
</style>
