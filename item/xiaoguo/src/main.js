import Vue from 'vue';
import app from './app.vue';
require('./index.html');
// require('./index.css');
new Vue({
	el:'#box',
	components:{
		app
	}
})