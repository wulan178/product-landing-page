import React from 'react'
import Image from 'next/dist/client/image'

export default function Quick(
    { ava, position, desc }
) {
    if (position == 'left') {
        return (
            <div className="quick-content">
                <Image src={ava} width={98} height={98} />
                <p className="quick-text">{desc}</p>
            </div>
        )
    } else if (position == 'right') {
        return (
            <div className="quick-content">
                <p className="quick-text">{desc}</p>
                <Image src={ava} width={98} height={98} />
            </div>)
    }

}