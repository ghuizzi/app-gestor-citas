<template>
    <div class="row  justify-center q-px-md">
       <div class="col-11 glass shadow-2 rounded col-md-6 row q-pa-md" >

        <div class="col-12 q-pa-md flex justify-center items-center ">
            <div><q-icon size="20px" name="add" /></div>
            <div class="text-h6  ">
                Agregar tratamiento
            </div>
        </div>
        
        <div class="col-12 row justify-center">

            <NewTreatment/>

        </div>

       </div>


    </div>
</template>
<script lang="ts">
import NewTreatment from 'src/components/forms/NewTreatment.vue'
export default {
components:{
    NewTreatment
},
    setup() {
        return {
        }
    }
}
</script>
<style >

</style>