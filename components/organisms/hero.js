import Image from 'next/image'
import Button from '../atoms/Button'

import React from 'react'

export default function Hero() {
    return (
        <div className="container hero-container">
            <div className="row">
                <div className="col-lg-6 my-auto">
                    <h1 className="hero-heading">Work at the speed of thought</h1>
                    <h5 className="hero-desc">Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</h5>
                    <div className="hero-buttons">
                        <a href="" className="btn btn-started">Get started</a>
                        <a href="" className="btn btn-watch">
                            <Image src="/icons/triangle.svg" width={20} height={17} />
                            <span className="watch-text">Watch the Video</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <Image src="/images/amico.svg" width={600} height={556} />
                </div>
            </div>
        </div>
    )
}
