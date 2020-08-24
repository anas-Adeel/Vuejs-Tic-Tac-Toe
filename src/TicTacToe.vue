<template>
	<div class="tictactoe-board">
		<h1 class="header">Tic Tac Toe</h1>
		<div v-for="(n, i) in 3">
			<div v-for="(n, j) in 3">
				<cell @click="performMove(i, j)" :value="board.cells[j][i]"></cell>
			</div>
		</div>
		<div>
			<winner :state="gameState">{{ gameState }}</winner>
		</div>
	</div>
</template>


<script>
	import Board from './Board';

	export default {
		data() {
			return{
				board: new Board(),
				heuristicVal: {X: -10, tie: 0, O: 10},
				gameState: null
			}
		},

		methods: {
			performMove(i, j){
				if (!this.gameOver()){
					if (this.board.cells[j][i] === ''){
						this.board.cells[j][i] = 'X';
						let move = this.bestMove(this.board);
						this.$forceUpdate();
					}
				}
				this.gameState = this.board.checkWinner();
			},

			gameOver(){
				return this.board.checkWinner() !== null;
			},

			bestMove(board){
				if (this.gameOver()){
					return;
				}

				let bestVal = -Math.pow(10, 1000);
				let move = null;
				for (let i = 0; i < 3; i++){
					for (let j = 0; j < 3; j++){
						if (board.ableToDoMove(i, j, 'O')){
							let score = this.minimax(board, 10, false);
							board.reverseMove(i, j);
							if (score > bestVal){
								bestVal = score;
								move = [i, j];
							}
						}
					}
				}

				let i = move[0];
				let j = move[1];
				board.cells[j][i] = 'O';
				return;
			},

			minimax(board, depth, maximizingPlayer){
				const state = board.checkWinner();
				if (state !== null){
					return this.heuristicVal[state];
				}

				if (maximizingPlayer){
					let bestVal = -Math.pow(10, 1000);
					for (let i = 0; i < 3; i++){
						for (let j = 0; j < 3; j++){
							if (board.ableToDoMove(i, j, 'O')){
								let value = this.minimax(board, depth - 1, false);
								board.reverseMove(i, j);
								if (value > bestVal){
									bestVal = value;
								}
							}
						}
					}
					return bestVal;
				}else{ //minimizing player
					let bestVal = Math.pow(10, 1000);
					for (let i = 0; i < 3; i++){
						for (let j = 0; j < 3; j++){
							if (board.ableToDoMove(i, j, 'X')){
								let value = this.minimax(board, depth - 1, true);
								board.reverseMove(i, j);
								if (value < bestVal){
									bestVal = value;
								}
							}
						}
					}
					return bestVal;
				}
			}
		}
	}
</script>

<style>
	.header{
		text-align: center;
		width: 100%;
	}

	.gameStateMsg{
		display: flex;
		width: 100%;
		font-size: 42px;
		text-align: center;
		font-family: "Arial";
	}
	.tictactoe-board{
		text-align: center;
		align-items: center;
		display: flex;
		flex-wrap: wrap;

		width: 500px;
		height: 500px;
	}
</style>