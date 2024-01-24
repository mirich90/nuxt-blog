<template>
  <section class="posts-list container">
    <div class="posts__wrapper">
      <postPreview
        v-for="post in posts"
        :key="post.id"
        :post="post"
        :admin="admin"
      />
    </div>
  </section>
</template>

<script>
import PostPreview from "~/components/Blog/PostPreview.vue";
export default {
  components: {
    PostPreview,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style>
.posts__wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
