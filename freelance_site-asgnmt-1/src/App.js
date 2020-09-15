import React from "react";
import "./css/styles.css";
import NavBar from "./NavBar";
import HeadSection from "./HeadSection";
import PortFolio from "./PortFolio";
import About from "./About";
import ContactMe from "./ContactMe";
import Footer from "./Footer"
const App = () =>
(
	<div>
		<NavBar />
		<HeadSection />
		<PortFolio />
		<About />
		<ContactMe />
		<Footer />
	</div>	
)

export default App;