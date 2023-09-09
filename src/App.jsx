/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Syed Faizan Abbas Kazmi",
  title: "Data Analyst & Web Developer",
  email: "Faizan.Abbas@studentambassadors.com",
  gitHub: "https://github.com/FaizanAbbasK/",
  instagram: "https://www.instagram.com/asadabbas116/",
  linkedIn: "https://www.linkedin.com/in/syed-faizan-abbas-kazmi-136013218/",
  medium: "",
  twitter: "@g_asadabbas116",
  youTube: "Syed Faizan Abbas Kazmi",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
