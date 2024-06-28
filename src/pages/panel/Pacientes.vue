<template>
    <div class="row full-width justify-center q-px-md">
       <div class="col-11 bg-white shadow-2 rounded col-md-10 row">

        <div class="col-12 text-center ">
            <p class="text-h4 q-py-md">
                Lista de pacientes
            </p>
        </div>
        
        <div v-for="n in 6" :key="n" class="col-11 col-md-4 q-pa-sm row">

            <div class="col-12 border-simple  row">

                <div class="col-2 bg-blue text-center  q-pa-sm  ">
                    <q-icon name="person" color="white" size="40px" ></q-icon>
                </div>

                <div class="col-10 q-pa-sm ">
                    <p>John Doe</p>
                    <p>Teélefono: 0412-0000003</p>
                </div>

            </div>

        </div>

       </div>
    </div>
</template>
<script lang="ts">

export default {
components:{
},
    setup() {
        return {
        }
    }
}
</script>
<style >

</style>