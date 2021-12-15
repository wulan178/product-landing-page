import React from 'react'
import Image from 'next/image'

export default function Content1(
    { image, subtitle, title, desctitle1, desctitle2, desc, desc1, desc2, width, height }
) {
    return (
        <div className="container content-container">
            <div className="row">
                <div className="col-lg-6 text-col">
                    <div className="content-subtitle">{subtitle}</div>
                    <div className="content-title">{title}</div>
                    <div className="desc">{desc}</div>
                    <div className="desctitle1">{desctitle1}</div>
                    <div className="desc1">{desc1}</div>
                    <div className="desctitle2">{desctitle2}</div>
                    <div className="desc2">{desc2}</div>
                </div>
                <div className="col-lg-6">
                    <Image src={image} width={width} height={height} />
                </div>
            </div>
        </div>
    )
}
