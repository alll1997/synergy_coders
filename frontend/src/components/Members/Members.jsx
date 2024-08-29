import React from "react";
import { Card } from "../Card/Card";
import membersInfo from "../../utils/members_info";

function Members() {
	return (
		<div className="container mx-auto p-5 ">
			<div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
				{membersInfo.map((member, index) => (
					<Card
						key={index}
						image={`/img/${member.img}`}
						name={member.name}
						profession={member.profession}
						linkedin={member.linkedin}
						github={member.github}
					/>
				))}
			</div>
		</div>
	);
}

export { Members };
