<template>

    <q-dialog v-model="state" persistent>
      <q-card style="width: 100%;  overflow-x: hidden;" >
        <div class="row bg-primary q-py-sm justify-between " >
            <div class="col-12 flex justify-end q-pr-sm">
                <q-btn class="text-white" dense flat icon="close" @click="close()" >
                    <q-tooltip>Close</q-tooltip>
                </q-btn>
            </div>
            <div class="col-12 text-center ">
                <div class="text-white text-center text-h5 text-bold" > {{ $props.id == 0 ? 'Agregar nuevo paciente' : 'Editar paciente' }}</div>
            </div>
            
        </div>

        <div style="width: 100%" class=" row justify-center" >

            <div class=" col-12 justify-center row" >
                <q-form class=" bg-glass-dark col-10 col-md-7  row q-py-md ">

                    

                    <div class="col-12 flex q-pb-sm">
                         <q-icon name="person" color="primary" size="sm" />
                        <div>Nombre*</div>
                       
                    </div>

                    <q-input outlined dense class="col-12" v-model="namePatient" :rules="[notEmpty]"   />

                    <div class="col-12 flex   q-pt-md q-pb-sm">
                        <q-icon name="phone" color="primary" size="sm" />
                        <div>Número de teléfono*</div>
                        
                    </div>
                    <q-input class="col-12"  v-model="phonePatient" outlined dense  />
                    
                    <div class="col-12 flex q-pt-md q-pb-sm">
                        <q-icon name="description" color="primary" size="sm" />
                        <div>Nota adicional</div>
                       
                    </div>
                    <q-input type="textarea" class="col-12"  v-model="description" outlined dense hint="Incluya información especial (alergias, preferecias, etc.)" />
                    
                    <div class="col-12 row justify-center q-pt-md "> 
                        <q-btn v-if ="$props.id != 0" @click="updatePatient" class="bg-primary text-white" label="Editar Paciente"/>
                        <q-btn v-if ="$props.id == 0" @click="addNewPatient" class="bg-primary text-white col-10 " label="Agregar Paciente"/>
                    </div>
                </q-form>
            </div>

        </div>

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
