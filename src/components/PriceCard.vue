<script setup lang="ts">
defineProps<{ compra: string; venta: string; nombre: string }>();
</script>

<template>
	<div class="bg-white border shadow rounded-2xl p-6 flex flex-col space-y-4">
		<div class="flex items-center space-x-2">
			<Icon name="lucide:dollar-sign" />
			<span class="font-bold text-lg">{{ nombre }}</span>
		</div>
		<span>Compra: {{ compra }}</span>
		<span>Venta: {{ venta }}</span>
	</div>
</template>
