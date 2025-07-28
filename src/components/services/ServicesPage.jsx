"use client"

import React, { useState } from 'react'
import ServicesSelector from './ServicesSelector';
import Services from './Services';

const ServicesPage = () => {

    const [selected, setSelected] = useState("first")

    return (


        <div className="flex w-full flex-col-reverse 2xl:flex-row items-center p-4 my-20">
            {/* 1 */}
            
            <ServicesSelector selected={selected} setSelected={setSelected} />
            
            {/* 2 */}
            
            <Services selected={selected} />
        
        </div>

    )
}

export default ServicesPage
