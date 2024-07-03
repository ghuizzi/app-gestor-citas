<template>

    <q-dialog v-model="state" persistent>
      <q-card style="width: 100%" >
        <q-bar class="row bg-primary " >
            <div class="col-2">
            </div>
            <div class="col-8 text-center ">
                <p class="text-white" >Agregar paciente</p>
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
                        <q-input outlined dense rounded v-model="namePatient" :rules="[notEmpty]"  />
                    </div>

                    <div class="col-12 col-md-6 q-px-sm">
                        <div><p>Número de teléfono*</p></div>
                        <q-input rounded v-model="phonePatient" outlined dense  />
                    </div>
                    
                    <div class="col-12 q-px-sm ">
                        <div><p>Nota adicional</p></div>
                        <q-input type="textarea" v-model="especilaNote" outlined dense hint="Incluya información especial (alergias, preferecias, etc.)" />
                    </div>
                    
                    <div class="col-12 flex justify-end q-pt-md "> 
                        <q-btn @click="close()" class="bg-primary text-white " label="guardar"/>
                    </div>
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

        const state = computed( () => dialogStore.getNewPatient )

        const close = () => {
            dialogStore.ToggleNewPatient()
        }

        return{
            state,
            close,
            namePatient: '',
            especialNote: '',
            phonePatient: '',
            notEmpty,
        }
    },
})
</script>
