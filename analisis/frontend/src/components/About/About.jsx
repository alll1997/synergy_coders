import React from "react";

function About() {
	return (
		<div className="text-white max-w-[900px] w-full m-auto text-center text-3xl font-bold">
			<h3>Nosotros</h3>
			<p className="text-white text-lg font-bold p-8 text-justify">
				Synergy Coders es un equipo internacional y multidisciplinario integrado
				por un Web Developer, tres Data Analysts y tres Data Scientists. Nuestro
				objetivo es proporcionar soluciones precisas y efectivas que optimicen
				la toma de decisiones y potencien el crecimiento de cualquier negocio.
			</p>
			<p className="text-white text-lg font-bold p-8 text-justify">
				Con un enfoque innovador y herramientas avanzadas, transformamos datos
				en estrategias inteligentes, mientras nuestro Web Developer asegura una
				experiencia de usuario fluida y atractiva para facilitar el acceso y la
				interpretación de los datos.
			</p>
		</div>
	);
}

export { About };
