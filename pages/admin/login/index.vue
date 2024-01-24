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
        <Inpt type="password" v-model="user.password"> Пароль: </Inpt>

        <div class="controls">
          <Btn> Войти! </Btn>
        </div>

        <nuxt-link class="form-link" to="/admin/signup">
          <span>Зарегистрироваться?</span>
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
        .dispatch("loginUser", this.user)
        .then((res) => {
          if (res.status === 500) {
            this.message.status = "error";
            this.message.text = res.message;
            return;
          }
          this.$router.push("/admin/");
          this.user.email = "";
          this.user.password = "";
          this.message.text = null;
        })
        .catch((e) => {
          this.user.email = "";
          this.user.password = "";
        });
    },
  },
};
</script>
