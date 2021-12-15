import React from 'react'
import Image from 'next/image'

export default function ListCustomerChoose(
    {icon, title, desc}
) {
    return (
        <>
        <div className="col-lg-4">
            <div className="text-center chooseCard">
                <Image src={icon} width={50} height={50} />
                <h5 className="chooseCardTitle">{title}</h5>
                <p className="chooseCardDesc">{desc}</p>
            </div>
        </div>
        </>
    )
}
