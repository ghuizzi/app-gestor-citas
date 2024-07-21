<template>

    <q-dialog v-model="state" persistent>
      <q-card style="width: 100%; overflow-x: hidden;"  >
        <q-bar class="row bg-primary " >
            <div class="col-2">

            </div>
            <div class="col-8 text-center ">
                <p class="text-white" >Información del paciente</p>
            </div>
            <div class="col-2 flex justify-end q-pr-sm">
                <q-btn class="text-white" dense flat icon="close" @click="close()" >
                    <q-tooltip>Close</q-tooltip>
                </q-btn>
            </div>
        </q-bar>

        <q-card-section style="width: 100%" class="q-pa-sm row justify-center" >

            <div class="col-12 col-md-6 q-pa-lg flex flex-center ">
                <q-icon name="person" color="primary" size="120px" > </q-icon>
            </div>

            <div class="col-12 col-md-6 row ">

                <div class="col-12 flex items-center q-my-sm ">
                    <p class="text-h6">
                        Nombre:
                    </p>
                    <p class="q-pl-sm" >
                        {{ patient.name }}
                    </p>
                </div>

                <div class="col-12 flex items-center q-my-sm ">
                    <p class="text-h6">
                        Teléfono:
                    </p>
                    <p class="q-pl-sm" >
                        {{ patient.phone }}
                    </p>
                </div>

                <div class="col-12 flex items-center q-my-sm ">
                    <p class="text-h6">
                        Próxima cita:
                    </p>
                    <p class="q-pl-sm" >
                        31-07-2024
                    </p>
                </div>

            </div>

            <div class="col-md-10">
                <p class="text-h6">
                    Nota: <span class="text-body1" > {{patient.description }}</span>
                </p>
            </div>

        </q-card-section>

       
      </q-card>
    </q-dialog>
    
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { computed, onMounted } from 'vue'
import {useDialogStore} from 'src/stores/DialogStore'
import axios from 'axios'
import {API_URL} from 'src/config'

const props = defineProps({
   id: {type: Number, required: true},
   data: Object
})

const data = ref({})

const namePatient = ref<string>('')
const phonePatient = ref<string>('')
const description = ref<string>('')
    const patient = ref<{ name: string, phone: string, description: string }>({})
const emits = defineEmits(['reload'])



        const dialogStore = useDialogStore()

        const state = computed( () => dialogStore.getPatientDetail )

        const close = () => {
            dialogStore.TogglePatientDetail()
        }
        const getPatientDetail = () => {
            axios.get(`${API_URL}patients/${props.id}`).then((response) => {
                patient.value = response.data
                namePatient.value = patient.value.name
                phonePatient.value = patient.value.phone
                description.value = patient.value.description
            }).catch((err) => console.log(err))
            }

onMounted(()=>{
   getPatientDetail()
})
        

</script>
