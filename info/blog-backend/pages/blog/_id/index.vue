<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <newComment :postId="$route.params.id" />
  </div>
</template>

<script>
import axios from "axios";

import post from "@/components/Blog/Post.vue";
import newComment from "@/components/Comments/NewComment.vue";
import comments from "@/components/Comments/Comments.vue";

export default {
  components: { post, comments, newComment },
  async asyncData(context) {
    let [post, comments] = await Promise.all([
      axios.get(
        `https://blog-nuxt-b3cce.firebaseio.com/posts/${context.params.id}.json`
      ),
      axios.get(`https://blog-nuxt-b3cce.firebaseio.com/comments.json`),
    ]);

    // Comments
    let commentsArray = [],
      commentsArrayRes = [];

    Object.keys(comments.data).forEach((key) => {
      commentsArray.push(comments.data[key]);
    });
    for (let i = 0; i < commentsArray.length; i++) {
      if (
        commentsArray[i].postId === context.params.id &&
        commentsArray[i].publish === true
      ) {
        commentsArrayRes.push(commentsArray[i]);
      }
    }

    return {
      post: post.data,
      comments: commentsArrayRes,
    };
  },
  // data () {
  //   return {
  //     post: {
  //       id: 1,
  //       title: '1 post',
  //       descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //       content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  //       img: 'https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg'
  //     },
  //     comments: [
  //       { name: 'Alex', text: 'Lorem ipsum dolor sit amet, consectetur' },
  //       { name: 'Evgenii', text: 'Lorem ipsum dolor sit amet, consectetur' },
  //     ]
  //   }
  // }
};
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    margin-bottom: 16px;
    max-width: 400px;
  }
  p {
    color: #999999;
  }
}
.post-body {
  text-align: left;
}
</style>
