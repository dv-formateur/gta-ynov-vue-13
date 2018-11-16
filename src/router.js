import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from '@/components/Login'
import Register from '@/components/Register'
import UserBoard from '@/components/UserBoard'
import Demandes from '@/components/Demandes'
import Informations from '@/components/Informations'
import Planning from '@/components/Planning'
import CompteurHeures from '@/components/CompteurHeures'
import Contrats from '@/components/Contrats'
import Bilan from '@/components/Bilan'
import Solde from '@/components/SoldeCP'
import Manage from '@/components/ManageDemands'
import Logs from '@/components/Logs'
import Absences from '@/components/Absences'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
        meta: {
            requiresAuth: true
        }
    },
      {
          path: '/login',
          name: 'login',
          component: Login,
          meta: {
              guest: true
          }
      },
      {
          path: '/register',
          name: 'register',
          component: Register,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/dashboard',
          name: 'userboard',
          component: UserBoard,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/demandes',
          name: 'demandes',
          component: Demandes,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/informations',
          name: 'informations',
          component: Informations,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/planning',
          name: 'planning',
          component: Planning,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/compteur',
          name: 'compteur',
          component: CompteurHeures,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/contrats',
          name: 'contrats',
          component: Contrats,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/bilan',
          name: 'bilan',
          component: Bilan,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/solde',
          name: 'solde',
          component: Solde,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/manage',
          name: 'manage',
          component: Manage,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/logs',
          name: 'logs',
          component: Logs,
          meta: {
              requiresAuth: true
          }
      },
      {
          path: '/absences',
          name: 'absences',
          component: Absences,
          meta: {
              requiresAuth: true
          }
      }
  ]
})
router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.is_admin == 1){
                    next()
                }
                else{
                    next({ name: 'userboard'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next({ name: 'userboard'})
        }
    }else {
        next()
    }
})

export default router
