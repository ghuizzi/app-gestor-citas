<template>
    <div class="row  justify-center q-px-md ">
       <div class="col-11 col-md-5 glass shadow-2 rounded  row q-pa-md ">

            <div class="col-12   q-pa-md flex justify-center items-center text-dark ">
                <div><q-icon size="20px" name="fa-solid fa-user-plus" /></div>
                <div class="text-h6 text-center ">
                    Agregar paciente
                </div>
            </div>
        
            <div class="col-12  row justify-center">

                <NewPatient/>

            </div>

       </div>


    </div>
</template>
<script lang="ts">
import NewPatient from 'src/components/forms/NewPatient.vue'
export default {
components:{
    NewPatient
},
    setup() {
        return {
        }
    }
}
</script>
<style >

</style>