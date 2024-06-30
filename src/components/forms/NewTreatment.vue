<template>
    <div class="row col-12 flex justify-center ">
        <div class="col-12 row justify-center" >
            <div class=" col-12 col-sm-6 col-md-6 q-py-md">
                <div>Nombre*</div>
                <q-input outlined dense v-model="namePatient" :rules="[notEmpty]"  />
                
                <div>Duración*</div>
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
                <br>
                <div >Descripción <span class="text-caption" >(opcional)</span></div>
                <q-input outlined dense autogrow />
                <div class="col-12 flex justify-end q-pt-md "> <q-btn color="teal" dense label="guardar"/></div>
                
            </div>
        </div> 
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { notEmpty } from 'src/helpers/form/rules'
 
export default defineComponent({
    setup() {
        return{
            hours: "",
            minutes: '', 
           namePatient:"",
           tratmenttime: "",
           modalInput: "",
          
           notEmpty
          
        }
    },
   
})
</script>
