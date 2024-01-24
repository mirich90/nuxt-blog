<template>
  <div class="control">
    <label> <slot /> </label>
    <input
      v-bind="$attrs"
      :value="value"
      :type="type"
      :required="required"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scopped>
.control {
  width: 100%;
  margin: 0.5rem 0;
}
.control label {
  font-weight: bold;
}
.auth__form input,
.auth__form textarea {
  width: 100%;
  padding: 0.5em;
  border-radius: 0.25em;
  border: 2px solid;
  font-size: 1rem;
  margin-top: 0.5rem;
}

.form-link {
  margin-top: 1rem;
  margin-right: auto;
  border-bottom: 3px solid rgba(0, 0, 0, 0.01);
  transition: border 0.4s ease-in-out;
  padding-bottom: 0.3rem;
}
.form-link:hover {
  border-bottom: 3px solid var(--color-primary);
}
</style>
