<template>
  <header class="header">
    <nuxt-link to="/" class="header__link">
      <Logo/>
    </nuxt-link>

    <span class="mobile-toggle">
      <span class="mobile-toggle__bar"></span>
      <span class="mobile-toggle__bar"></span>
    </span>

    <nav aria-label="Primary" class="header__nav">
      <nuxt-link to="/about" class="header__link">
        About
      </nuxt-link>
      <nuxt-link to="/services" class="header__link">
        Services
      </nuxt-link>
      <nuxt-link to="/contact" class="header__link">
        Contact Us
      </nuxt-link>
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
  @apply

  &__bar {

  }
}

.header {
  @apply w-full flex justify-center items-center bg-black text-lg;

  &__nav {
    @apply flex flex-col justify-center items-end;
  }

  &__link {
    @apply p-6 border-b border-transparent;

    &.nuxt-link-exact-active {
      @apply border-yellow-500;
    }
  }
}
</style>
