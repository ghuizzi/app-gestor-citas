<template>
    <div class="row screen-height items-center full-width justify-center q-px-md">
       <div style="height: fit-content" class="col-11 bg-glass shadow-2 rounded col-md-11 row">
        
            <div class="col-12 row q-pa-md ">
                <TreatmentsTable />
            </div>

       </div>

    </div>
</template>
<script setup lang="ts">
import TreatmentsTable from "src/components/tables/treatmentsTable.vue"
</script>

<style >

</style>