import React from "react";

function Hero() {
	return (
		<div className="max-w-[380px] sm:max-w-[1200px] m-auto p-5 border-b-4 border-[#FF5F00]">
			<div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
				<div className="sm:w-1/2">
					<h2 className="text-[#FF5F00] text-3xl sm:text-5xl font-bold mb-2 sm:pb-5">
						Retail Challenge
					</h2>
					<p className="text-white text-xl sm:text-2xl font-bold sm:max-w-[480px] text-justify">
						Se realiza un análisis estadístico para segmentar clientes,
						simplificando el proceso de identificar compradores con el mayor
						potencial de compra. Esto permite generar leads de ventas efectivos
						y optimizar las estrategias comerciales.
					</p>
				</div>
				<div className="sm:w-1/2">
					<img
						src="/img/hero.png"
						alt="Hero"
						className="w-full rounded-md animate-floating"
					/>
				</div>
			</div>
		</div>
	);
}

export { Hero };
