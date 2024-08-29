import React from "react";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Members } from "./components/Members/Members";
import { Hero } from "./components/Hero/Hero";
import { Info } from "./components/Info/Info";
import Graphics from "./components/Graphics/Graphics";
import { About } from "./components/About/About";

function App() {
	return (
		<>
			<div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-hidden">
				<div className="relative z-10">
					<Header />
					<Hero />
					<Info />
					<Graphics />
					<About />
					<Members />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
