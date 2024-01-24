<template>
  <header>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo"><nuxt-link to="/">Blog</nuxt-link></div>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <nuxt-link
                class="navbar-link"
                :title="link.title"
                :to="link.url"
                >{{ link.title }}</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Blog", url: "/blog" },
        { title: "About", url: "/about" },
        { title: "Вход", url: "/admin/login" },
      ],
    };
  },
};
</script>

<style>
.logo a {
  color: #333333;
}
.navbar-link.nuxt-link-exact-active {
  color: var(--color-primary);
}
.navbar-link {
  position: relative;
  padding: 0.3rem;
}
.navbar-link:not(.nuxt-link-active):hover:after {
  width: 100%;
}

.navbar-link:not(.nuxt-link-active):after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  border-bottom: 3px solid #9f8f68;
  transition: width 0.4s ease-in-out;
}

.navbar {
  border-bottom: 1px solid #d0d0d0;
}
.navbar-content {
  display: flex;
  padding: 1rem;
  justify-content: space-between;
}
.navbar-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.navbar-list {
  display: flex;
}
.navbar-item {
  margin-left: 2rem;
}
</style>
