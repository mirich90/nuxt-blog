<template>
  <section class="intro">
    <div class="container">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.intro {
  width: 100%;
  margin: 30px 0;
  text-align: center;
  padding: 1rem;
  color: #ffffff;
  background-color: var(--color-secondary);
}
.intro h2 {
  font-size: 26px;
}
</style>
