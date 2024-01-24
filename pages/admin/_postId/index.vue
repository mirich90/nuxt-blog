<template>
  <NewPostForm :postEdit="post" @submit="onSubmit" />
</template>

<script>
import axios from "axios";
import NewPostForm from "@/components/Admin/NewPostForm.vue";
export default {
  components: { NewPostForm },
  layout: "admin",

  asyncData(contex) {
    return axios
      .get(`http://testapi/?select=articles&id=${contex.params.postId}`)
      .then((res) => {
        return {
          post: res.data[0],
        };
      })
      .catch((e) => contex.error(e));
  },
  methods: {
    onSubmit(post) {
      post = {
        id: +post.id,
        description: post.description,
        content: post.content,
        img: post.img,
        title: post.title,
      };
      this.$store.dispatch("editPost", post).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>
