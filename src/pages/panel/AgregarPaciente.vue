<template>
    <div class="row full-width justify-center q-px-md">
       <div class="col-11 bg-white shadow-2 rounded col-md-10 row">

        <div class="col-12 text-center ">
            <p class="text-h4 q-py-md">
                Agregar paciente
            </p>
        </div>
        
        <div class="col-12 row justify-center">

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