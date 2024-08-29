import React from "react";
import { Technologies } from "../Technologies/Technologies";
import { RiContractLeftRightLine } from "react-icons/ri";

function Footer() {
	return (
		<div className="container px-8 text-white flex flex-row justify-between w-full items-center">
			<Technologies />
			<div className="flex flex-row p-10">
				<RiContractLeftRightLine className="text-white text-3xl" />
				<h2 className="text-2xl text-white font-bold">Synergy Coders</h2>
			</div>
		</div>
	);
}

export { Footer };
