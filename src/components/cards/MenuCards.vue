<template>
    <div  v-for="card in optionCards" :key="card.title" class=" col-12 col-md-3  q-pa-sm  "  >
        <div @click="$router.push(card.route)" style="overflow: hidden" class="col-12  row q-pa-sm border-simple row relative items-center">
            
            <div style="z-index: 1" class="col-4 justify-center flex q-my-sm ">
                <q-icon class="text-white" size="30px" :name="card.icon"/>
            </div>

            <div style="z-index: 1;white-space: pre" class="col-8 text-h6 text-center" >
                <p>{{card.title}}</p>
            </div>
            

            <svg class="svg_circle" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="220" cx="407" cy="348" :fill="card.bg_color"  stroke-width="10"/>
            </svg>

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
                title: 'Pacientes \n totales',
                icon: 'fa-solid fa-users',
                bg_color: '#54a0ff',
                route: '/Pacientes'
            },
            {
                title: 'Agregar \n Paciente',
                icon: 'fa-solid fa-user-plus',
                bg_color: '#f368e0',
                route: '/'
            },
            {
                title: 'Próximas \n citas',
                icon: 'fa-regular fa-calendar',
                bg_color: '#1dd1a1',
                route: '/'
            },
            {
                title: 'Agregar \n tratamiento',
                icon: 'fa-solid fa-tooth',
                bg_color: '#ff9f43',
                route: '/'
            }
        ]
        }
    },
})
</script>
