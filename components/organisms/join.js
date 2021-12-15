import React from 'react'
import Image from 'next/image'

export default function Join() {
    return (
        <div className="container">
            <div className="row join mx-auto">
                <div className="col-lg-7">
                    <h1 className="join-tagline text-white">Join 100 Compannies who boost their business with Product</h1>
                    <a className="join-btn btn" href="">Get This</a>
                </div>
                <div className="col-lg-5">
                    <Image src="/images/screen.svg" width={351} height={331} />
                </div>
            </div>
        </div>
    )
}
