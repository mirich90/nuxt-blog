<template>
  <PostsList :admin="true" :posts="posts" />
</template>

<script>
export default {
  layout: "admin",
  mounted() {
    this.$store.dispatch("nuxtServerInit");
  },
  computed: {
    posts() {
      return this.$store.getters.getPostsLoaded;
    },
  },
};
</script>
