<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="Последние посты" />
    <PostsList :posts="posts" />
    <Contacts />
  </div>
</template>

<script>
import Promo from "~/components/Promo.vue";
import Contacts from "~/components/Contacts.vue";

export default {
  components: {
    Promo,
    Contacts,
  },
  head() {
    let title = "Блог",
      descr = "Блог на Nuxt.js",
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
