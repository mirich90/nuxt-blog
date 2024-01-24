<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container small">
        <h1 class="title">О сайте:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <Intro title="Информация о сайте на Nuxt.js + PHP " />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    let title = "О сайте",
      descr = "Информация о сайте на Nuxt.js",
      type = "site";

    return {
      title,
      meta: [
        { hid: "og:title", name: "og:title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
      ],
    };
  },
};
</script>

<style>
.about {
  text-align: center;
}
.about p {
  margin-bottom: 10px;
}
</style>
