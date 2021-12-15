import React from 'react'
import Image from 'next/image'

export default function Rate(
    { rate }
) {
    if (rate == 4) {
        return (
            <div className="rates">
                <Image src="/icons/star.svg" width={18} height={18} className="star mr-3" />
                <Image src="/icons/star.svg" width={18} height={18} className="star" />
                <Image src="/icons/star.svg" width={18} height={18} className="star" />
                <Image src="/icons/star.svg" width={18} height={18} className="star" />
                <Image src="/icons/unstar.svg" width={18} height={18} className="star" />
            </div>
        )
    }

}