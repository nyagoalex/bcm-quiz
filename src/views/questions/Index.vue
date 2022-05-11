<template>

  <div class="p-3 mx-auto">
    <div class="d-flex justify-content-between py-3">
      <h1 class="d-inline">Questions</h1>
      <div>
        <router-link
          type="button"
          class="btn btn-primary d-inline px-3"
          :to="{ name: 'QuestionsCreate' }"
          >+ Add Question</router-link
        >
      </div> 
    </div>
    <div v-if="this.questions.length">
    <Question  v-for="(question, index) in questions" :key="index"  :question="question" :position="index" :removeQuestion="removeQuestion" />
    </div>
    <div v-else class="text-center rounded-lg align-middle" style="height: 150px; background-color: #E5E7EB; width: 75%;">
        <h3 class="align-middle text-muted py-4">NO QUESTIONS ADDED YET</h3>
    </div>
  </div>
</template>

<script>
import Question from "@/components/Question.vue";
import Nav from '@/components/Nav.vue';

export default {
  data() {
    return {
      questions: [],
    };
  },
  components: {
    Question,
  },
   methods: {
   removeQuestion(position) {
      this.questions.splice(position, 1);
      localStorage.setItem("questions", JSON.stringify(this.questions));
    },
  },
  mounted: function() {
    this.questions = JSON.parse(localStorage.getItem("questions"))
  }
};
</script>
