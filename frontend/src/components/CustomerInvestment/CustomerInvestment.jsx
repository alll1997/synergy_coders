import React from "react";
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";

const customerInvestment = {
	bins: [
		-1192.2000000000003, -706.5976666666669, -220.99533333333352,
		264.60699999999997, 750.2093333333332, 1235.8116666666665,
		1721.4140000000002, 2207.0163333333335, 2692.6186666666667, 3178.221,
		3663.8233333333333, 4149.425666666666, 4635.028, 5120.630333333334,
		5606.232666666667, 6091.835000000001, 6577.437333333333, 7063.0396666666675,
		7548.642, 8034.244333333334, 8519.846666666666, 9005.449, 9491.051333333333,
		9976.653666666667, 10462.256000000001, 10947.858333333334,
		11433.460666666668, 11919.063, 12404.665333333334, 12890.267666666667,
		13375.87,
	],
	counts: [
		9.607176008642265e-7, 1.4410764012963399e-6, 0.00046979090682260663,
		0.0006835505730148972, 0.00028341169225494685, 0.00017244880935512853,
		0.00011384503570241087, 7.781812567000236e-5, 5.956449125358206e-5,
		4.3712650839322314e-5, 3.170368082851951e-5, 1.8733993216852386e-5,
		1.8733993216852386e-5, 1.34500464120992e-5, 1.1528611210370699e-5,
		1.00875348090744e-5, 1.0567893609506474e-5, 4.8035880043211425e-6,
		4.803588004321125e-6, 3.8428704034569145e-6, 4.3232292038890124e-6,
		3.3625116030248e-6, 1.4410764012963373e-6, 4.3232292038890124e-6,
		1.9214352017284573e-6, 2.4017940021605624e-6, 1.4410764012963428e-6,
		2.8821528025926747e-6, 4.803588004321143e-7, 1.9214352017284496e-6,
	],
};

function CustomerInvestment() {
	const data = customerInvestment.bins.slice(0, -1).map((bin, index) => ({
		bin: bin.toFixed(0),
		count: customerInvestment.counts[index],
	}));

	return (
		<div className="w-full max-w-4xl mx-auto p-4">
			<div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
				<ResponsiveContainer
					width="100%"
					height="100%"
				>
					<BarChart
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis
							dataKey="bin"
							label={{
								value: "Dinero invertido (unidades monetarias)",
								position: "insideBottom",
								offset: -5,
							}}
							tickFormatter={(value) => `${parseFloat(value).toLocaleString()}`}
						/>
						<YAxis
							label={{
								value: "Frecuencia",
								angle: -90,
								position: "insideLeft",
							}}
							tickFormatter={(value) => value.toExponential(2)}
						/>
						<Tooltip
							formatter={(value, name, props) => [
								value.toExponential(4),
								"Frecuencia",
							]}
							labelFormatter={(label) =>
								`Inversión: ${parseFloat(label).toLocaleString()}`
							}
						/>
						<Bar
							dataKey="count"
							fill="#8884d8"
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export { CustomerInvestment };
