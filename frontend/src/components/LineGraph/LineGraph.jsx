import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { products_bought, canceled_products } from "../../utils/products";

const data = Object.keys(products_bought).map((month) => ({
	month,
	bought: products_bought[month],
	canceled: canceled_products[month],
}));

function LineGraph() {
	return (
		<ResponsiveContainer
			width="100%"
			height={400}
		>
			<LineChart data={data}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="month" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="bought"
					stroke="#8884d8"
				/>
				<Line
					type="monotone"
					dataKey="canceled"
					stroke="#82ca9d"
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}

export default LineGraph;
