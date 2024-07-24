<template>
    <q-table
      flat bordered
      title="Pacientes"
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

            <q-btn @click="addNewPatient" icon="add" size="" class=" q-mx-sm bg-primary text-white" label="Agregar" ></q-btn>
        </template>
      <template v-slot:body="props">
        <q-tr >
          
          <q-td key="nombre" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="phone" :props="props">
            {{ props.row.phone }}
          </q-td>
          <q-td key="options" :props="props">
            
            <q-btn @click="detailPatient(props.row)"  round class=" text-primary text-bold " unelevated icon="info" ></q-btn>
            <q-btn icon="edit"size="sm" @click="updatePatient(props.row)"  unelevated  round class=" text-primary  " />  
            <q-btn icon="delete" size="xs" @click="confirm(props.row)"  unelevated  round class=" text-red-5" />  
          
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <PatientDetail :id="currentId" :key="componentKey" :data="detail" @reload="recived" />

    <NewPatient :key="componentKey" :data="updateData" :id="currentId" @reload="recived" />

</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue'
import axios from 'axios'
import {Notify, useQuasar} from 'quasar'
import { useDialogStore } from "src/stores/DialogStore"
import NewPatient from "../dialogs/NewPatient.vue"
import PatientDetail from "../dialogs/PatientDetail.vue"
import { API_URL} from 'src/config'
import { notEmpty } from 'src/helpers/form/rules'
const data = ref([])

const componentKey = ref()

const updateData = ref({})

const detail = ref({})

const $q=useQuasar()
const currentId = ref(0)

const recived = () => {
  dialogStore.ToggleNewPatient()
  getPatients()
}
const currentPatient = ref({
  name: '',
  phone: '',
  description: '',
})


const dialogStore = useDialogStore()



const filter = ref('')

const columns = [
  
  { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre'},
  { name: 'phone', align: 'center', label: 'Telélefono', field: 'phone'},
  { name: 'options', align: 'center', label: 'Opciones', field: 'options'},
]

const rows = data

const getPatients = () => {
 axios.get(`${API_URL}patients`).then((Response) => {
  data.value = Response.data
 }).catch((err)=> console.log(err))
}

const openDialog = () => {
    dialogStore.TogglePatientDetail()
}

const addNewPatient = () => {
    componentKey.value = componentKey.value + 1
    currentId.value = 0
    
    dialogStore.ToggleNewPatient()
}
const deletePatient = (id : number) => {
  axios.delete(`${API_URL}patients/${id}`).then( (Response) => {
    getPatients()
    Notify.create({
      type: 'negative',
      message: 'Paciente eliminado',
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
        title: 'Eliminar Paciente',
        message: `Desea eliminar ${data.name}`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        deletePatient(data.id)
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
function updatePatient (data: any){
  currentId.value = data.id
  updateData.value = data
  currentPatient.value = data 
  componentKey.value = componentKey.value + 1
  dialogStore.ToggleNewPatient()

}

function detailPatient (data:any){
  currentId.value = data.id
  detail.value = data
  componentKey.value = componentKey.value + 1
  dialogStore.TogglePatientDetail()
}

onMounted( () => getPatients())

</script>
