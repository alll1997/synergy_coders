import React from "react";
import { RiContractLeftRightLine } from "react-icons/ri";

function Header() {
	return (
		<div className="w-full">
			<div className="flex flex-row p-10">
				<RiContractLeftRightLine className="text-white text-5xl" />
				<h2 className="text-5xl text-white font-bold">Synergy Coders</h2>
			</div>
		</div>
	);
}

export { Header };
