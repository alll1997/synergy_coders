import React from "react";

function Info() {
	return (
		<div className="max-w-[380px] sm:max-w-[1200px] m-auto p-10">
			<h3 className="text-white text-4xl font-bold text-center p-10">
				¿Cómo cumplir el objetivo? 🎯
			</h3>
			<p className="text-white text-justify font-bold text-xl sm:text-2xl">
				Para cumplir el objetivo, se tiene información detallada de
				transacciones realizadas desde el{" "}
				<span className="text-[#FF9F66]">
					1 de diciembre de 2019 hasta el 10 de diciembre de 2020.
				</span>{" "}
				Esta abarca datos sobre clientes registrados y no registrados,
				incluyendo los productos adquiridos, la cantidad comprada, el gasto
				total y el país de origen de los compradores.
			</p>
		</div>
	);
}

export { Info };
