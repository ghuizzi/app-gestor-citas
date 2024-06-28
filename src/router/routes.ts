import { RouteRecordRaw } from 'vue-router';
export enum AuthLevel {
  NONE,
  ANY,
  SPECIFIC, // Not handled yet
}


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Panel', meta: { drawerName: 'Panel', title: 'Inicio',}, component: () => import('../../src/pages/panel/Doctor.vue') },
      { path: '/pacientes', name: 'Pacientes', meta: { drawerName: 'Panel', title: 'Pacientes',}, component: () => import('../../src/pages/panel/Pacientes.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
