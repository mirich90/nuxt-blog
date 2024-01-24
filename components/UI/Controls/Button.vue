<template>
  <button class="btn" :class="btnClass" v-on="$listeners" v-bind="$attrs">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: "btnPrimary",
    },
  },
};
</script>

<style scopped>
button,
.btn {
  display: inline-block;
  padding: 0.25em;
  font-family: "Space Mono", monospace;
  color: var(--color-primary);
  border: 3px solid var(--color-primary);
  box-shadow: inset 0 0 0 0 var(--color-primary);
  transition: all 0.4s ease-in-out;
  background: #fff;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  cursor: pointer;
}
button:hover,
.btn:hover {
  background: var(--color-primary);
  color: #fff;
}
</style>
