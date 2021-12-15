import React from 'react'
import Image from 'next/image'
import ListCustomers from '../molecules/ListCustomer'

export default function Content2(
    { subtitle, title, desc }
) {
    return (
        <div className="container content-container">
            <div className="row">
                <div className="col-lg-6">
                    <Image src="/images/content2.svg" width={543} height={500} />
                </div>
                <div className="col-lg-6 content2">
                    <div className="content-subtitle">{subtitle}</div>
                    <div className="content-title">{title}</div>
                    <div className="desc">{desc}</div>
                    <ListCustomers icon="/icons/support1.svg" desc="Never worry about overpaying for your energy again." />           
                    <ListCustomers icon="/icons/support2.svg" desc="We will only switch you to energy companies that we trust and will treat you right" />           
                    <ListCustomers icon="/icons/support3.svg" desc="We track the markets daily and know where the savings are." />           
                </div>
            </div>
        </div>
    )
}