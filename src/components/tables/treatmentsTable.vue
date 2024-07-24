<template>
    <q-table
      flat bordered
      title="Tratamientos"
      :rows="rows"
      :columns="columns"
      row-key="name"
      class="col-12"
    >
        <template v-slot:top-right>
            <q-input outlined  dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
                <q-icon name="search" />
            </template>
            </q-input>

            <q-btn @click="addNewTreatment" icon="add"  class=" q-mx-sm bg-primary text-white" label="Agregar" ></q-btn>
        </template>
      <template v-slot:body="props">
        <q-tr >
          <!-- <q-td key="ID" :props="props">
            {{ props.row.ID }}
          </q-td> -->
          <q-td key="nombre" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="time" :props="props">
            {{ props.row.hours }} : {{ props.row.minutes }}
          </q-td>
          <q-td key="description" :props="props">
            {{ props.row.description }}
          </q-td>
          <q-td key="options" :props="props">
            
            <!-- <q-btn @click="openDialog" size="sm" round class="bg-primary text-white " icon="info" ></q-btn> -->
            <q-btn icon="edit" size="sm" @click="updateTreatment(props.row)"  unelevated  round class=" text-primary  " />  
            <q-btn icon="delete" size="xs" @click="confirm(props.row)"  unelevated  round class=" bg-primary text-white" />  
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <TreatmentDetail/>

    <NewTreatment :key="componentKey" :data="updateData" :id="currentId" @reload="recived" />

</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import { useDialogStore } from "src/stores/DialogStore"
import { Notify, useQuasar } from 'quasar'
import NewTreatment from "../dialogs/NewTreatment.vue"
import TreatmentDetail from "../dialogs/TreatmentDetail.vue"
import {API_URL} from 'src/config' 
import axios from 'axios'

const data = ref([])

const componentKey = ref(0)

const updateData = ref({})

const $q=useQuasar()
const currentId = ref(0)
const recived = () => {
  dialogStore.ToggleNewTreatment()
  getTretaments()
}

const dialogStore = useDialogStore()

const filter = ref('')

const columns = ref([
  // { name: 'ID', align: 'center', label: 'ID', field: 'ID'},
  { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre'},
  { name: 'time', align: 'center', label: 'Duración', field: 'time'},
  { name: 'description', align: 'center', label: 'Descripción', field: 'description'},
  { name: 'options', align: 'center', label: 'Opciones', field: 'options'},
])

const rows = data

const openDialog = () => {
    dialogStore.ToggleTreatmentDetail()
}

const addNewTreatment = () => {
  componentKey.value = componentKey.value + 1
  currentId.value = 0
  updateData.value = {}
  dialogStore.ToggleNewTreatment()
}

const getTretaments = () => {
    axios.get(`${API_URL}treatments`).then( (Response) => {
        // console.log(Response.data)
        data.value = Response.data
    } ).catch( (err) => console.log(err) )
}

const deleteTreatments = (id : number) => {
  axios.delete(`${API_URL}treatments/${id}`).then( (Response) => {
    getTretaments()
    Notify.create({
      type: 'negative',
      message: 'Tratamiento eliminado',
    })
}).catch( (err) => {
  console.log(err)
  Notify.create({
      type: 'negative',
      message: 'error',
    })
} )
}

function confirm (data: any) {
      $q.dialog({
        title: 'Eliminar tratamiento',
        message: `Desea eliminar ${data.name}`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        deleteTreatments(data.id)
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
function updateTreatment (data: any){
  currentId.value = data.id
  updateData.value = data
  componentKey.value = componentKey.value + 1
  dialogStore.ToggleNewTreatment()

}

onMounted( () => getTretaments() )

</script>
