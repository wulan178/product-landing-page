import React from 'react'
import Image from 'next/image'
import Rate from '../../atoms/Rate'

export default function ListClients(
    { ava }
) {
    return (
        <div className="col-lg-4 clients-col">
            <div className="clients-card">
                <Rate rate="4" />
                <p className="clients-desc text-start">Product helps you see how many more days you need to work to reach your financial goal.</p>
                <div className="clients-profile">
                    <Image src={ava} width={50} height={50} />
                    <div className="profile-text">
                        <span className="profile-name">Wahid Ari</span> <br></br>
                        Designer
                    </div>
                </div>
            </div>
        </div>
    )
}
