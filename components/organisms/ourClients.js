import React from 'react'
import Image from 'next/image'

export default function OurClients() {
    return (
        <div className="container ourClients">
            <h2 className="text-center ourClientsTitle">Our Clients</h2>
            <div className="row">
                <div className="col-lg-3 text-center">
                    <Image src="/icons/Airbnb.svg" width={159} height={50} />
                </div>
                <div className="col-lg-3 text-center">
                    <Image src="/icons/Google.svg" width={146} height={50} />
                </div>
                <div className="col-lg-3 text-center">
                    <Image src="/icons/Microsoft.svg" width={213} height={44} />
                </div>
                <div className="col-lg-3 text-center">
                    <Image src="/icons/FedEx.svg" width={140} height={42} />
                </div>
            </div>
        </div>
    )
}
