import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
	{ country: "Reino Unido", profit: 84.348215 },
	{ country: "Paises Bajos", profit: 2.966996 },
	{ country: "Irlanda", profit: 2.768925 },
	{ country: "Alemania", profit: 2.099755 },
	{ country: "Francia", profit: 1.907624 },
	{ country: "Australia", profit: 1.433079 },
	{ country: "Suiza", profit: 0.549306 },
];

const COLORS = [
	"#0088FE",
	"#00C49F",
	"#FFBB28",
	"#FF8042",
	"#FF6384",
	"#36A2EB",
	"#FFCE56",
];

const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
	const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{percent > 0.05 ? `${(percent * 100).toFixed(2)}%` : ""}
		</text>
	);
};

const PieChartGraph = () => (
	<ResponsiveContainer
		width="100%"
		height={400}
	>
		<PieChart>
			<Pie
				data={data}
				dataKey="profit"
				nameKey="country"
				cx="50%"
				cy="50%"
				outerRadius={150}
				fill="#8884d8"
				labelLine={false}
				label={renderCustomizedLabel}
			>
				{data.map((entry, index) => (
					<Cell
						key={`cell-${index}`}
						fill={COLORS[index % COLORS.length]}
					/>
				))}
			</Pie>
			<Tooltip />
		</PieChart>
	</ResponsiveContainer>
);

export { PieChartGraph };
