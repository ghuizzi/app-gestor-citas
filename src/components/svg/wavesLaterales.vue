<template>
    <div class="">

        <svg style="position: fixed;bottom:-20vh;z-index:-2" width="100%" height="100%" viewBox="0 0 1000 1000 " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shape-rendering="auto" fill="#ffffff">
            <defs>
            <path id="wavepath" d="M 0 2000 0 500 Q 150 375 300 500 t 300 0 300 0 300 0 300 0 300 0  v1000 z" />
            <path id="motionpath" d="M -600 0 0 0" /> 
            </defs>
            <g >
            <use xlink:href="#wavepath" y="115" fill="#3157a2">
            <animateMotion
                dur="10.0s"
                repeatCount="indefinite">
                <mpath xlink:href="#motionpath" />
            </animateMotion>
            </use>
            </g>
        </svg>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return{

        }
    },
})
</script>
