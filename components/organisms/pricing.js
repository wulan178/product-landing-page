import React from 'react'
import ListPrices from '../molecules/ListPrices.js'
import styles from '../../styles/Pricing.module.css'

export default function Pricing() {
    return (
        <div className="container pricing text-center">
            <h3 className={styles.pricingTitle}>PRICING</h3>
            <h2 className={styles.pricingSubtitle}>Let’s get some real work done here.</h2>
            <p className={styles.pricingDesc}>Prodict is your perfect solution for working. Get started now for free</p>
            <div className="row price-row">
                <ListPrices title="Free" pricetag="0" operator="Only 2 Operators" />
                <ListPrices title="Standard" pricetag="5" operator="5+ Operators" />
                <ListPrices title="Premium" pricetag="10" operator="10+ Operators" />
            </div>
        </div>
    )
}
