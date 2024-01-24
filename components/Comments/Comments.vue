<template>
  <section class="comments">
    <div v-if="comments.length != 0" class="container small">
      <h2 class="title">Комментарии:</h2>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
    <div v-else class="container">
      <h2>Комментариев пока нет</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style>
.comments {
  margin: 30px auto;
}
.comment {
  margin-bottom: 20px;
  background-color: #fff;
}
.comment .name {
  margin-bottom: 12px;
  font-size: 24px;
  color: #5c4de7;
}
</style>
