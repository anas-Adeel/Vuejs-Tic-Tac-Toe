<template>
	<div class="gameStateMsg">
		<h3 v-if="state !== null">{{ msgTable[state] }}</h3>
	</div>
</template>


<script>
	export default {
		props :{
			state: String,
		},

		data(){
			return {
				msgTable: {X: 'Congrats! You Won', O: 'You Lost', tie: 'Its A Tie'}
			}
		}
	}
</script>

<style>
	.gameStateMsg{
		/*background-color: rgb(200, 200, 255);*/
		font-family: "Times New Roman";
		font-size: 30px;
		text-align: center;
		display: flex;
		width: 300px;
	}
</style>