import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import UploadComponent from '../components/UploadComponent.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // }
  {
    path: '/upload',
    name: 'UploadPage',
    component: UploadComponent,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
