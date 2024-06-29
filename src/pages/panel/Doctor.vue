<template>
    <div class="row justify-center q-px-md">
        <div class="col-12 col-md-11 row q-py-md items-stretch ">

            <div class="col-12 col-md-6 row items-stretch">
                <div class="col-12 text-center q-py-sm ">
                    <p class="text-h6" >Calendario de citas</p>
                </div>
                <q-date  v-model="date" minimal locale="es-ES" type='datetime-local' :first-day-of-week="1" style="width: 100%"  >

                </q-date>
            </div>
            <div class="col-12 col-md-6 q-pl-md ">
                <v-panel>
                    <div class="flex row justify-between items-center q-pb-md " >
                        <div class="col-12 text-weight-bolder text-grey-7 text-subtitle1" >Próximas citas</div>
                        <div class="col-md-9 flex row ">
                            <div class="q-pr-md col-6 "  >
                               <q-input placeholder="Buscar ..." outlined rounded v-model="search"  type="search" dense>
                                    <template v-slot:append>
                                    <q-icon name="search" />
                                    </template>
                                </q-input> 
                                 
                            </div>
                           <div class="col-6">
                           <q-input dense rounded outlined v-model="date" type="date"  />
                           </div>
                            
                        </div>
                        
                    </div>
                    
                    <div class="row " >
                        <CardsAppoiments/>
                    </div>
                </v-panel>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import MenuCards from 'src/components/cards/MenuCards.vue';
import CardsAppoiments from 'src/components/cards/CardsAppoiments.vue';

export default {
components:{
    MenuCards,
    CardsAppoiments
},
    setup() {
        return {
        }
    }
}
</script>
<style >
.border-radius{
    border: 1px solid  lightgrey;
    border-radius: 5px;
}
</style>