import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";

function Technologies() {
	const iconSize = "w-10 h-10";

	return (
		<div className="flex flex-col gap-4 py-4">
			<h4 className="">Tecnologías usadas</h4>
			<div className="flex flex-col gap-10 sm:flex-row items-center">
				<FaReact className={iconSize} />
				<IoLogoJavascript className={iconSize} />
				<FaHtml5 className={iconSize} />
				<RiTailwindCssFill className={iconSize} />
				<FaPython className={iconSize} />
				<img
					src="/img/flowbite.png"
					alt="Logo de flowbite"
					className="h-10 bg-white rounded-xl"
				/>
				<p className={iconSize}>&lt;Recharts/&gt;</p>
			</div>
		</div>
	);
}

export { Technologies };
