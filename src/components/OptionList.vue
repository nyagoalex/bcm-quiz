<template>
  <div class="question-box-container">
    <div>
      <div>
        <b-row
          class="my-2"
          v-for="(answer, index) in question.options"
          :key="index"
        >
          <div class="card py-3">
            <b-row>
              <b-col md="10">
                <b-card-text style="text-align: left">
                  {{ answer }}
                </b-card-text>
              </b-col>
              <b-col md="2" class="icon">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style="height: 20px"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    question: Object,
  },
};
</script>

<style scoped>
.list-group {
  margin-bottom: 15px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.selected {
  background-color: #eff6ff !important;
}

.correct {
  background-color: #ecfdf5 !important;
}

.incorrect {
  background-color: #fef2f2 !important;
}

.card:hover {
  box-shadow: 3px 4px 4px 2px #e9ecef;
}
.card {
  cursor: pointer;
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity));
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity));
}

.card b-card-text {
  text-align: left;
}
.card .icon {
  text-align: right;
}
</style>
