<template>
	<div>
		<div class="showBox" v-for="(i,$index) in 20" :style="{background:index==$index?'red':''}">
			{{i}}
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				index:0
			}
		},
		created() {
			setInterval(()=>{
				this.index++;
				if(this.index>=20){
					this.index=0;
				}
				console.log(this.index)
			},500)
		}
	}
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.showBox{
		width: 100%;
		line-height: 50px;
		font-size: 30px;
		background: #019875;
		color: #FFFFFF;
		text-align: center;
		border-bottom: 1px solid #333;
	}
</style>
