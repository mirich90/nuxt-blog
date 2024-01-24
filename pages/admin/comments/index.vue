<template>
  <commentTable
    :thead="[
      'Имя автора',
      'id поста',
      'Комментарий',
      'Статус',
      'Изменить статус',
      'Удалить',
    ]"
  >
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td>
          <span> {{ comment.name }} </span>
        </td>
        <td>
          <span> {{ comment.post }} </span>
        </td>
        <td>
          <span> {{ comment.text }} </span>
        </td>
        <td>
          <span v-if="comment.publish == 1" class="status true">
            Опубликован
          </span>
          <span v-else class="status false"> Скрыт </span>
        </td>
        <td>
          <span @click="changeComment(comment)" class="link">
            Изменить статус
          </span>
        </td>
        <td>
          <span @click="deleteComment(comment)" class="link"> Удалить </span>
        </td>
      </tr>
    </tbody>
  </commentTable>
</template>

<script>
import axios from "axios";
import commentTable from "@/components/Admin/CommentTable.vue";

export default {
  components: { commentTable },
  layout: "admin",
  asyncData(contex) {
    return contex.store.dispatch("setComments");
  },
  methods: {
    changeComment(comment) {
      comment.publish = +!+comment.publish;
      this.$store.dispatch("changeStatusComment", comment);
    },
    deleteComment(comment) {
      this.$store.dispatch("deleteComment", comment);
      this.comments = this.$store.getters["getCommentsLoaded"];
    },
  },
};
</script>
