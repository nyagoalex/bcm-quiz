<template>
  <div class="">
    <div>
      <b-row class="my-2">
        <div class="card py-3">
          <b-row>
            <b-col md="10">
              <b-card-text style="text-align: left">
                {{ question.title }}</b-card-text
              >
            </b-col>
            <b-col md="2" class="icon">
              <div>
                  <router-link :to="{ name: 'QuestionsEdit', params: { id: position }}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style="height: 20px"
                >
                  <path
                    fill="#006DE4"
                    d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"
                  />
                </svg></router-link>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  style="height: 20px"
                  class="px-4"
                  @click="removeQuestion(position)"
                >
                  <path
                    fill="#EF1818"
                    d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                  />
                </svg>

             <router-link :to="{ name: 'QuestionsShow', params: { id: position }}">    
<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height: 20px"><path fill="#3ABD10" d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Zm0-8.5a1,1,0,0,0-1,1v3a1,1,0,0,0,2,0v-3A1,1,0,0,0,12,11.5Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,7.5Z"/></svg>
             </router-link>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    removeQuestion: {
      type: Function,
      required: true,
    },
  },
  methods: {
    
  },
};
</script>

<style scoped>
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