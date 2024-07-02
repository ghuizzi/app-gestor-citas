<template>
    <div class="row full-width justify-center q-px-md">
       <div class="col-11 bg-glass shadow-2 rounded col-md-10 row">

        <div class="col-12 text-center text-dark ">
            <p class="text-h4 q-py-md">
                Lista de pacientes
            </p>
        </div>
        
        <div class="col-12 row q-pa-md ">

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