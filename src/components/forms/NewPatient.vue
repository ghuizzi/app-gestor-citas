<template>
    <div class="row col-12 col-md-11 flex justify-center ">
        
        <div class=" col-12 justify-center" >
            <q-form class=" bg-glass-dark col-12 col-sm-6 col-md-6 q-pa-lg">
                <div>Nombre*</div>
                <q-input outlined dense rounded v-model="namePatient" :rules="[notEmpty]"  />
                <div>Número de teléfono*</div>
                <q-input rounded v-model="phonePatient" outlined dense  />
                <br>
                <div>Nota adicional</div>
                <q-input autogrow rounded v-model="especilaNote" outlined dense l hint="Incluya información especial (alergias, preferecias, etc.)" />
                <br>
                <div class="col-12 flex justify-end q-pt-md "> <q-btn color="dark" dense label="guardar"/></div>
            </q-form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { notEmpty } from 'src/helpers/form/rules'
export default defineComponent({
    setup() {
        return{
            namePatient: '',
            especialNote: '',
            phonePatient: '',
            notEmpty,
        }  
    },
})

</script>
