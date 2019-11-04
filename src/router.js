import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Local from "./views/Local";
import Games from "./views/Games";
import GameSingle from "./views/GameSingle";
import Review from "./views/Review";
import About from "./views/About";
import FrequentAsk from "./views/FrequentAsk";
import Teams from "./views/Teams";
import Matches from "./views/Matches";
import Album from "./views/Album"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "*",
      redirect: "/"
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
    {
      path: "/local",
      name: "local",
      component: Local
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
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/frequent-ask",
      name: "frequent-ask",
      component: FrequentAsk
    },
    {
      path: "/teams",
      name: "teams",
      component: Teams
    },
    {
      path: "/matches",
      name: "matches",
      component: Matches
    },
    {
      path: "/album",
      name: "album",
      component: Album
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
