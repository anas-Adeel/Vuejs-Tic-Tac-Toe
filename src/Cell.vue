<template>
	<div @click="$emit('click')" class="cell"> 
		<span v-if="value === 'X'" class="X">{{ value }}</span>
		<span v-else class="O">{{ value }}</span>
	</div>
</template>

<script>
	export default {
		props: {
			value: String,
		}
	}
</script>

<style>
	.cell {
		background-color: rgb(200, 200, 255);
		width: 150px;
		height: 150px;
		border: 2px solid rgb(75, 75, 75);
		font-size: 100px;
		font-family: "Arial";

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.X{
		color: rgb(255, 0, 0);
	}

	.O{
		color: rgb(0, 200, 0);
	}
</style>