<template>
    <div  v-for="card in optionCards" :key="card.title" class=" col-12 col-md-3  q-pa-sm  "  >
        <div @click="$router.push(card.route)"  class="col-12 bg-primary cursor-pointer z-index row q-pa-sm border-simple row items-center" >
            
            <div style="z-index: 1" class="col-4 justify-center flex q-my-sm  ">
                <q-icon class="text-white" size="30px" :name="card.icon"/>
            </div>

            <div style="z-index: 1;white-space: pre" class="col-8 text-h6 text-center text-white" >
                <p>{{card.title}}</p>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return{
            optionCards : [
            
            {
                title: 'Listado de \n pacientes',
                icon: 'fa-solid fa-user',
                bg_color: '#54a0ff',
                route: '/pacientes'
            },
            {
                title: ' Agregar \n Paciente',
                icon: 'fa-solid fa-user-plus',
                bg_color: '#1dd1a1',
                route: '/newPaciente'
            },
            {
                title: 'Próximas \n citas',
                icon: 'fa-regular fa-calendar',
                bg_color: '#f368e0',
                route: '/'
            },
            {
                title: 'Agregar \n tratamiento',
                icon: 'fa-solid fa-tooth',
                bg_color: '#ff9f43',
                route: '/newtratamiento'
            }
        ]
        }
    },
})
</script>
<style>
.index{
    z-index: 100;
}
</style>
