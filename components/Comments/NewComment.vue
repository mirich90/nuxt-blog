<template>
  <section class="new-comment">
    <div class="container small">
      <h2 class="title">Написать комментарий:</h2>
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="auth__form">
        <Inpt v-model="comment.name" type="text">Ваше имя: </Inpt>
        <Inpt v-model="comment.email" type="email">Эл. адрес: </Inpt>
        <Txt v-model="comment.text">Текст: </Txt>
        <Btn btnClass="btnWhite">Отправить!</Btn>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      message: null,
      comment: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit(context) {
      this.$store
        .dispatch("addComment", {
          post: this.postId,
          publish: 0,
          ...this.comment,
        })
        .then(() => {
          this.message = "Комментарий отправлен на модерацию!";
          this.comment.name = "";
          this.comment.email = "";
          this.comment.text = "";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style></style>
