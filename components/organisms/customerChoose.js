import React from 'react'
import ListCustomerChoose from '../molecules/ListCustomerChoose/customerChoose'

export default function CustomerChoose() {
    return (
        <div className="container-fluid customerChoose">
            <h5 className="chooseTitle">Why Choose Product?</h5>
            <div className="container">
                <div className="row">
                    <ListCustomerChoose icon="/icons/arrowGreen.png" title="Special Business" desc="Product helps you see how many more days you need to work to reach your financial goal for the month and year." />
                    <ListCustomerChoose icon="/icons/waveBlue.png" title="Instant Result" desc="Product helps you see how many more days you need to work to reach your financial goal for the month and year." />
                    <ListCustomerChoose icon="/icons/loveRed.png" title="Fastest way to organize" desc="Product helps you see how many more days you need to work to reach your financial goal for the month and year." />
                </div>
            </div>
        </div>
    )
}
