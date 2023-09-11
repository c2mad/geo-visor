import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="relative flex min-h-min flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="pointer-events-none relative mt-1 flex gap-10 overflow-hidden">
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse]">
            <img
              className="aspect-square max-w-[clamp(20rem,38vmin,30rem)] rounded-md object-cover shadow-md"
              src="https://ciitt.ucacue.edu.ec/wp-content/uploads/2022/11/ucacu-ciitt-laboratorio-calculo-computacional-modelado-analitica-datos-C2MAD.jpg"
              alt=""
            />
            <img
              className="aspect-square max-w-[clamp(20rem,38vmin,30rem)] rounded-md object-cover shadow-md"
              src="https://ciitt.ucacue.edu.ec/wp-content/uploads/2022/11/CIITT_5.jpg"
              alt=""
            />
            <img
              className="aspect-square max-w-[clamp(20rem,38vmin,30rem)] rounded-md object-cover shadow-md"
              src="https://ciitt.ucacue.edu.ec/wp-content/uploads/2022/10/Dathacademics-header-v1.jpg"
              alt=""
            />
            <img
              className="aspect-square max-w-[clamp(20rem,38vmin,30rem)] rounded-md object-cover shadow-md"
              src="https://ciitt.ucacue.edu.ec/wp-content/uploads/2022/10/Dathacademics-header-v1.jpg"
              alt=""
            />
            <img
              className="aspect-square max-w-[clamp(20rem,38vmin,30rem)] rounded-md object-cover shadow-md"
              src="https://ciitt.ucacue.edu.ec/wp-content/uploads/2022/11/CIITT_4.jpg"
              alt=""
            />
          </div>
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse]">
            <img
              className="aspect-square max-w-[clamp(20rem,38vmin,30rem)] rounded-md object-cover shadow-md"
              src="https://ciitt.ucacue.edu.ec/wp-content/uploads/2022/10/Dathacademics-header-v1.jpg"
              alt=""
            />
            <img
              className="aspect-square max-w-[clamp(20rem,38vmin,30rem)] rounded-md object-cover shadow-md"
              src="https://ciitt.ucacue.edu.ec/wp-content/uploads/2022/11/CIITT_2.jpg"
              alt=""
            />
            <img
              className="aspect-square max-w-[clamp(20rem,38vmin,30rem)] rounded-md object-cover shadow-md"
              src="https://ciitt.ucacue.edu.ec/wp-content/uploads/2022/11/CIITT_6.jpg"
              alt=""
            />
            <img
              className="aspect-square max-w-[clamp(20rem,38vmin,30rem)] rounded-md object-cover shadow-md"
              src="https://ciitt.ucacue.edu.ec/wp-content/uploads/2022/11/CIITT_7.jpg"
              alt=""
            />
            <img
              className="aspect-square max-w-[clamp(20rem,38vmin,30rem)] rounded-md object-cover shadow-md"
              src="https://ciitt.ucacue.edu.ec/wp-content/uploads/2022/11/CIITT_4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
