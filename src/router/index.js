import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import HelloWukk from "@/components/HelloWukk";

Vue.use(Router);

var router = new Router({
  routes: [
    // 配置路由规则
    { path: "/a", redirect: "/b" },
    { path: "/b", component: HelloWorld },
    { path: "/c", component: HelloWukk },
  ]
});

export default router;
