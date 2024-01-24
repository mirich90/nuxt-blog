<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post" />
    <NewComment :postId="+$route.params.id" />
    <Comments :comments="comments" />
  </div>
</template>

<script>
import axios from "axios";

import Post from "@/components/Blog/Post.vue";
import NewComment from "@/components/Comments/NewComment.vue";
import Comments from "@/components/Comments/Comments.vue";

export default {
  components: { Post, NewComment, Comments },

  head() {
    let title = this.post.title,
      descr = this.post.description,
      img = this.post.img,
      type = "article";

    return {
      title,
      meta: [
        { hid: "og:title", name: "og:title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
        { hid: "og:img", name: "og:img", content: img },
      ],
    };
  },

  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(`http://testapi/?select=articles&id=${context.params.id}`),
      axios.get(`http://testapi/?select=comments&post=${context.params.id}`),
    ]);
    let commentsF = comments.data.filter((comment) => comment.publish == 1);
    return {
      post: post.data[0],
      comments: commentsF,
    };
  },
};
</script>

<style>
.post {
  max-width: 900px;
  margin: 2rem auto;
}
.post-header {
  margin-bottom: 30px;
}
.post-header {
  text-align: center;
}
.post-header img {
  margin-bottom: 16px;
  max-width: 400px;
}
.post-header p {
  color: #999999;
  font-size: 1.2rem;
  text-align: left;
}
.post-body {
  font-size: 1.2rem;
}
</style>
