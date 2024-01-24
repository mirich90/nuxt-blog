<template>
  <section class="new-post">
    <div class="container small">
      <form @submit.prevent="onSubmit" class="auth__form">
        <Inpt v-model="post.title"> Название: </Inpt>
        <Inpt v-model="post.description"> Описание: </Inpt>
        <Inpt v-model="post.img"> Ссылка на картинку: </Inpt>
        <Txt v-model="post.content"> Текст: </Txt>

        <div class="controls">
          <div class="btn btnDanger" @click="cancel">Отмена</div>
          <Btn class="btn"> Сохранить </Btn>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      post: this.postEdit
        ? { ...this.postEdit }
        : {
            title: "",
            description: "",
            img: "",
            content: "",
          },
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.post);
    },
    cancel() {
      this.$router.push("/admin/");
    },
  },
};
</script>

<style>
.new-post .controls {
  text-align: center;
  margin: 20px 0;
}
</style>
