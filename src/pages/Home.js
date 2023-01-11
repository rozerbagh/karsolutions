import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Feature from "../components/Feature";
import Clients from "../components/Clients";
import Teams from "../components/Teams";
import Testimonials from "../components/Testimonials";
import Other from "../components/Other";
import Footer from "../components/Footer";
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
