import React from "react";
import Display from "../component/Display/Display";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/Header";
import Hero from "../component/Hero/Hero";
import Message from "../component/Message/Message";
import Mobile from "../component/Mobile/Mobile";
import Pact from "../component/Pact/Pact";
import Section from "../component/Section/Section";
import Young from "../component/Young/Young";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Display />
      <Section />
      <Pact />
      <Young />
      <Mobile />
      <Message />
      <Footer />
    </div>
  );
};

export default Homepage;
