<template>
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
            >Create </span
          >
        </li>
      </ol>
    </nav>
  <div class="w-75 p-3" style="text-align: left">
    <div class="d-flex justify-content-between py-3">
      <h1 class="d-inline">Add Question</h1>
    </div>

    <b-form @submit.prevent="addQuestion" class="inner-form text-left">
      <b-form-group
        id="fieldset-1"
        description="required (max 55 characters)"
        label="Title"
        label-for="Title"
        :invalid-feedback="invalidFeedbackTitle"
        :state="!invalidFeedbackTitle"
        required
      >
        <b-form-input
          id="Title"
          v-model="question.title"
          :state="!invalidFeedbackTitle"
          trim
        ></b-form-input>
      </b-form-group>

      <hr />
      <div class="d-flex">
        <div>Options</div>
        <div class="px-4" v-if="isAtOptionThreshold">
          <b-badge
            pill
            variant="primary"
            @click="addOption"
            style="cursor: pointer"
            >+ Add new option</b-badge
          >
        </div>
        <div class="text-danger float-right" v-if="!isOptionFilled">
          Fill atleast one option
        </div>
      </div>
      <div>
        <b-input-group
          v-for="(option, index) in question.options"
          :key="index"
          class="my-3"
        >
          <b-form-input
            class=""
            v-model="question.options[index]"
            required
            :placeholder="`Enter option ${index + 1}`"
          ></b-form-input>

          <b-input-group-append>
            <div
              class="px-4"
              style="cursor: pointer"
              @click="removeOption(index)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                style="height: 20px"
                class="ml-2"
              >
                <path
                  fill="#EF1818"
                  d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                />
              </svg>
              delete
            </div>
          </b-input-group-append>
        </b-input-group>
      </div>
    </b-form>

    <div class="d-flex justify-content-between py-3">
      <router-link
        type="button"
        class="btn btn-outline-secondary d-inline px-3"
        :to="{ name: 'QuestionsList' }"
        >Cancel</router-link
      >
      <button
        type="button"
        class="btn btn-success d-inline px-3"
        @click="addQuestion"
        :disabled="invalidFeedbackTitle || !isOptionFilled"
      >
        Save & Stay
      </button>
      <button
        type="button"
        class="btn btn-success d-inline px-3"
        @click="addQuestion(false)"
        :disabled="invalidFeedbackTitle || !isOptionFilled"
      >
        Save & Continue
      </button>
    </div>
  </div>
</template>

<script>
import Question from "@/components/Question.vue";
import router from "@/router";
import Nav from '@/components/Nav.vue';

export default {
  data() {
    return {
      question: this.clearForm(),
    };
  },
  components: {
    Question,
    Nav
  },
  computed: {
    isAtOptionThreshold() {
      return this.question.options.length < 6;
    },
    isOptionFilled() {
      const options = Object.values(this.question.options);
      return options.filter((option) => Boolean(option)).length;
    },

    invalidFeedbackTitle() {
      const titleLength = this.question.title?.length;
      if (!titleLength) {
        return "Title is required";
      }
      if (titleLength < 4) {
        return "Enter at least 4 characters.";
      }
      if (titleLength > 55) {
        return "Characters should not exceed 55";
      }
      return false;
    },
  },
  methods: {
    addQuestion(stay = true) {
      let questions = JSON.parse(localStorage.getItem("questions"));
      this.question.options = this.question.options.filter((option) => Boolean(option))
      questions.push(this.question);
      localStorage.setItem("questions", JSON.stringify(questions));
        this. question = this.clearForm()
      if (!stay) {
        router.push({ name: "QuestionsList" });
      }
    },
    addOption() {
      if (this.isAtOptionThreshold) {
        this.question.options.push(null);
      }
    },
    removeOption(index) {
      this.question.options.splice(index, 1);
    },
    clearForm() {
      return {
        title: null,
        options: [null, null],
      };
    },
  },
};
</script>
