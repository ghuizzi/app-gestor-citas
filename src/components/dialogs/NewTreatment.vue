<template>

    <q-dialog v-model="state" persistent>
      <q-card style="width: 100%" >
        <q-bar class="row bg-primary  " >
            <div class="col-2">
            </div>
            <div class="col-8 text-center  ">
                <p class="text-white" >Agregar tratamiento</p>
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
                        <q-input outlined dense v-model="namePatient" :rules="[notEmpty]"  />
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
                        <q-input outlined dense type="textarea" />
                    </div>

                    <div class="col-12 flex justify-end q-pt-md "> <q-btn color="teal" dense label="guardar"/></div>
                    
                </q-form>
            </div> 

        </q-card-section>

      </q-card>
    </q-dialog>
    
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import {useDialogStore} from 'src/stores/DialogStore'
import { notEmpty } from 'src/helpers/form/rules'
export default defineComponent({
    setup() {

        const dialogStore = useDialogStore()

        const state = computed( () => dialogStore.getNewTreatment )

        const close = () => {
            dialogStore.ToggleNewTreatment()
        }

        return{
            state,
            close,
            hours: "",
            minutes: '', 
            namePatient:"",
            tratmenttime: "",
            modalInput: "",
            notEmpty,
        }
    },
})
</script>
