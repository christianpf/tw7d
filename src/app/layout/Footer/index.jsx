import Link from "next/link";
import React from "react";

import {
  BsEnvelopeAt,
  BsTwitter,
  BsTiktok,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-700   to-primary">
      <section className="w-full px-4 md:w-5/6 md:px-0 py-8 mx-auto grid grid-cols-1 grid-rows-3 xl:grid-rows-1 xl:grid-cols-3  text-bg-secondary gap-16 items-center">
        <article className="flex flex-col justify-center items-center">
          <h4 className="text-4xl font-bold">Tu web en 7 Días &#174; </h4>
          <h5 className="text-sm"> By RyTAgency&#174;</h5>
        </article>
        <article className="flex flex-col gap-4 min-w-full items-center justify-center">
          <h4 className="text-xl underline underline-offset-4 font-medium">
            Madrid
          </h4>
          <Link
            href="mailto:info@tuwebensietedias.com"
            className="font-bold flex items-center gap-2"
          >
            <BsEnvelopeAt className="shrink-0 text-2xl" />
            info@tuwebensietedias.com
          </Link>
          <p className="flex items-center gap-2">
            <GoLocation /> C/ Patatin patatan, 239497, Móstoles
          </p>
        </article>
        <article className="w-full md:w-1/2 xl:w-full mx-auto flex flex-col gap-6 justify-center">
          <h4 className="font-bold text-xl text-center">
            Échanos un ojo en nuestras redes sociales
          </h4>
          <div className="flex flex-row gap-4 items-center justify-evenly font-bold text-4xl">
            <Link
              className="transition-all hover:scale-110"
              href="https://www.facebook.com"
              target="blank"
              aria-label="Ir a Facebook"
            >
              <BsFacebook />
            </Link>
            <Link
              className="transition-all hover:scale-110"
              href="https://www.instagram.com"
              target="blank"
              aria-label="Ir a Instagram"
            >
              <BsInstagram />
            </Link>
            <Link
              className="transition-all hover:scale-110"
              href="https://www.twitter.com"
              target="blank"
              aria-label="Ir a Twitter"
            >
              <BsTwitter />
            </Link>
            <Link
              className="transition-all hover:scale-110"
              href="https://www.tiktok.com"
              target="blank"
              aria-label="Ir a Tiktok"
            >
              <BsTiktok />
            </Link>
          </div>
        </article>
      </section>
      <p className="text-bg-primary text-sm p-1 text-center pt-4">
        Copyright RyTAgency&#174; 2023
      </p>
    </footer>
  );
};

export default Footer;
