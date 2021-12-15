import React from 'react'
import Image from 'next/image'
import ListProduct from '../molecules/ListProduct'
import Button from '../atoms/Button'

export default function Products() {
    return (
        <div className="container-fluid products-container">
            <h1 className="products-heading text-center mx-auto">Product  was Built Specifically for You</h1>
            <div className="container px-auto">
                <div className="row mx-auto">
                    <ListProduct icon="/icons/icongreen.svg" title="First click tests" subtitle="While most people enjoy casino gambling," />
                    <ListProduct icon="/icons/iconblue.svg" title="Design surveys" subtitle="Sports betting, lottery and bingo playing for the fun" />
                    <ListProduct icon="/icons/iconpurple.svg" title="Preference tests" subtitle="The Myspace page defines the individual." />
                    <ListProduct icon="/icons/iconred.svg" title="Five second tests" subtitle="Personal choices and the overall personality of the person." />
                </div>
                <div className="product-btn">
                    <Button text="SIGN UP NOW" type="signup" />
                </div>
            </div>
        </div>
    )
}
