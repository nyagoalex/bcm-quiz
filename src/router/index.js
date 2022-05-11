import { createWebHistory, createRouter } from "vue-router";
import QuestionsList from "@/views/questions/Index.vue"
import QuestionsEdit from "@/views/questions/Edit.vue"
import QuestionsCreate from "@/views/questions/Create.vue"
import QuestionsShow from "@/views/questions/Show.vue"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: QuestionsList
    },
  {
    path: "/questions",
    name: "QuestionsList",
    component: QuestionsList,
  }, {
    path: "/questions/create",
    name: "QuestionsCreate",
    component: QuestionsCreate,
  },
  {
    path: "/questions/:id",
    name: "QuestionsShow",
    component: QuestionsShow,
  },
  {
    path: "/questions/:id/edit",
    name: "QuestionsEdit",
    component: QuestionsEdit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;