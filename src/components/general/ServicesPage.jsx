"use client"

import React, { useState } from 'react'
import ServicesSelector from './ServicesSelector';
import Services from './Services';

const ServicesPage = () => {

    const [selected, setSelected] = useState("first")

    return (


        <div className="flex mt-20 items-center mb-20">
            {/* 1 */}
            <div className="basis-[20%] shrink-0 grow-0 ">
                <ServicesSelector selected={selected} setSelected={setSelected} />
            </div>
            {/* 2 */}
            <div>
                <Services selected={selected} />
            </div>
        </div>

    )
}

export default ServicesPage
