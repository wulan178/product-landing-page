import React from 'react'
import Button from '../../atoms/Button'

export default function ListPrices(
    { title, pricetag, operator }
) {
    return (
        <div className="col-lg-4 pt-2 pb-2">
            <div class="price-card text-center">
                <h5 class="price-title">{title}</h5>
                <p class="price-subtitle">Brief price description</p>
                <div className="pricetag text-start">
                    <p className="pricetag-left my-auto">{pricetag}</p>
                    <div className="pricetag-right">
                        <span className="dollar">$</span> <br></br>
                        Per / month
                    </div>
                </div>
                <ul className="price-list px-0">
                    <li>{operator}</li>
                    <li>Notifications</li>
                    <li>Landing Pages</li>
                </ul>
                <Button type="order" />
            </div>
        </div>
    )
}
