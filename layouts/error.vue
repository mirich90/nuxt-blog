<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <p class="title">Страница не найдена</p>
        <nuxt-link to="/"> Возвратиться на главную</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style>
.not-found__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
}
</style>
