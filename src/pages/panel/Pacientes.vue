<template>
    <div class="row full-width justify-center q-px-md">
       <div class="col-11 bg-white shadow-2 rounded col-md-10 row">

        <div class="col-12 text-center ">
            <p class="text-h4 q-py-md">
                Lista de pacientes
            </p>
        </div>
        
        <div class="col-12 row ">

            <PatientsCards/>

        </div>

       </div>


    </div>
</template>
<script lang="ts">
import PatientsCards from 'src/components/cards/PatientsCards.vue'
export default {
components:{
    PatientsCards
},
    setup() {
        return {
        }
    }
}
</script>
<style >

</style>