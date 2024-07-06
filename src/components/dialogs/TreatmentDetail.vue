<template>

    <q-dialog v-model="state" persistent>
      <q-card style="width: 100%" >
        <q-bar class="row bg-primary " >
            <div class="col-2">

            </div>
            <div class="col-8 text-center ">
                <p class="text-white" >Información del tratamiento</p>
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
                        John Doe
                    </p>
                </div>

                <div class="col-12 flex items-center q-my-sm ">
                    <p class="text-h6">
                        Teléfono:
                    </p>
                    <p class="q-pl-sm" >
                        0412-0000000
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
                    Nota: <span class="text-body1" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci in, delectus sint officia tempore consectetur maxime ipsum aspernatur veritatis.</span>
                </p>
            </div>

        </q-card-section>

       
      </q-card>
    </q-dialog>
    
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import {useDialogStore} from 'src/stores/DialogStore'
export default defineComponent({
    setup() {

        const dialogStore = useDialogStore()

        const state = computed( () => dialogStore.getTreatmentDeatil )

        const close = () => {
            dialogStore.ToggleTreatmentDetail()
        }

        return{
            state,
            close
        }
    },
})
</script>
