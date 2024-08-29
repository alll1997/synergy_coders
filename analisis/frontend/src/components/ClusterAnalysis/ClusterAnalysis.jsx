import React from "react";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
} from "recharts";

const clusterData = {
	ssd_values: [
		12860.999999999989, 7471.747809603417, 4208.683508298573,
		3010.4521551869384, 2546.166467100744, 2141.0284655504133,
		1841.5128446491144, 1641.3631713110115,
	],
	range_n_clusters_values: [1, 2, 3, 4, 5, 6, 7, 8],
};

function ClusterAnalysis() {
	const data = clusterData.range_n_clusters_values.map((clusters, index) => ({
		clusters,
		ssd: clusterData.ssd_values[index],
	}));

	return (
		<div className="w-full max-w-4xl mx-auto p-4">
			<div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
				<ResponsiveContainer
					width="100%"
					height="100%"
				>
					<LineChart
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="clusters" />
						<YAxis />
						<Tooltip
							formatter={(value) => value.toFixed(2)}
							labelFormatter={(label) => `Clusters: ${label}`}
						/>
						<Line
							type="monotone"
							dataKey="ssd"
							stroke="#82ca9d"
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export { ClusterAnalysis };
