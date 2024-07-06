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
            <q-input outlined rounded dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
                <q-icon name="search" />
            </template>
            </q-input>

            <q-btn @click="addNewTreatment" icon="add" rounded size="sm" class=" q-mx-sm bg-primary text-white" label="Agregar" ></q-btn>
        </template>
      <template v-slot:body="props">
        <q-tr >
          <q-td key="ID" :props="props">
            {{ props.row.ID }}
          </q-td>
          <q-td key="nombre" :props="props">
            {{ props.row.nombre }}
          </q-td>
          <q-td key="phone" :props="props">
            {{ props.row.phone }}
          </q-td>
          <q-td key="options" :props="props">
            <q-btn @click="openDialog" size="sm" round class="bg-primary text-white " icon="info" ></q-btn>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <TreatmentDetail/>

    <NewTreatment/>

</template>

<script setup lang="ts">
import {ref} from 'vue'
import { useDialogStore } from "src/stores/DialogStore"
import NewTreatment from "../dialogs/NewTreatment.vue"
import TreatmentDetail from "../dialogs/TreatmentDetail.vue"
const dialogStore = useDialogStore()

const filter = ref('')

const columns = ref([
  { name: 'ID', align: 'center', label: 'ID', field: 'ID'},
  { name: 'nombre', align: 'center', label: 'Nombre', field: 'nombre'},
  { name: 'phone', align: 'center', label: 'Telélefono', field: 'phone'},
  { name: 'options', align: 'center', label: 'Opciones', field: 'options'},
])

const rows = [
  {
    ID: 1,
    nombre: 'John Doe',
    phone: '0414-0000000'
  },
  {
    ID: 2,
    nombre: 'John Doe',
    phone: '0414-0000000'
  },
  {
    ID: 3,
    nombre: 'John Doe',
    phone: '0414-0000000'
  },
  {
    ID: 4,
    nombre: 'John Doe',
    phone: '0414-0000000'
  },
  {
    ID: 5,
    nombre: 'John Doe',
    phone: '0414-0000000'
  },
]

const openDialog = () => {
    console.log('h')
    dialogStore.ToggleTreatmentDetail()
}

const addNewTreatment = () => {
    console.log('h')

    dialogStore.ToggleNewTreatment()
}

</script>
