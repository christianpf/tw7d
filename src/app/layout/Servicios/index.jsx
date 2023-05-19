"use client"
import React, {useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import serviciosData from "@/app/data/servicios.json";


const ServicioCard = ({title, description, position }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <article  data-aos="fade-right" data-aos-delay={`${100*position}`} data-aos-once="true" className="bg-bg-secondary font-medium tracking-tight leading-8 p-4 rounded-2xl shadow-xl border-2 border-accent">
      <h3 className="font-bold text-2xl pb-4 text-accent">
        {title}
      </h3>

      <p>{description}</p>
    </article>
  );
};

const Servicios = () => {

  return (
    <section id="servicios" className="w-full px-4 md:w-5/6 md:px-0 mx-auto text-center py-24">
      <h2 className="font-bold text-4xl">Nuestro Servicio</h2>

      <div className="grid grid-cols-servicios  gap-4 pt-16">
        {serviciosData.map((servicio) => {
          return <ServicioCard key={servicio.position} title={servicio.title} description={servicio.description} position={servicio.position} />
        })}
      </div>
    </section>
  );
};

export default Servicios;
