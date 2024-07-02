<template>
    <div class="fixed bg-grey-2 "  style="top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;" >
        <!-- <svg  class="svg_circle  " viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="20" cx="100" cy="200" fill="#220e62"  stroke-width="10"/>
        </svg>
        
        <svg class="svg_circle" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="100" cx="500" cy="348" fill="#220e62"  stroke-width="10"/>
        </svg>
        <svg class="svg_circle" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="60" cx="700" cy="500" fill="#220e62"  stroke-width="10"/>
        </svg>
        <svg  class="svg_circle  " viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="20" cx="700" cy="300" fill="#220e62"  stroke-width="10"/>
        </svg>
        
        <svg class="svg_circle" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="30" cx="700" cy="100" fill="#220e62"  stroke-width="10"/>
        </svg>
        <svg class="svg_circle" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="80"  fill="#f368e0"  stroke-width="10"/>
        </svg>
        <svg class="svg_circle" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="80"  fill="#220e62"  stroke-width="10"/>
        </svg>
        <svg class="svg_circle" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
                <circle r="80" cx="200" cy="500"  fill="#220e62"  stroke-width=""/>
        </svg> -->

    </div>
</template>
<script lang="ts"> 
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        return{
            optionCards : [
            
            {
                bg_color: '#f368e0', 
            },
            {
                bg_color: '#1dd1a1',
            },
            {
                bg_color: '#ff9f43',
            }
        ]
        }
    },
})
</script>
<style>
.circle{
    border-radius: 30% 70% 40% 60% / 30% 52% 48% 70% ;
}
</style>
