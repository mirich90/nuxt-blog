<template>
  <section class="contact">
    <div class="container small">
      <h2 class="title">Связаться</h2>
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="auth__form">
        <Inpt v-model="user.name" type="text"> Name: </Inpt>
        <Inpt v-model="user.email" type="email">Email: </Inpt>
        <Txt v-model="user.text"> Text: </Txt>
        <Btn btnClass="btnWhite">Submit</Btn>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.message = "Submited!";
      console.log(this.user);
    },
  },
};
</script>

<style>
.contact {
  padding: 2rem;
  background-color: var(--color-secondary);
  color: #fff;
}
.contact .title {
  color: #fff;
}
</style>
