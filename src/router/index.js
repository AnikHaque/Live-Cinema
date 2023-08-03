import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import("../views/HomeView.vue")
// import Home from "../views/HomeView.vue"
const About = () => import("../views/AboutView.vue")
const Movies = () => import("../views/MoviesView.vue")
const MovieDetails=()=>import("../views/MovieDetails.vue")
const NotFound = () => import("../views/NotFound.vue")


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/about',
      name: 'about',
    
      component:About
    },
    {
      path: '/movies',
      name: 'movies',
      component:Movies
    },
    {
      path: '/movies/:id',
      name: 'MovieDetails',
      component: MovieDetails,
      props:true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component:NotFound
    }

  ]
})

export default router
