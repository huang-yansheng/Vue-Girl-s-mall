<template>
	<div>
		<tab-bar>
			<item isColor="red" link="/home">
				<template #item-icon>
					<img src="~assets/img/tabbar/home1.svg" alt="">
				</template>
				<template #item-icon2>
					<img src="~assets/img/tabbar/home2.svg" alt="">
				</template>
				<template #item-text>
					<div>首页</div>
				</template>
			</item>
			<item isColor="red" link="/category">
				<template #item-icon>
					<img src="~assets/img/tabbar/class1.svg" alt="">
				</template>
				<template #item-icon2>
					<img src="~assets/img/tabbar/class2.svg" alt="">
				</template>
				<template #item-text>
					<div>分类</div>
				</template>
			</item>
			<item isColor="red" link="/cart">
				<template #item-icon>
					<img src="~assets/img/tabbar/shopping1.svg" alt="">
				</template>
				<template #item-icon2>
					<img src="~assets/img/tabbar/shopping2.svg" alt="">
				</template>
				<template #item-text>
					<div>购物车</div>
				</template>
			</item>
			<item isColor="red" link="/profile">
				<template #item-icon>
					<img src="~assets/img/tabbar/my1.svg" alt="">
				</template>
				<template #item-icon2>
					<img src="~assets/img/tabbar/my2.svg" alt="">
				</template>
				<template #item-text>
					<div>我的</div>
				</template>
			</item>
		</tab-bar>
	</div>
</template>

<script>
	import tabBar from 'components/common/tabbar/Tabbar.vue'
	import item from 'components/common/tabbar/TabbarItem.vue'
	export default {
		name:'maintabbar',
		components:{
			tabBar,
			item
		}
	}
</script>

<style>
</style>
