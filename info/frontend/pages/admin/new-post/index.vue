<template>
  <newPostFrom @submit="onSubmit" />
</template>

<script>
import newPostFrom from '@/components/Admin/NewPostFrom.vue'
export default {
  components: { newPostFrom },
  layout: 'admin',
  methods: {
    onSubmit (post) {
      console.log('Post added!')
      console.log(post)
    }
  }
}
</script>
