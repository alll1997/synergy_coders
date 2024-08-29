import React from "react";

const Table = () => {
	const purchases = [
		"Reino Unido",
		"Alemania",
		"Francia",
		"Irlanda",
		"España",
		"Netherlands",
		"Belgium",
		"Switzerland",
		"Portugal",
		"Australia",
	];

	const cancellations = [
		"Reino Unido",
		"Alemania",
		"Irlanda",
		"Francia",
		"Estados Unidos",
		"Australia",
		"España",
		"Italia",
		"Bélgica",
		"Japón",
	];

	return (
		<table
			border="1"
			style={{ borderCollapse: "collapse", width: "100%" }}
			className="max-w-[900px] sm:min-w-[600px] w-full text-center border border-white"
		>
			<thead>
				<tr>
					<th className="text-white text-xl font-bold">Compras</th>
					<th className="text-white text-xl font-bold">Cancelaciones</th>
				</tr>
			</thead>
			<tbody>
				{purchases.map((purchase, index) => (
					<tr key={index}>
						<td className="text-white p-1">{purchase}</td>
						<td className="text-white">{cancellations[index] || ""}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export { Table };
