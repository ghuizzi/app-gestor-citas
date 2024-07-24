<template>

    <q-dialog v-model="state" persistent>
      <q-card style="width: 100% ; overflow-x: hidden;" >
        <div class="row   " >
            <div class="col-12 flex justify-end q-pa-sm">
                <q-btn  dense flat icon="close" @click="close()" >
                    <q-tooltip>Close</q-tooltip>
                </q-btn>
            </div>
            <div class="col-8 text-center  ">
                <div class="text-h5 text-bold "  > {{ $props.id == 0 ? 'Agregar Tratamiento' : 'Editar Tratamiento' }} </div>
            </div>
            
        </div>

        <div style="width: 100%" class="q-pa-sm row justify-center" >

            <div class="col-12 col-md-12 row justify-center items-center" >
                <q-form style="align-items: flex-end" class=" col-12 col-sm-8  bg-glass-dark col-md-10  row q-py-md ">
                    <div class="col-12 row items-center  " >
                        <div class="col-12 row col-md-6  items-center q-px-sm q-py-sm">
                            <div class="col-2">
                                <q-icon size="md" color="primary" name="medical_services" />
                            </div>
                            <div class="col-10 no-padding ">
                                <q-input label="Tratamiento" placeholder="Nombre" class="no-padding"  outlined dense v-model="nameTreatments" :rules="[notEmpty]"  />
                            </div>
                            
                        </div>

                    <div class="col-12 col-md-6 row q-px-sm items-center q-py-sm ">
                        <div class="col-2 row ">
                            <q-icon color="primary" size="md" name="schedule" />

                        </div>
                        <div class="col-10 row justify-between  ">
                            
                                <div class="col-5 ">
                                    
                                        <q-input v-model="hours" outlined dense placeholder="Hrs"  type="number" min="0" max="23" />
                                    </div>
                                    <div class="row items-center" >
                                        -
                                    </div>
                                <div class="col-5  ">
                                 
                                        <q-input v-model="minutes" outlined dense placeholder="Min" type="number" min="0" max="59" />
                                    </div>
                                </div>
                        
                    </div>
                    </div>
                    
                   
                    
                    <div class="col-12 row q-pt-md q-px-sm ">
                        <div class="col-1 "><q-icon size="md" color="primary" name="info"/></div>
                        <div class="col-11">
                            <q-input outlined label="Descripción" v-model="description" dense type="textarea" />
                        </div>
                       
                    </div>

                    <div  v-if="$props.id==0" class="col-12 row justify-center q-pt-md "> <q-btn @click="addNewTreatment" class="col-8" color="primary" dense label="Agregar Tratamiento"/></div>
                    <div  v-if="$props.id !=0" class="col-12 flex justify-end q-pt-md "> <q-btn @click="updateTreatment" color="primary" dense label="Editar"/></div>
                </q-form>
            </div> 

        </div>

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
    const hours = ref()
    const minutes = ref()
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
