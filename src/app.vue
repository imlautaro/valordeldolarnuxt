<script setup>
const data = await useDolarSi();

useHead({
	title: 'Valor del Dólar Nuxt',
});
</script>

<template>
	<div>
		<div
			class="p-4 bg-primary-600 text-white flex items-center justify-center text-center shadow"
		>
			<span class="text-xl font-bold">Valor del Dólar Nuxt</span>
		</div>
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
