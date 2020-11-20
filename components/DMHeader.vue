<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link to="/" class="header__link header__link--home">
        <Logo/>
      </nuxt-link>

      <button class="mobile-toggle"
              aria-label="Toggle the mobile navigation."
              @click="navOpen = !navOpen"
              :class="{'mobile-toggle--open': navOpen}">
        <span class="mobile-toggle__bar"></span>
        <span class="mobile-toggle__bar"></span>
      </button>

      <nav aria-label="Primary" class="header__nav" :class="{'header__nav--open': navOpen}" @click="navOpen = false">
        <nuxt-link to="/about" class="header__link">About</nuxt-link>
        <nuxt-link to="/services" class="header__link">Services</nuxt-link>
        <nuxt-link to="/contact" class="header__link">Contact Us</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from "~/components/Logo";

export default {
  components: {Logo},
  data() {
    return {
      navOpen: false
    }
  },
  methods: {
    closeNav() {
      this.navOpen = false;
    }
  },
  mounted() {
    window.onscroll = () => this.closeNav();
    document.querySelector('#main').onclick = () => this.closeNav();
  }
}
</script>

<style lang="scss">
$desktop: 48em;

.mobile-toggle {
  @apply flex flex-col justify-center items-center cursor-pointer p-6 relative mr-4;

  @media (min-width: $desktop) {
    @apply hidden;
  }

  &__bar {
    @apply w-8 h-px bg-white transition-all duration-300 ease-in-out absolute;

    &:nth-child(1) {
      @apply mb-3;
    }

    &:nth-child(2) {
      @apply mt-3;
    }
  }

  &--open {
    .mobile-toggle__bar {
      @apply bg-yellow-400 m-0;

      &:nth-child(1) {
        transform: rotate(135deg);
      }

      &:nth-child(2) {
        transform: rotate(-135deg);
      }
    }
  }
}

.header {
  @apply w-full flex justify-center items-center bg-black text-lg w-full h-20;

  &__container {
    @apply flex justify-between items-center w-full max-w-5xl ;
  }

  &__nav {
    @apply fixed flex flex-col justify-center items-end top-0 right-0 w-full mt-20 opacity-0 transition duration-300 ease-in-out pointer-events-none;
    background-color: rgba(0, 0, 0, 0.9);

    &--open {
      @apply opacity-100 pointer-events-auto;
    }

    @media (min-width: $desktop) {
      @apply relative flex-row justify-end items-center opacity-100 pointer-events-auto mt-0;
    }
  }

  &__link {
    @apply p-6 text-white w-full text-right transition duration-200 ease-in-out;

    &.nuxt-link-exact-active {
      @apply text-yellow-400;
    }

    &--home {
      @apply flex;
    }

    &.header__link--home {
      @apply text-white w-full;
    }

    @media (min-width: $desktop) {
      @apply w-auto;
    }
  }
}
</style>
