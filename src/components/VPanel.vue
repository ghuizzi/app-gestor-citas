<script setup lang="ts">

export default interface VPanelProps {
	headerBar?: boolean
}

withDefaults(
	defineProps<VPanelProps>(),
	{
		headerBar: true
	}
)
</script>

<template>
	<div class="border  rounded-borders q-pa-sm  " style="position: relative;">
		<div class="row" v-if="headerBar" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 3px;">
			<div class="bg-primary" style="height: 3px; width: calc(100% * (1 / 4));"></div>
			<div class="" style="height: 3px; width: calc(100% * (3 / 4));"></div>
		</div>
		<slot class="bg-red"></slot>
	</div>
</template>

