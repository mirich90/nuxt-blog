<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts: " />
    <PostsList :posts="posts" />
  </div>
</template>

<script>
export default {
  head() {
    let title = "Список статей блога",
      descr = "Список статей блога на Nuxt.js",
      type = "site";

    return {
      title,
      meta: [
        { hid: "og:title", name: "og:title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
      ],
    };
  },
  computed: {
    posts() {
      return this.$store.getters.getPostsLoaded;
    },
  },
};
</script>
