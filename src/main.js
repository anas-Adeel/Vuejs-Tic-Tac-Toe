import Vue from 'vue'
import App from './App.vue'
import TicTacToe from './TicTacToe';
import Cell from './Cell';
import Board from './Board';
import Winner from './Winner';

Vue.component('board', Board)
Vue.component('tic-tac-toe', TicTacToe);
Vue.component('cell', Cell);
Vue.component('winner', Winner);

new Vue({
  el: '#app',
  render: h => h(App)
});
