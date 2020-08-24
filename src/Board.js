export default class Board{
	constructor(){
		this.cells = [
		['', '', ''],
		['', '', ''],
		['', '', '']
		];
	}

	ableToDoMove(i, j, player){
		if (this.cells[j][i] === ''){
			this.cells[j][i] = player;
			return true;
		}
		return false;
	}

	doMove(x, y, player){
		if (this.cells[y][x] !== ''){
			return false;
		}

		this.cells[y][x] = player;
		return true;
	}

	reverseMove(x, y){
		this.cells[y][x] = '';
	}

	spaceFree(x, y){
		return this.cells[y][x] === '';
	}

	threeEqual(a, b, c){
		return (a === b && b === c && a !== '');
	}

	checkWinner(){
		for (let i = 0; i < 3; i++){
			if (this.threeEqual(this.cells[i][0], this.cells[i][1], this.cells[i][2])){
				return this.cells[i][0];
			}
		}

		for (let j = 0; j < 3; j++){
			if (this.threeEqual(this.cells[0][j], this.cells[1][j], this.cells[2][j])){
				return this.cells[0][j];
			}
		}

		if (this.threeEqual(this.cells[0][0], this.cells[1][1], this.cells[2][2])){
			return this.cells[0][0];
		}

		if (this.threeEqual(this.cells[0][2], this.cells[1][1], this.cells[2][0])){
			return this.cells[0][2];
		}

		for (const row of this.cells){
			for (const element of row){
				if (element === ''){
					return null;
				}
			}
		}
		return 'tie';
	}
}