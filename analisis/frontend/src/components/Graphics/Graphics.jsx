import React from "react";
import LineGraph from "../LineGraph/LineGraph";
import BarGraphic from "../BarGraphic/BarGraphic";
import { Table } from "../Table/Table";
import { BarChartWithFlags } from "../Countries/Countries";
import { PieChartGraph } from "../PieChart/PieChart";
import Frequency from "../Frequency/Frequency";
import { FrequencyPurchases } from "../FrequencyPurchase/FrequencyPurchase";
import { CustomerInvestment } from "../CustomerInvestment/CustomerInvestment";
import { ClusterAnalysis } from "../ClusterAnalysis/ClusterAnalysis";

function Graphics() {
	return (
		<div className="container flex flex-col m-auto justify-center items-center place-items-center p-10 ">
			<h2 className="text-white text-center text-xl font-bold p-5">
				Cantidad de productos comprados y cancelados a través del tiempo
			</h2>
			<LineGraph />
			<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
				En Agosto se observa un crecimiento en la cantidad de articulos
				comprados. El crecimiento continua hasta diciembre, fecha en que se
				dejan de tener registros. En cuanto a la cantidad de productos
				cancelados hay dos temporadas con cantidades elevadas, que son Enero y
				Diciembre. Al comparar ambas líneas de tendencia, se observa que los
				productos cancelados son significativamente menores que los comprados,
				lo que confirma la estabilidad y solidez en el comportamiento de ventas.
			</p>
			<h2 className="text-white text-center text-xl font-bold p-5">
				Top de productos de vendidos
			</h2>
			<BarGraphic />
			<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
				En está gráfica, se muestran los 20 productos más vendidos, ofreciendo
				una visión clara y concisa de las preferencias de todos los clientes,
				incluyendo los registrados y los que no estan registrados.
			</p>
			<h2 className="text-white text-center text-xl font-bold p-5">
				Top 10 países con mayor número de transacciones:
			</h2>
			<div className="flex flex-col w-full gap-4 p-3 overflow-hidden items-center">
				<img
					src="/img/world_map.png"
					className="rounded-lg sm:w-[350px]"
					alt="Imagen del mundo que muestra el top de 10 países con mayor número de transacciones"
				/>
				<img
					src="/img/world.png"
					className="rounded-lg sm:w-[350px]"
					alt="Imagen del mundo que muestra el top de 10 países con mayor número de transacciones"
				/>
			</div>
			<div className="flex flex-col sm:flex-row gap-10 align-top p-4 ">
				<ul className="text-white font-bold text-justify">
					<li>1. Reino Unido </li>
					<li>2. Alemania </li>
					<li>3. Francia </li>
					<li>4. EIRE </li>
					<li>5. España </li>
					<li>6. Paises Bajos </li>
					<li>7. Bélgica </li>
					<li>8. Suiza </li>
					<li>9. Portugal </li>
					<li>10. Australia </li>
				</ul>
				<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
					Como se observa en el mapa, el 91% de los compradores se encuentran en
					Reino Unido.
				</p>
			</div>
			<div className="flex flex-col items-center mt-3">
				<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
					Al comparar las compras con las devoluciones, el top 4 de los paises
					con más compras, coincide con el top 4 de países con más
					cancelaciones.
				</p>
				<Table />
				<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
					Sin embargo, hay países que aparecen en el top 10 de Cancelaciones
					pero no en el de compras como lo son Estados Unidos, Italia y Japón.
				</p>
			</div>
			<BarChartWithFlags />
			<div>
				<h2 className="text-white text-center text-xl font-bold p-5">
					Ganancias por país
				</h2>
				<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
					Al obtener los países con mayores ganancias, tomando en cuenta las
					devoluciones, el 84% de los ingresos se obtienen de Reino unido. Los
					demás países, individualmente, contribuyen con menos del 3% de las
					ganancias.
				</p>
				<PieChartGraph />
			</div>
			<h2 className="text-white text-center text-xl font-bold p-5">
				Métodos RFM
			</h2>
			<Frequency />
			<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
				La mayoría de los clientes realizaron compras muy recientemente, dentro
				de los primeros 50 días, esto sugiere una base activa de clientes que
				compran con regularidad. La distribución es sesgada a la derecha,
				indicando que hay más clientes que han comprado recientemente en
				comparación con aquellos que no han comprado en un tiempo más largo.
			</p>
			<h2 className="text-white text-center text-xl font-bold p-5">
				Candidad de compras en los usuarios
			</h2>
			<FrequencyPurchases />
			<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
				La mayoría de los clientes han realizado una o pocas compras, con un
				gran número de clientes realizando solo una compra, esto indica una alta
				tasa de clientes que han comprado una sola vez. La frecuencia de compra
				disminuye rápidamente después del primer par de compras.
			</p>
			<h2 className="text-white text-center text-xl font-bold p-5">
				Dinero invertido por el cliente comprando un producto
			</h2>
			<CustomerInvestment />
			<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
				La mayoría de los clientes han gastado relativamente poco dinero, con
				una gran concentración en los valores bajos de gasto, esto es indicativo
				de muchas compras pequeñas. La distribución del gasto es altamente
				sesgada a la derecha, indicando que la mayoría de los clientes gastan
				poco, mientras que unos pocos gastan mucho.
			</p>
			<h2 className="text-white text-center text-xl font-bold p-5">
				Método del codo
			</h2>
			<ClusterAnalysis />
			<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
				Esta gráfica de codo muestra la inercia (WCSS) en función del número de
				clusters (k) en un análisis de clustering. El "codo" de la gráfica,
				ubicado alrededor de k=3 (0-4), indica que este es el número óptimo de
				clusters. A partir de este punto, la reducción de la inercia es menor,
				lo que sugiere que agregar más clusters no mejora significativamente la
				compactación de los mismos.
			</p>
			<h2 className="text-white text-center text-xl font-bold p-5">Recency</h2>
			<img
				src="/img/cluster.png"
				alt="Análisis Recency"
			/>
			<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
				Recency: Existe una distribución donde la mayoría de los clientes
				realizan compras en intervalos de tiempo más distantes, lo cual puede
				implicar diferentes estrategias de reactivación o engagement según la
				frecuencia de compra de cada grupo.
			</p>
			<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
				Frequency: Hay una clara diferencia entre clientes frecuentes, que
				realizan múltiples compras, y aquellos menos frecuentes. Esto sugiere
				oportunidades para segmentar y personalizar estrategias de marketing y
				fidelización según el nivel de actividad de compra de cada segmento.
			</p>
			<p className="text-white text-lg font-light text-justify max-w-[500px] align-top py-4 mt-2">
				Monetary: Se observa una distribución donde algunos clientes realizan
				compras de alto valor, seguidos por clientes con gastos medios y, en
				tercer lugar, clientes con gastos bajos. Este hallazgo puede influir en
				las estrategias de upselling, cross-selling y segmentación de clientes
				según el valor de sus compras.
			</p>
		</div>
	);
}

export default Graphics;
