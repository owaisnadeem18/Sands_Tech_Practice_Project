import Services from "@/components/general/Services";
import ServicesInquiries from "@/components/general/ServicesInquiries";
import ServicesPage from "@/components/general/ServicesPage";
import ServicesSelector from "@/components/general/ServicesSelector";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="w-9/12 text-center m-auto text-3xl font-[500] mt-[180px] text-neutral-700/25 md:max-w-[36ch] lg:text-4xl">
        <span className="inline-block">
          We shape ambitious brands & digital products at every stage of
          evolution
        </span>
      </div>

    <ServicesPage/>
    <ServicesInquiries/>

    </>
  );
};

export default Index;
