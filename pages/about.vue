<template>
  <div>
    <Icon/>

    <h1>About Digital Masterpiece</h1>
    <p>We are a web development company based in the United States that specializes in creating and maintaining
      completely custom websites and web applications.</p>

    <h2>Tenets</h2>
    <ol>
      <li>Follow the Agile Development Life-cycle.</li>
      <li>Have a clear requirement of the Minimum Viable Product.</li>
      <li>Set reasonable timelines for all parties.</li>
      <li>Develop in type-safe, multi-threaded languages whenever possible.</li>
      <li>Write scalable and reusable code.</li>
      <li>Automate testing whenever possible.</li>
      <li>Deploy server-less or containerized.</li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Icon from "~/components/Icon.vue";

export default Vue.extend({
  components: {Icon},
  transition: 'fade'
})
</script>

<style>

</style>
