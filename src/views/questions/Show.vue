<template>
  <div class="p-3 mx-auto">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link class="" to="/questions" 
            >Questions
          </router-link>
        </li>
        <li class="breadcrumb-item active">
          <span
            aria-current="location"
            text="0"
            active="true"
            activeclass="router-link-active"
            disabled="false"
            exact="false"
            exactactiveclass="router-link-exact-active"
            replace="false"
            routercomponentname="router-link"
            target="_self"
            >Question {{$route.params.id}} </span
          >
        </li>
      </ol>
    </nav>

    <div class="py-3 text-center">
      <h1 class="text-center">Question Index {{ $route.params.id }}</h1>
    </div>

    <b-container class="bv-example-row">
      <h5 class="text-muted mt-5 text-center">
        This Section will test your knowledge about computers
      </h5>
      <b-row class="mt-5 align-items-center">
        <b-col sm="4"
          ><h2>{{ question.title }}</h2></b-col
        >
        <b-col sm="7" offset="1">
          <OptionList :question="question" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Question from "@/components/Question.vue";
import router from "@/router";
import OptionList from "@/components/OptionList.vue";

export default {
  data() {
    return {
      question: this.clearForm(),
    };
  },
  components: {
    Question,
    OptionList,
  },
  computed: {
    // question() {
    //   const questions = JSON.parse(localStorage.getItem("questions"))
    //   return questions[this.$route.params.id];
    // },
  },
  methods: {
    clearForm() {
      const questions = JSON.parse(localStorage.getItem("questions"));
      return questions[this.$route.params.id];
    },
  },
};
</script>