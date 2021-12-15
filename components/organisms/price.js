import React from 'react'
import ListPrices from '../molecules/ListPrices.js'

export default function Price() {
    return (
        <div className="container price text-center">
            <h1 className="price-heading">Price</h1>
            <h6 className="price-subheading">We offer competitive price</h6>
            <div className="row price-row">
                <ListPrices title="Free" pricetag="0" operator="Only 2 Operators" />
                <ListPrices title="Standard" pricetag="5" operator="5+ Operators" />
                <ListPrices title="Premium" pricetag="10" operator="10+ Operators" />
            </div>
        </div>
    )
}
