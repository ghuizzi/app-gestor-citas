<template>
    <div class="col-12 flex items-center q-pa-sm ">
        <p class="text-weight-bold " >Status:</p>

        <div class="flex items-center q-pl-sm">
            <q-icon size="20px" style="color:#27ae60" name="fa-solid fa-circle" ></q-icon>
            <p class="q-pl-sm" >Confirmado</p>
        </div>

        <div class="flex items-center q-pl-sm">
            <q-icon size="20px" style="color: #e67e22" name="fa-solid fa-circle" ></q-icon>
            <p class="q-pl-sm" >Pendiente</p>
        </div>

        <div class="flex items-center q-pl-sm">
            <q-icon size="20px" style="color:#e74c3c" name="fa-solid fa-circle" ></q-icon>
            <p class="q-pl-sm" >Cancelado</p>
        </div>

    </div>
    <div class="col-12 height-appoiments row">
        <div v-for="(patient, index) in patients" :key="index" :class="{'q-mb-sm': index < patients.length - 1}" class="col-12 col-md-11 row q-pa-sm items-center  "  >
            <div class="col-12 bg-white border-simple q-pa-xs row">
                <div class="col-3 col-md-3 flex flex-center " >
                    <q-icon size="40px" :style="{ color: statusPatient(patient.status)}" :name="patient.icon" />
                </div>
                <div class=" col-8 col-md-9  " >
                    <div class="text-bold text-grey-7 ">
                        <p>{{patient.name}}</p>
                    </div>
                    <div class=" ">
                        <p>Motivo: {{patient.motivo}}</p>
                    </div>
                    <div  >
                        <p>Fecha: {{patient.date}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {ref} from 'vue'
export default defineComponent({
    setup() {

        const statusPatient = ( status : number ) => {

            switch (status) {
                case 1:
                        return '#27ae60'
                break;
                case 2:
                        return '#e67e22'
                break;
                case 3:
                        return '#e74c3c'
                break;
                default:
                    break;
            }

        }

        return{
            statusPatient,
            search : ref(''),
            patients : ([
                {
                    icon: 'fa-solid fa-tooth',
                    name: 'Gabriela Huizzi',
                    motivo: 'Consulta',
                    date : 'Junio 24, 10:00 Am',
                    status: 1,
                    menu: 'fa-solid fa-ellipsis-vertical'
                },
                {
                icon: 'fa-solid fa-tooth',
                    name: 'Jean Viña',
                    motivo: 'Limpieza',
                    date : 'Junio 25, 2:00 Pm',
                    status: 2, 
                    menu: 'fa-solid fa-ellipsis-vertical'
                },
                {
                icon: 'fa-solid fa-tooth',
                    name: 'Maria Mendez',
                    motivo: 'Extracción',
                    date : 'Junio 28, 2:00 Pm',
                    status: 3,
                    menu: 'fa-solid fa-ellipsis-vertical'
                },
                {
                    icon: 'fa-solid fa-tooth',
                    name: 'Juan Leal',
                    motivo: 'Consulta',
                    date : 'Junio 24, 10:00 Am',
                    status: 1,
                    menu: 'fa-solid fa-ellipsis-vertical'
                },
                {
                icon: 'fa-solid fa-tooth',
                    name: 'Pedro Perez',
                    motivo: 'Limpieza',
                    date : 'Junio 25, 2:00 Pm',
                    status: 2, 
                    menu: 'fa-solid fa-ellipsis-vertical'
                },
                {
                icon: 'fa-solid fa-tooth',
                    name: 'Juio Trevino',
                    motivo: 'Extracción',
                    date : 'Junio 28, 2:00 Pm',
                    status: 3,
                    menu: 'fa-solid fa-ellipsis-vertical'
                }
            ])
        }
    },
})
</script>
