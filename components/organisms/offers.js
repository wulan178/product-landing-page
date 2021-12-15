import React from 'react'
import Image from 'next/image'

export default function Offers() {
    return (
        <div className="container-fluid offers">
            <h5 className="mx-auto text-center offersTitle">Join thousand of other who have already received offers</h5>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-4 text-center">
                    <Image src="/icons/offersBusiness.png" width={150} height={150} />
                    <h6 className="offersSubtitle">Business</h6>
                    <ul className="offersList px-0">
                        <li className="offersItem">Cash Flow</li>
                        <li className="offersItem">Asset Backed</li>
                        <li className="offersItem">Receivables Finance</li>
                    </ul>
                    <p className="offersItem2">Find the best business product</p>
                </div>
                <div className="col-lg-4 text-center">
                    <Image src="/icons/offersEnterprise.png" width={150} height={150} />
                    <h6 className="offersSubtitle">Enterprise</h6>
                    <ul className="offersList px-0">
                        <li className="offersItem">Site Acquisition</li>
                        <li className="offersItem">Bridge</li>
                        <li className="offersItem">Development Financing</li>
                    </ul>
                    <p className="offersItem2">Find the best business product</p>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    )
}
