<template>
    <div class="posts">
        <h1>Введите ID поста</h1>
        <input type="text" name="postId" v-model="postId">
        <button @click="loadPost">Найти</button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            postId: ''
        }
    },
    methods: {
        loadPost () {
            this.$router.push(`/posts/${this.postId}`)
        }
    },
}
</script>