import React from 'react'
import Image from 'next/image'

export default function ProductWork(
    {content, img, step, title, desc}
) { 
    if ( content =='left' ) {
        return (
        <div className="container productWork">
            <div className="row workRow">
                <div className="col-lg-6">
                    <Image src={img} width={500} height={279} />
                </div>
                <div className="col-lg-6 my-auto workRight">
                    <p className="workStep">STEP {step}</p>
                    <h6 className="workSubtitle">{title}</h6>
                    <p className="workDescLeft">{desc}</p>
                </div>
            </div>
        </div>
    )
    } else {
        return (
            <div className="container productWork">
                <div className="row workRow">
                    <div className="col-lg-6 my-auto workLeft">
                        <p className="workStep">STEP {step}</p>
                        <h6 className="workSubtitle">{title}</h6>
                        <p className="workDescRight">{desc}</p>
                    </div>
                    <div className="col-lg-6 text-center">
                        <Image src={img} width={500} height={279} />
                    </div>
                </div>
            </div>
        )
    }
    
}
