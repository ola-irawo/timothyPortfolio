import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-between gap-6 lg:flex-row animate-fadeIn"
    >
      <section className="text-center flex flex-col gap-4 lg:text-left animate-slideIn">
        <h1 className="text-5xl">
          Hi, they call me the 
          <br className="hidden lg:inline" /> 
          <span className="text-6xl font-bold text-softblue">
            Frontend Alchemist
          </span>.
        </h1>

        <p className="max-w-screen-md mx-auto lg:max-w-[450px] lg:mx-0">
          I build responsive, high-performance websites and web applications that
          turn ideas into reality. With a passion for clean design and efficient
          code, I create seamless user experiences that drive success.
        </p>
      </section>

      <Image
        src="/ola.jpg"
        alt="Timothy Aremu"
        width={400}
        height={400}
        priority
        className="rounded-full animate-slideIn"
      />
    </section>
  );
};

export default Hero;
