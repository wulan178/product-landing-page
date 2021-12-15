import React from 'react'
import Image from 'next/image'

export default function ListStrategies(
    { cover, owner, date, title }
) {
    return (
        <div className="card strategies-card">
            <Image src={cover} className="strategies-cover" width={348} height={189} />
            <div className="strategies-body">
                <p className="strategies-text">By <span className="fw-bold">{owner}</span> | {date}</p>
                <h5 className="strategies-title">{title}</h5>
            </div>
        </div>
    )
}
