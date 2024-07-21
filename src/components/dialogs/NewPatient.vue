<template>

    <q-dialog v-model="state" persistent>
      <q-card style="width: 100%;  overflow-x: hidden;" >
        <q-bar class="row bg-primary " >
            <div class="col-2">
            </div>
            <div class="col-8 text-center ">
                <p class="text-white" > {{ $props.id == 0 ? 'Agregar paciente' : 'Editar paciente' }}</p>
            </div>
            <div class="col-2 flex justify-end q-pr-sm">
                <q-btn class="text-white" dense flat icon="close" @click="close()" >
                    <q-tooltip>Close</q-tooltip>
                </q-btn>
            </div>
        </q-bar>

        <q-card-section style="width: 100%" class="q-pa-sm row justify-center" >

            <div class=" col-12 justify-center row" >
                <q-form class=" bg-glass-dark col-12 col-sm-6 col-md-10 q-pa-lg row ">

                    <div class="col-12 flex flex-center ">

                        <q-icon name="person" color="primary" size="120px" ></q-icon>

                    </div>

                    <div class="col-12 col-md-6 q-px-sm">
                        <div><p>Nombre*</p></div>
                        <q-input outlined dense rounded v-model="namePatient"   />
                    </div>

                    <div class="col-12 col-md-6 q-px-sm">
                        <div><p>Número de teléfono*</p></div>
                        <q-input rounded v-model="phonePatient" outlined dense  />
                    </div>
                    
                    <div class="col-12 q-px-sm ">
                        <div><p>Nota adicional</p></div>
                        <q-input type="textarea" v-model="description" outlined dense hint="Incluya información especial (alergias, preferecias, etc.)" />
                    </div>
                    
                    <div class="col-12 flex justify-end q-pt-md "> 
                        <q-btn v-if ="$props.id != 0" @click="updatePatient" class="bg-primary text-white " label="Editar"/>
                        <q-btn v-if ="$props.id == 0" @click="addNewPatient" class="bg-primary text-white " label="Guardar"/>
                    </div>
                </q-form>
            </div>

        </q-card-section>

      </q-card>
    </q-dialog>
    
</template>

<script  setup lang="ts">
import {ref} from 'vue'
import { computed, onMounted } from 'vue'
import {useDialogStore} from 'src/stores/DialogStore'
import { notEmpty } from 'src/helpers/form/rules'
import {API_URL} from 'src/config'
import axios from 'axios'
import {Notify} from 'quasar'

const props = defineProps({
    id: {type: Number, default: 0},
    data: Object
})

const namePatient = ref<string>('')
const phonePatient = ref<string>('')
const description = ref<string>('')

const emits = defineEmits(['reload'])

const dialogStore = useDialogStore()

const state = computed (() => dialogStore.getNewPatient)

const close = () => {
    dialogStore.ToggleNewPatient()
}

const addNewPatient = () => {
    const data = {
        name: namePatient.value,
        phone: phonePatient.value,
        description: description.value,

    }
    axios.post(API_URL+"patients", data).then((response)=>
    {
        Notify.create({
            type: 'positive',
            message: 'Paciente creado correctamente',
        })
        emits('reload')
    }).catch((err)=>{
        Notify.create({
            type: 'negative',
            message: err.response.data.message,
        })
    })
}
const updatePatient = () => {
        const data = { 
            name: namePatient.value,
           phone: phonePatient.value,
            description: description.value
        }

        axios.put(`${API_URL}patients/${props.id}`, data).then((response)=>{
            Notify.create({
                type: 'positive',
                message: 'Paciente actualizado correctamente',
                })
            emits('reload')
        }).catch((err) => {
        Notify.create({
            type: 'negative',
            message: err.response.data.message,
        })
        })
    }
onMounted(()=>{
    if(props.id != 0){
        namePatient.value = props.data.name,
        phonePatient.value = props.data.phone,
        description.value = props.data.description

    }
})


</script>
