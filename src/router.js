import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Contact from "./views/Contact";
import Games from "./views/Games";
import GameSingle from "./views/GameSingle";
import Review from "./views/Review";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/games",
      name: "games",
      component: Games
    },
    {
      path: "/game-single",
      name: "game-single",
      component: GameSingle
    },
    {
      path: "/review",
      name: "review",
      component: Review
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import( /* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});