<template>
    <div class="row justify-center q-px-md">
        <div class="col-12 col-md-11 row q-py-md items-stretch ">
            <div class="col-12 row q-gutter-md  q-pb-md desktop-only" >
                <div class=" col-12 col-md-3 border-radius text-grey-6 flex justify-center row q-pa-sm "  >
                    <div class="col-12 text-h6 text-center" >
                        Total pacientes
                    </div>
                    <div class="col-12 justify-center flex">
                        <q-icon size="60px" class="fa-solid fa-users"/>
                    </div>
                </div>
                <div class=" col-12 col-md-3 border-radius text-grey-6 flex justify-center row  q-pa-sm q-"  >
                    <div class="col-12 text-h6 text-center" >
                        Proximas citas
                    </div>
                    <div class="col-12 justify-center flex">
                        <q-icon size="60px" class="fa-regular fa-calendar"/>
                    </div>
                </div>
                <div class="col-12 col-md-3 border-radius text-grey-6 flex justify-center row  q-pa-sm "  >
                    <div class="col-12 text-h6 text-center" >
                        Agregar Paciente
                    </div>
                    <div class="col-12 justify-center flex">
                        <q-icon size="60px" class="fa-regular fa-user"/>
                    </div>
                </div>
                 <div class=" col-12 col-md-3 border-radius text-grey-6 flex justify-center row q-pa-sm"  >
                    <div class="col-12 text-h6 text-center" >
                        Agregar tratamiento
                    </div>
                    <div class="col-12 justify-center flex">
                        <q-icon size="60px" class="fa-regular fa-user"/>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6 items-stretch">
                <q-date  v-model="date" minimal locale="es-ES" type='datetime-local' :first-day-of-week="1" style="width: 100%; height:100%"  >

                </q-date>
            </div>
            <div class="col-12 col-md-6 q-pl-md  ">
                <v-panel>
                    <div class="flex row justify-between items-center q-pb-md " >
                        <div class="col-12 text-weight-bolder text-grey-7 text-subtitle1" >Proximos pacientes</div>
                        <div class="col-md-9 flex row ">
                            <div class="q-pr-md col-6 "  >
                               <q-input outlined v-model="search"  type="search" dense>
                                    <template v-slot:append>
                                    <q-icon name="search" />
                                    </template>
                                </q-input> 
                                 
                            </div>
                           <div class="col-6">
                           <q-input dense outlined v-model="date" type="date"  />
                           </div>
                            
                        </div>
                        
                    </div>
                    
                    <div class="row  " >
                        <div v-for="(patient, index) in patients" :key="index" :class="{'q-mb-md': index < patients.length - 1}" class="col-12 text-grey-7 row bg-img shadow-1  flex justify-between items-center "  >
                            <div class="col-3 col-md-2 " >
                                <q-avatar size="80px" >
                                    <q-icon :name="patient.icon" color="grey"/>
                                </q-avatar>
                            </div>
                            <div class=" col-8 col-md-9  " >
                                <div class="text-bold text-grey-7 ">
                                    {{patient.name}}
                                </div>
                                <div  >
                                    Fecha: {{patient.date}}
                                </div>
                                <div >

                                    Estatus: <span :class="{ 'text-green': patient.status === 'Confirmado', 'text-orange': patient.status === 'Pendiente', 'text-negative': patient.status === 'Cancelado' }" > {{patient.status}}</span>
                                </div>
                            </div>
                            <div class="col-1 cursor-pointer" >
                                <q-icon :name="patient.menu" />
                                
                            </div>
                            
                        </div>
                    </div>
                </v-panel>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from "vue";

let search = ref<string>('')
let patients = ref ([
    {
        icon: 'fa-solid fa-user',
        name: 'Gabriela Huizzi',
        date : 'Junio 24, 10:00 Am',
        status: 'Confirmado',
        menu: 'fa-solid fa-ellipsis-vertical'
    },
    {
       icon: 'fa-solid fa-user',
        name: 'Jean Viña',
        date : 'Junio 25, 2:00 Pm',
        status: 'Pendiente', 
         menu: 'fa-solid fa-ellipsis-vertical'
    },
    {
       icon: 'fa-solid fa-user',
        name: 'Maria Mendez',
        date : 'Junio 28, 2:00 Pm',
        status: 'Cancelado',
         menu: 'fa-solid fa-ellipsis-vertical'
    }
])
export default {
    setup() {
        return {
            patients,
            search
        }
    }
}
</script>
<style >
.border-radius{
    border: 1px solid  lightgrey;
    border-radius: 5px;
}
</style>