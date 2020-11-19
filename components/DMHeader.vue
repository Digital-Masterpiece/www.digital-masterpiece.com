<template>
  <header class="header">
    <nuxt-link to="/" class="header__link header__link--home">
      <Logo/>
    </nuxt-link>

    <span class="mobile-toggle">
      <span class="mobile-toggle__bar"></span>
      <span class="mobile-toggle__bar"></span>
    </span>

    <nav aria-label="Primary" class="header__nav">
      <nuxt-link to="/about" class="header__link">About</nuxt-link>
      <nuxt-link to="/services" class="header__link">Services</nuxt-link>
      <nuxt-link to="/contact" class="header__link">Contact Us</nuxt-link>
    </nav>
  </header>
</template>

<script>
import Logo from "~/components/Logo";

export default {
  components: {Logo}
}
</script>

<style lang="scss">
.mobile-toggle {
  @apply flex flex-col cursor-pointer p-6;

  &__bar {
    @apply w-8 h-1 bg-white my-1 rounded;
  }
}

.header {
  @apply w-full flex justify-center items-center bg-black text-lg w-full h-20;

  &__nav {
    @apply fixed flex flex-col justify-center items-end top-0 right-0 w-full mt-20;
    background-color: rgba(0, 0, 0, 0.75)
  }

  &__link {
    @apply p-6 text-white w-full text-right;

    &.nuxt-link-exact-active {
      @apply text-yellow-400;
    }

    &--home {
      @apply flex;
    }

    &.header__link--home {
      @apply text-white;
    }
  }
}
</style>
