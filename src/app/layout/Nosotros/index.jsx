import Image from "next/image";
import React from "react";

import nosotrosjpg from '/public/nosotros.jpg';

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-24">
      <h3 className="text-3xl font-bold text-primary text-center">
        Conoce a nuesto equipo
      </h3>
      <div className="w-full px-4 md:w-5/6 md:px-0 mx-auto grid  2xl:grid-cols-2  gap-12 pt-10 place-items-center">
        <article>
          <h4>Lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ex
            libero, porta eget suscipit in, pellentesque in risus. Nam in purus
            id est euismod consectetur. Curabitur nec rhoncus nisl, eu egestas
            quam. Phasellus eu posuere mi. Vestibulum at blandit enim, ac
            ultrices dui. Maecenas sed eros vel felis tempus convallis a a
            velit. Quisque blandit tellus enim. Integer vitae ante nisl. Aliquam
            pretium non purus sit amet consequat. Quisque vitae luctus turpis,
            quis gravida purus. Quisque rutrum ultrices justo eget congue. Sed
            eu purus rhoncus, consequat nibh eu, accumsan lorem. Duis tempor ac
            nisi nec rutrum. Nulla iaculis dolor sit amet eros dapibus dictum.
            Mauris in imperdiet augue. Pellentesque cursus nisl diam, a
            tincidunt sapien molestie fermentum. In porttitor dapibus dictum.
            Praesent enim lectus, aliquet eu ornare id, scelerisque eu augue.
            Sed at vestibulum lorem. Quisque mi enim, dictum et turpis at,
            consequat accumsan diam. In mollis turpis quis enim laoreet
            hendrerit.
          </p>

          
        </article>
        <Image src={nosotrosjpg} className="rounded-xl shadow-custom max-w-2xl"  alt="Nuestro equipo trabajando"/>
      </div>
    </section>
  );
};

export default Nosotros;
