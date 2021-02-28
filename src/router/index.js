import {createRouter, createWebHistory} from 'vue-router'
import RightSideNext from '../components/RightSideNext'
import RightSide from '../components/RightSide'




const routes = [
    {
        path: '/',
        name: RightSide,
        component: RightSide,
    },
    {
        path: '/follows',
        name: RightSideNext,
        component: RightSideNext,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;

  