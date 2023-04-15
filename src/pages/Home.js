import React from "react";
import Header from "../containers/Header";
import Services from "../containers/Services";
import Feature from "../containers/Feature";
import Clients from "../containers/Clients";
import Teams from "../containers/Teams";
import Testimonials from "../containers/Testimonials";
import Other from "../containers/Other";
import Footer from "../containers/Footer";
export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Feature />
      <Clients />
      <Teams />
      <Testimonials />
      <Other />
      <Footer />
    </>
  );
}
