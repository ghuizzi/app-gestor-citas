<template>
  <q-layout class="row justify-center " view="hHh Lpr lff">
    <q-header >
      <q-toolbar class="bg-primary flex justify-between">
        <q-btn
          flat
          dense
          round
          :icon="isDrawerOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"
          aria-label="Menu"
          @click="()=>( isDrawerOpen = !isDrawerOpen)"
        /> 

        <q-btn @click="$router.push('/')" flat icon="home" >
          Inicio
        </q-btn>

        <div class="flex items-center">
          <div class="text-h6 q-pr-md" >
            <i class="fa-solid fa-tooth"></i>
            Clinica Dental
          </div>

          <div  class="col row justify-end items-center "
          style="column-gap: var(--space-unit)">
            <q-btn round flat color="white" icon="fa-solid fa-bell">
              <q-badge round floating color="primary" class="q-mt-xs q-mr-xs" />
              <q-menu style="width: 400px" max-width="400px" max-height="400px">
                
              </q-menu>
            </q-btn>
          </div>
        </div>

        
      </q-toolbar>
    </q-header>

    <div v-if="route.name != 'profile-doctor'" style="margin-top: 10vh" class="col-11 col-md-11 row q-pb-md desktop-only" >
        <MenuCards />
    </div>
    <div v-if="route.name !='profile-doctor'" style="height: 100%; width: 100%; position: absolute; z-index: -100;" >
      <Background/>
    </div>
    
    
   <q-drawer
      v-model="isDrawerOpen"
      style="border-right: solid 1px #00000022"
    >
      <q-list>
       <template v-for="item in drawerItems" :key="item.label">
        <q-separator v-if="item.props && item.props.includes('separator-top')" />
        <q-item
          clickable
          :class="`text-${
                isDrawerOpen ? 'primary' :
                item.targetRouteNames &&
                item.targetRouteNames.includes($route.name as string)
                  ? 'white'
                  : 'grey'
              }` "
          v-ripple
          @click="() => handleClick([item])"
        >
          <q-item-section avatar class="q-pl-md">
            <q-icon
              size="20px"
              v-if="item.icon"
              :name="item.icon"
            />
          </q-item-section>
          <q-item-section>
            {{ item.label }}
          </q-item-section>
        </q-item>
      </template>
      </q-list>
    </q-drawer> 

    <q-page-container class="col-12" style="padding-top: 0px !important" >
      
      <router-view />
    </q-page-container>

    <!-- Waves laterales -->
     <div style="z-index: -1"v-if="route.name == 'profile-doctor'" class="col-12">
      <WavesLaterales/>
    </div> 
    

  </q-layout>
</template>

<script setup lang="ts">
import MenuCards from 'src/components/cards/MenuCards.vue';
import WavesLaterales from 'src/components/svg/wavesLaterales.vue';
import { ref, watch } from 'vue';
import { RouteLocationRaw, useRoute, useRouter } from 'vue-router';
import Background from 'src/components/Background.vue'



const isDrawerOpen = ref(false);
defineOptions({
  name: 'MainLayout'
});
export interface DrawerItemInfo {
  label: string;
  icon?: string;
  action?: VoidFunction;
  to?: RouteLocationRaw;
  targetRouteNames?: Array<string>;
  props?: Array<string>;
}

const route = useRoute();
const router = useRouter();

const drawerItems: Array<DrawerItemInfo> = [
  {
    label: 'Perfil',
    icon: 'fa-solid fa-user-circle',
    to: 'profile-doctor',
    targetRouteNames: ['profile-doctor'],
    
  },
   {
    label: 'Pacientes',
    icon: 'fa-regular fa-face-smile',
    targetRouteNames: ['Panel-profile'],
    props: ['separator-top'],
  },
  {
    label: 'Agenda',
    icon: 'fa-regular fa-calendar',
    targetRouteNames: ['Panel-profile'],
    
  },
  {
    label: 'Tratamientos',
    icon: 'fas fa-clipboard-check',
    targetRouteNames: ['Panel-profile'],
    
  },

  
];
function handleClick(items: DrawerItemInfo[]): void {
  items.forEach((item) => {
    if (item.action) {
      item.action();
    }

    if (item.to) {
      router.push({ name: item.to } as RouteLocationRaw);
    }
  });
}




</script>
