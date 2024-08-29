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
		1.0, 2.0666666666666664, 3.1333333333333333, 4.2, 5.266666666666667,
		6.333333333333333, 7.4, 8.466666666666667, 9.533333333333333, 10.6,
		11.666666666666666, 12.733333333333333, 13.8, 14.866666666666667,
		15.933333333333334, 17.0, 18.066666666666666, 19.133333333333333, 20.2,
		21.266666666666666, 22.333333333333332, 23.4, 24.466666666666665,
		25.53333333333333, 26.6, 27.666666666666668, 28.733333333333334, 29.8,
		30.866666666666667, 31.933333333333334, 33.0,
	],
	counts: [
		0.4684219734079777, 0.10715535339398177, 0.0824440167949615,
		0.06232505248425474, 0.04242477256822954, 0.0334587123862841,
		0.025586074177746682, 0.01727606717984605, 0.015963960811756477,
		0.013558432470258926, 0.011152904128761373, 0.007216585024492642,
		0.009184744576627013, 0.005904478656403081, 0.0048110566829951025,
		0.00787263820853744, 0.004155003498950316, 0.0021868439468159554,
		0.0017494751574527645, 0.0024055283414975513, 0.0010934219734079777,
		0.0015307907627711691, 0.0006560531840447867, 0.001312106368089569,
		0.0021868439468159554, 0.0013121063680895733, 0.0013121063680895733,
		0.0006560531840447867, 0.0013121063680895733, 0.0008747375787263822,
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
