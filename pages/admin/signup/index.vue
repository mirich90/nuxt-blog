<template>
  <section class="auth">
    <div class="container small">
      <form @submit.prevent="onSubmit" class="auth__form sign">
        <Message
          v-if="message.text"
          :message="message.text"
          :mesClass="message.status"
        />
        <Inpt type="email" v-model="user.email"> Эл. адрес: </Inpt>
        <Inpt type="name" v-model="user.name"> Логин: </Inpt>
        <Inpt type="password" v-model="user.password"> Пароль: </Inpt>

        <div class="controls">
          <Btn> Зарегистрироваться! </Btn>
        </div>

        <nuxt-link class="form-link" to="/admin/login">
          <span>Уже есть аккаунт?</span>
        </nuxt-link>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        name: "",
        password: "",
      },
      message: {
        text: null,
        status: "success",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("authUser", this.user)
        .then((res) => {
          if (res.status === 500) {
            this.message.status = "error";
            this.message.text = res.message;
            return;
          }
          this.$router.push("/admin/");
          this.user.email = "";
          this.user.name = "";
          this.user.password = "";
        })
        .catch((e) => {
          console.log(e);
          this.user.email = "";
          this.user.name = "";
          this.user.password = "";
        });
    },
  },
};
</script>
<style scopped></style>
