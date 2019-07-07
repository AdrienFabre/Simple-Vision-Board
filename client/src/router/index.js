import Vue from "vue";
import Router from "vue-router";
import VisionBoard from "@/components/VisionBoard";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "VisionBoard",
      component: VisionBoard
    }
  ]
});
