<template>

    <q-dialog v-model="state" persistent>
      <q-card style="width: 100% ; overflow-x: hidden;" >
        <q-bar class="row bg-primary  " >
            <div class="col-2">
            </div>
            <div class="col-8 text-center  ">
                <p class="text-white"  > {{ $props.id == 0 ? 'Agregar tratamiento' : 'Editar tratamiento' }} </p>
            </div>
            <div class="col-2 flex justify-end q-pr-sm">
                <q-btn class="text-white" dense flat icon="close" @click="close()" >
                    <q-tooltip>Close</q-tooltip>
                </q-btn>
            </div>
        </q-bar>

        <q-card-section style="width: 100%" class="q-pa-sm row justify-center" >

            <div class="col-12 col-md-12 row justify-center" >
                <q-form style="align-items: flex-end" class=" col-12 col-sm-8  bg-glass-dark col-md-10 q-pa-lg row">
                    
                    <div class="col-12 col-md-6 q-px-sm">
                        <div>
                            <p>Nombre*</p>
                        </div>
                        <q-input outlined dense v-model="nameTreatments" :rules="[notEmpty]"  />
                    </div>

                    <div class="col-12 col-md-6 q-px-sm text-center">
                        <div>
                            <p>Duración*</p>
                        </div>
                        <div class="col-12 col-md-6 row  q-pt-md  ">
                            <div class="col-12 flex row justify-center"> 
                                <div class="col-6  flex row justify-center">
                                    <div class="text-center col-12">Horas</div>
                                        <q-input v-model="hours" type="number" min="0" max="23" />
                                    </div>
                                <div class="col-6 row flex justify-center">
                                    <div class="text-center col-12" >Minutos</div>
                                        <q-input v-model="minutes" type="number" min="0" max="59" />
                                    </div>
                                </div>
                        </div> 
                    </div>
                    
                    <div class="col-12">
                        <div >Descripción <span class="text-caption" >(opcional)</span></div>
                        <q-input outlined v-model="description" dense type="textarea" />
                    </div>

                    <div  v-if="$props.id==0" class="col-12 flex justify-end q-pt-md "> <q-btn @click="addNewTreatment" color="primary" dense label="Guardar"/></div>
                    <div  v-if="$props.id !=0" class="col-12 flex justify-end q-pt-md "> <q-btn @click="updateTreatment" color="primary" dense label="Editar"/></div>
                </q-form>
            </div> 

        </q-card-section>

      </q-card>
    </q-dialog>
    
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import {useDialogStore} from 'src/stores/DialogStore'
import { notEmpty } from 'src/helpers/form/rules'
import axios from 'axios'
import {API_URL} from 'src/config'
import {Notify} from 'quasar'

const props = defineProps({
    id: {type: Number, default: 0},
    data: Object
})

    const nameTreatments = ref('')
    const hours = ref(0)
    const minutes = ref(0)
    const description = ref('')
    
    const emits = defineEmits(['reload'])

    const dialogStore = useDialogStore()

    const state = computed( () => dialogStore.getNewTreatment )

    const close = () => {
        dialogStore.ToggleNewTreatment()
    }

    const addNewTreatment = () => {

        const data = {
            name: nameTreatments.value,
            hours: Number(hours.value),
            minutes: Number(minutes.value),
            description: description.value
        }

        axios.post(API_URL+"treatments", data).then((response)=>{
            // console.log(response.data)
            Notify.create({
                type: 'positive',
                message: 'Tratamiento agregado',
            })
            emits('reload')
        }).catch((err)=> {
            console.log(err)
            Notify.create({
                type: 'negative',
                message: err.response.data.message,
            })
        })
    }

    const updateTreatment = () => {
        const data = { 
            name: nameTreatments.value,
            hours: Number(hours.value),
            minutes: Number(minutes.value),
            description: description.value
        }

        axios.put(`${API_URL}treatments/${props.id}/update`, data).then((response)=>{
            Notify.create({
                type: 'positive',
                message: 'Tratamiento actualizado correctamente',
                })
            emits('reload')
        }).catch((err) => {
        Notify.create({
            type: 'negative',
            message: err.response.data.message,
        })
        })
    }

    onMounted( () => {
        if(props.id != 0 ){
            nameTreatments.value = props.data.name,
            hours.value = props.data.hours,
            minutes.value = props.data.minutes,
            description.value = props.data.description
        }
    } )

</script>
