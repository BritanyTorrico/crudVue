import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'padre',
    component: () => import( '../pruebasProps/Padre.vue')
  },
  {
    path: '/registrar/:id?',
    name: 'CrearUsuario',
    component: () => import( '../components/CrearUsuario.vue')
  },
  {
    path: '/listar',
    name: 'ListaUsuarios',
    component: () => import( '../components/ListaUsuarios.vue')
  },
  {
    path: '/editar/:id?',
    name: 'EditarUsuario',
    component: () => import( '../components/EditarUsuario.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
