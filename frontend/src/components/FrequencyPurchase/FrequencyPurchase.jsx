// eslint-disable-next-line react/no-deprecated
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

const frequencyPurchases = {
	bins: [
		0.0, 0.8, 1.6, 2.4000000000000004, 3.2, 4.0, 4.800000000000001,
		5.6000000000000005, 6.4, 7.2, 8.0, 8.8, 9.600000000000001, 10.4,
		11.200000000000001, 12.0, 12.8, 13.600000000000001, 14.4,
		15.200000000000001, 16.0, 16.8, 17.6, 18.400000000000002,
		19.200000000000003, 20.0, 20.8, 21.6, 22.400000000000002,
		23.200000000000003, 24.0,
	],
	counts: [
		0.09245216985534298, 0.4459286047596827, 0.2368175454969668,
		0.14028231451236586, 0.0, 0.09886840877274838, 0.06328744750349978,
		0.048705086327578175, 0.02712319178721419, 0.0, 0.01895706952869807,
		0.016915538964069044, 0.013124125058329463, 0.009916005599626684, 0.0,
		0.007582827811479228, 0.006707886140923933, 0.004374708352776487,
		0.0034997666822211824, 0.0, 0.004374708352776477, 0.002333177788147455,
		0.0011665888940737275, 0.0017498833411105912, 0.0, 0.0014582361175921592,
		0.002041530564629023, 0.0008749416705552956, 0.0008749416705552956,
		0.0005832944470368663,
	],
};

function FrequencyPurchases() {
	const data = frequencyPurchases.bins.slice(0, -1).map((bin, index) => ({
		bin: bin.toFixed(1),
		count: frequencyPurchases.counts[index],
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
								value: "Número de compras",
								position: "insideBottom",
								offset: -5,
							}}
						/>
						<YAxis
							label={{
								value: "Frecuencia",
								angle: -90,
								position: "insideLeft",
							}}
						/>
						<Tooltip />
						<Bar
							dataKey="count"
							fill="#82ca9d"
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export { FrequencyPurchases };
