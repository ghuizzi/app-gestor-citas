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
          <div>
            <q-avatar
              size="60px"
              icon="fa-regular fa-circle-user"
              text-color="grey-4"
              @click="router.push({name: 'profile-doctor'})"
              class="cursor-pointer"
            />
          </div>
        </div>

        
      </q-toolbar>
    </q-header>

     <div  style="height: 100%; width: 100%; position: absolute; z-index: -100;" >
      <Background/>
    </div>
     
    
   <q-drawer
      v-model="isDrawerOpen"
      style="border-right: solid 1px #00000022"
    >
      <q-list>
        <div class=" q-pa-md flex flex-center ">
          <q-img style="width: 70%" src="/account.png" ></q-img>
        </div>
       <template v-for="item in drawerItems" :key="item.label">
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

    <q-page-container class="col-12  "  >
       
      <router-view />
    </q-page-container>
    <!-- waves <top-->
     <div v-if="route.name == 'profile-doctor'" class="col-12" >
      <WavesTop/>
 
     </div>
    <!-- Waves laterales -->
     <div v-if="route.name != 'profile-doctor'" style="" class="col-12">
      <WavesLaterales/>
    </div> 
    

  </q-layout>
</template>

<script setup lang="ts">
import MenuCards from 'src/components/cards/MenuCards.vue';
import WavesLaterales from 'src/components/svg/wavesLaterales.vue';
import WavesTop from 'src/components/svg/wavesTop.vue';
import { ref, watch } from 'vue';
import { RouteLocationRaw, useRoute, useRouter } from 'vue-router';
import Background from 'src/components/Background.vue'



const isDrawerOpen = ref(true);
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
    label: 'Home',
    icon: 'home',
    to: 'home',
    targetRouteNames: ['home'],
  },
  {
    label: 'Pacientes',
    icon: 'person',
    to: 'Pacientes',
    targetRouteNames: ['Pacientes'],
  },
  {
    label: 'Tratamientos',
    icon: 'fas fa-clipboard-check',
    to: "Tratamientos",
    targetRouteNames: ['Tratamientos'],
  },
  {
    label: 'Agenda',
    icon: 'fa-regular fa-calendar',
    to: "Proxímas citas",
    targetRouteNames: ['Proxímas citas'],
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
