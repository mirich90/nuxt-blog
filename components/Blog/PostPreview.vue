<template>
  <nuxt-link :to="getLink" class="post-preview-wrapper">
    <div class="post-preview">
      <div class="img">
        <img :src="post.img" :alt="post.title" />
      </div>
      <div class="content">
        <h3 class="title">{{ post.title }}</h3>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getLink() {
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`;
    },
  },
};
</script>

<style scoped>
.post-preview-wrapper {
  flex-basis: 33.3333333333%;
  max-width: 33.3333333333%;
  padding: 0.5em;
}
.post-preview {
  box-shadow: 0 1px 2px rgb(10 10 10 / 10%), 0 1px 2px rgb(10 10 10 / 20%);
}
.post-preview:hover {
  box-shadow: 0 2px 4px rgb(10 10 10 / 20%), 0 4px 6px rgb(10 10 10 / 30%);
}
.post-preview .img {
  height: 16rem;
  border-radius: 0.25rem 0.25rem 0 0;
  overflow: hidden;
}
.post-preview img {
  margin-bottom: 16px;
  max-width: 100%;
  display: block;
}
.post-preview .post-content p {
  color: #999999;
}
.content {
  padding: 1rem;
}
h3 {
  color: var(--color-primary);
  font-size: 1.5rem;
}
</style>
