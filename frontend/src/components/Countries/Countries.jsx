import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Cell,
} from "recharts";
import Flag from "react-flagkit";

const data = [
	{ country: "Reino Unido", profit: 84.348215, code: "GB" },
	{ country: "Paises Bajos", profit: 2.966996, code: "NL" },
	{ country: "Irlanda", profit: 2.768925, code: "IE" },
	{ country: "Alemani", profit: 2.099755, code: "DE" },
	{ country: "Francia", profit: 1.907624, code: "FR" },
	{ country: "Australia", profit: 1.433079, code: "AU" },
	{ country: "Suiza", profit: 0.549306, code: "CH" },
];

const CustomYAxisTick = ({ x, y, payload }) => {
	const { code } = data.find((item) => item.country === payload.value);
	return (
		<g transform={`translate(${x},${y})`}>
			<foreignObject
				x={-50}
				y={-10}
				width={100}
				height={30}
			>
				<div style={{ display: "flex", alignItems: "center" }}>
					<Flag
						country={code}
						size={24}
					/>
				</div>
			</foreignObject>
		</g>
	);
};

const BarChartWithFlags = () => (
	<ResponsiveContainer
		width="100%"
		height={400}
	>
		<BarChart
			layout="vertical"
			data={data}
			margin={{ top: 20, right: 0, left: 0, bottom: 20 }}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis
				type="number"
				tick={{ fill: "white" }}
			/>
			<YAxis
				type="category"
				dataKey="country"
				tick={<CustomYAxisTick />}
				width={150}
			/>
			<Tooltip />
			<Bar
				dataKey="profit"
				fill="#8884d8"
			>
				{data.map((entry, index) => (
					<Cell
						key={`cell-${index}`}
						fill="#82ca9d"
					/>
				))}
			</Bar>
		</BarChart>
	</ResponsiveContainer>
);

export { BarChartWithFlags };
