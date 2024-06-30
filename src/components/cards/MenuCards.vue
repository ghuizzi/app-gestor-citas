<template>
    <div  v-for="card in optionCards" :key="card.title" class=" col-12 col-md-3  q-pa-sm  "  >
        <div @click="$router.push(card.route)" style="overflow: hidden"  :style="{ backgroundColor: card.bg_color }" class="col-12 cursor-pointer z-index row q-pa-sm border-simple row relative items-center" >
            
            <div style="z-index: 1" class="col-4 justify-center flex q-my-sm  ">
                <q-icon class="text-white" size="30px" :name="card.icon"/>
            </div>

            <div style="z-index: 1;white-space: pre" class="col-8 text-h6 text-center text-white" >
                <p>{{card.title}}</p>
            </div>
            

            <!-- <svg class="svg_circle" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="220" cx="407" cy="348" :fill="card.bg_color"  stroke-width="10"/>
            </svg>
            <svg class="svg_circle" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="220" cx="407" cy="348" :fill="card.bg_color"  stroke-width="10"/>
            </svg>
            <svg class="svg_circle" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="220" cx="407" cy="348" :fill="card.bg_color"  stroke-width="10"/>
            </svg> -->


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
                title: 'Número de \n pacientes',
                icon: 'fa-solid fa-user',
                bg_color: '#001BC9',
                route: '/newPaciente'
            },
            {
                title: ' Agregar \n Paciente',
                icon: 'fa-solid fa-user-plus',
                bg_color: '#f368e0',
                route: '/newPaciente'
            },
            {
                title: 'Próximas \n citas',
                icon: 'fa-regular fa-calendar',
                bg_color: '#F7D000',
                route: '/citas'
            },
            {
                title: 'Agregar \n tratamiento',
                icon: 'fa-solid fa-tooth',
                bg_color: '#F76300',
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
