<template>
	<div class="tab-bar-item" @click="linkActive">
		<div v-if="isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon2"></slot>
		</div>
		<div :style="isColorActive">
			<slot name="item-text"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'item',
		props:{
			isColor:{
				type:String,
				default:'black'
			},
			link:String
		},
		data(){
			return {
			}
		},
		computed:{
			isColorActive(){
				return this.isActive ? {}:{color:this.isColor}
			},
			isActive(){
				return this.$route.path.indexOf(this.link) == -1
			}
		},
		methods:{
			linkActive(){
					if(this.$route.path !== this.link){
						this.$router.replace(this.link).catch(err=>err)
					}
			}
		}
	}
</script>

<style scoped>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
	}
	.tab-bar-item img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
    margin:4px 0;
	}
</style>
