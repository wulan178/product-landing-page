import React from 'react'
import Image from 'next/image'

export default function ListStories(
    {cover, owner, date, title}
) {
    return (
        <div className="col-lg-4">
            <div className="card stories-card">
                <Image src={cover} className="stories-cover" width={348} height={189} />
                <div className="stories-body">
                    <p className="stories-text">By <span className="fw-bold">{owner}</span> | {date}</p>
                    <h5 className="stories-title">{title}</h5>
                </div>
            </div>
        </div>
    )
}
