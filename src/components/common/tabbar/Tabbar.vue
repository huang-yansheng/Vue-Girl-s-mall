<template>
	<div id="tab-bar">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:"tabbar"
	}
</script>

<style>
	#tab-bar{
		display: flex;
		position: fixed;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: #f6f6f6;
		box-shadow: 0 -1px 0 0 rgba(100,100,100,0.2);
	}
</style>
