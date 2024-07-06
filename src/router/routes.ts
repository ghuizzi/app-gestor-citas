import { title } from 'process';
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
      { path: '/', name: 'home', meta: { drawerName: 'Panel', title: 'Inicio',}, component: () => import('../../src/pages/IndexPage.vue') },
      { path: '/pacientes', name: 'Pacientes', meta: { drawerName: 'Panel', title: 'Pacientes',}, component: () => import('../../src/pages/panel/Pacientes.vue') },
      { path: '/newpaciente', name: 'Nuevo paciente', meta: { drawerName: 'Panel', title: 'Pacientes',}, component: () => import('../../src/pages/panel/AgregarPaciente.vue') },
      { path: '/citas', name: 'Proxímas citas', meta: { drawerName: 'Panel', title: 'Inicio',}, component: () => import('../../src/pages/panel/Doctor.vue') },
      { path: '/tratamientos', name: 'Tratamientos', meta: { drawerName: 'Panel', title: 'Tratamientos',}, component: () => import('../../src/pages/panel/Tratamientos.vue') },
      { path: '/newtratamiento', name: 'Nuevo tratamiento', meta: { drawerName: 'Panel', title: 'Inicio',}, component: () => import('../../src/pages/panel/AgregarTratamiento.vue') },
      {path:'/profile', name: 'profile-doctor', meta: {drawerName: 'Panel', title: 'Inicio',},component: ()=>import('../../src/pages/panel/Profile.vue')},
      {path:'/patients', name: 'patients', meta: {drawerName: 'Panel', title: 'Inicio',},component: ()=>import('../../src/pages/panel/Patients.vue')}
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
