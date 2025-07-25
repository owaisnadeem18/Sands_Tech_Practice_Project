import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className="absolute left-1/2 top-3 -translate-x-1/2"><div className="h-1 w-12 rounded-full bg-neutral-500/15"></div></div>

      <div
        className="px-8 py-10 md:mt-7 md:w-10/12 md:px-20 xl:w-9/12 xl:px-36 2xl:w-7/12 relative overflow-hidden "
      // style={{ position: 'relative', overflow: 'hidden' }}
      >

        <div style={{ opacity: 1, willChange: 'auto', transform: 'none' }}>
          <div>
            <p className="mb-8 text-2xl pt-20 text-neutral-400 md:text-3xl xl:text-[48px] xl:leading-[3.25rem] 3xl:text-5xl 3xl:leading-[3.25rem]">
              Daybreak Studio creates brand, web, and software experiences by
              integrating technology to enhance human craft.
            </p>
          </div>
          <div>
            <p className="mb-8 text-2xl text-neutral-400 md:text-3xl xl:text-[48px] xl:leading-[3.25rem] 3xl:text-5xl 3xl:leading-[3.25rem]">
              We work closely with ambitious companies to realize their vision
              for the future. Through everything we do, we aim to build works of
              design that are beautiful, intuitive, and functional.
            </p>
          </div>
          <div>
            <p className="mb-8 text-2xl text-neutral-400 md:text-3xl xl:text-[48px] xl:leading-[3.25rem] 3xl:text-5xl 3xl:leading-[3.25rem]">
              Design that feels right. Tech that works well.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;