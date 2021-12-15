import React from 'react'
import Image from 'next/image'

export default function ListQuestions(
    {icon, desc}
) {
    return (
        <>
        <div className="col-lg-1 text-start mx-0 px-0">
            <Image src={icon} width={24} height={24} />
        </div>
        <div className="col-lg-11 text-start py-auto questionsList">{desc}</div>
        </>
    )
}
