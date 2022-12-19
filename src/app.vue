<script setup>
const data = await useDolarSi();
</script>

<template>
	<div>
		<div class="container max-w-sm py-12 space-y-6 mx-auto px-4">
			<PriceCard
				v-for="item in data"
				:nombre="item.nombre"
				:compra="item.compra"
				:venta="item.venta"
			/>
		</div>
	</div>
</template>
