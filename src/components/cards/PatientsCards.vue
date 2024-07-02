<template>
    <div v-for="n in 12" :key="n" class="col-11 col-md-4 q-pa-sm row">

            <div class="col-12 bg-white border-simple items-center row">

                <div class="col-2 bg-blue text-center border-radius-left q-pa-sm  ">
                    <q-icon name="person" color="white" size="40px" ></q-icon>
                </div>

                <div class="col-8 q-pa-sm ">
                    <p>John Doe</p>
                    <p>Teléfono: 0412-0000003</p>
                </div>

                <div class="col-2 text-center ">
                    <q-btn @click="openDialog()" class="bg-blue text-white  " size="sm" icon="info" round >
                        <q-tooltip class="bg-green" :offset="[10, 10]">
                            Detalles del paciente
                        </q-tooltip>
                    </q-btn>
                </div>

            </div>

    </div>

    <PatientDetail />

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PatientDetail from 'src/components/dialogs/PatientDetail.vue'
import { useDialogStore } from 'src/stores/DialogStore'

export default defineComponent({
    components:{
        PatientDetail
    },
    setup() {

        const dialogStore = useDialogStore()

        const openDialog = () => {

            dialogStore.TogglePatientDetail()

        }

        return {
            openDialog
        }
    }
})
</script>
