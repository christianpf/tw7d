"use client";
import ContactButton from "@/app/components/contactButton";
import Image from "next/image";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full h-[80dvh] bg-hero_bg bg-gray-700 border-b-2 bg-cover bg-blend-multiply flex">
      <div
        data-aos="slide-right" data-aos-anchor-placement="left"
        className="flex flex-col gap-8 w-full px-4 h-full md:w-[75ch] text-center mx-auto justify-center items-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-bg-secondary">
          Crea tu presencia en línea en tan solo{""}
          <span className="text-bg-primary "> 7</span> días
        </h2>
        <p className="text-bg-secondary text-2xl md:text-4xl">
          Con nuestro sistema adaptado a tí conseguirás la web que siempre has
          querido para tu negocio en tiempo récord
        </p>
        <ContactButton>
          <p className="py-6 px-12 text-2xl">Apúntate</p>
        </ContactButton>
      </div>
    </section>
  );
};

export default Hero;
