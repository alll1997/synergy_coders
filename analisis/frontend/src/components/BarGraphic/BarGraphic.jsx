import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import top_products from "../../utils/topProducts";

const data = Object.keys(top_products).map((product) => ({
	name: product,
	count: top_products[product],
}));

function BarGraphic() {
	return (
		<ResponsiveContainer
			width="100%"
			height={800}
		>
			<BarChart
				data={data}
				layout="vertical"
				margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
				barCategoryGap="20%"
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis type="number" />
				<YAxis
					type="category"
					dataKey="name"
					width={200}
					tick={{ fontSize: 12 }}
				/>
				<Tooltip />
				<Bar
					dataKey="count"
					fill="#8884d8"
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}

export default BarGraphic;
