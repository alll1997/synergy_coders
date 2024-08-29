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

const frequency = {
	bins: [
		0.0, 12.466666666666667, 24.933333333333334, 37.4, 49.86666666666667,
		62.333333333333336, 74.8, 87.26666666666667, 99.73333333333333, 112.2,
		124.66666666666667, 137.13333333333333, 149.6, 162.06666666666666,
		174.53333333333333, 187.0, 199.46666666666667, 211.93333333333334, 224.4,
		236.86666666666667, 249.33333333333334, 261.8, 274.26666666666665,
		286.73333333333335, 299.2, 311.6666666666667, 324.1333333333333, 336.6,
		349.06666666666666, 361.53333333333336, 374.0,
	],
	counts: [
		0.016428226612230232, 0.010702671551475734, 0.007634073414339336,
		0.005033249383473728, 0.0050706713119753905, 0.004864850705216244,
		0.003106020065638062, 0.0018898073893340015, 0.0017214087110765165,
		0.0014033223188123774, 0.0015717209970698646, 0.00110394689079907,
		0.0015904319613206945, 0.0013846113545615457, 0.0013471894260598824,
		0.0013471894260598824, 0.00110394689079907, 0.0011787907478023971,
		0.0009729701410432485, 0.0013097674975582191, 0.0011413688193007338,
		0.0012349236405548951, 0.0009729701410432462, 0.0008232824270365967,
		0.0009168372482907511, 0.0010665249622974094, 0.000711016641531603,
		0.00013097674975582222, 0.0007858604985349296, 0.001665275818324025,
	],
};

function Frequency() {
	const data = frequency.bins.slice(0, -1).map((bin, index) => ({
		bin: bin.toFixed(0),
		count: frequency.counts[index],
	}));

	return (
		<div className="w-full max-w-4xl mx-auto p-4">
			ß
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
								value: "Días de la última compra",
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
							fill="#8884d8"
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}

export default Frequency;
