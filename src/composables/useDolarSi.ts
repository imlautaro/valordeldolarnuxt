export default async () => {
	const { data } = await useFetch(
		'https://www.dolarsi.com/api/api.php?type=valoresprincipales'
	);

	const wantedValues = ['Dolar Oficial', 'Dolar Blue', 'Dolar turista'];

	const formattedData = computed(() => {
		// @ts-ignore
		return (
			// @ts-ignore
			data.value
				// @ts-ignore
				.map(item => item.casa)
				// @ts-ignore
				.filter(item => wantedValues.includes(item.nombre))
		);
	});

	return formattedData;
};
