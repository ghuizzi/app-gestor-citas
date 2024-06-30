<template>
    <div class="col-12 row flex justify-center">
    <div class="col-12 col-md-8 row flex justify-center q-mt-lg " >
        <div>Bienvenido</div>
        <div class="glass col-12 row flex justify-center q-pa-md" >
            <div ><q-avatar size="100px" class="bg-grey-2 cursor-pointer "><q-icon color="grey-7" name="add_a_photo" /></q-avatar></div>
            <div class="text-center col-12 text-weight-bolder text-h6" >Nombre</div>
            <div class="col-12 col-md-10 bg-glass-dark q-pa-md row " >
                <div class=" justify-center col-12" >
                    <div class="text-subtitle1" >Biografía</div>
                    <q-input  outlined type="textarea"  v-model="doctorBio" />
                </div>
                
                <div class="flex col-12 justify-between q-pt-md row" >
                    <div class="col-12 col-md-5 ">
                        <div class="text-subtitle1 text-bold q-pb-sm">Detalles personales</div>
                        <div>Nombre</div>
                        <q-input dense outlined v-model="doctorName" />
                        <br>
                        <div>Especialidad</div>
                        <q-input dense outlined v-model="doctorSpecialism" />
                        <br>
                        <div>Años de experiencia</div>
                        <q-input outlined type="number" v-model="doctorRecord" dense/>
                    </div>
                    <div class="col-12 col-md-5" >
                        <div class="text-subtitle1 text-bold q-pb-sm">Información de contacto</div>
                        <div>Instagram</div>
                        <q-input dense outlined v-model="socialMedia"  />
                        <br>
                        <div>Teléfono</div>
                        <q-input dense outlined v-model="phone" />
                        <br>
                        <div>Ubicación</div>
                        <q-input outlined  v-model="location" dense/>

                    </div>
                    <div class="col-12 flex justify-end q-pt-md"><q-btn label="Guardar" color="green-10" /></div>
                </div>
                

            </div>
            
        </div>
        
    </div>
        

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        return{
            doctorName: 'Dr. Juan Perez',
            doctorSpecialism: 'Odontología',
            doctorBio : 'Agregue una breve biografía de su experiencia médica y tratamientos.',
            doctorRecord: '10',
            socialMedia: '@druser',
            phone: '123456789',
            location: 'calle 1.'
        }
    },
})
</script>
<style>
.bg-glass{
    /* From https://css.glass */
background: rgba(255, 255, 255, 0.22);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.4px);
-webkit-backdrop-filter: blur(7.4px);
}
.bg-glass-dark{
    /* From https://css.glass */
background: rgba(255, 255, 255, 0.56);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(7.4px);
-webkit-backdrop-filter: blur(7.4px);
}
</style>