<template>
  <client-only>
    <div class="wrapper">
      <Header />

      <div class="wrapper-content wrapper-content--fixed">
        <Intro title="Админ-панель">
          <nuxt-link to="/admin" class="link linkWhite"> Посты </nuxt-link>
          <nuxt-link to="/admin/new-post" class="link linkWhite">
            Создать
          </nuxt-link>
          <nuxt-link to="/admin/comments" class="link linkWhite">
            Комментарии
          </nuxt-link>
          <span @click="logout" class="link linkWhite"> Выйти </span>
        </Intro>
        <nuxt />
      </div>
    </div>
  </client-only>
</template>

<script>
import Header from "~/components/system/Header.vue";
export default {
  components: { Header },
  middleware: ["check-auth", "auth"],
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/admin/auth");
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>
