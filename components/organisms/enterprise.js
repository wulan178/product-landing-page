import React from 'react'
import styles from '../../styles/Pricing.module.css'
import Button from '../atoms/Button'

export default function Enterprise() {
    return (
        <div className="container-fluid text-center enterprise">
            <h3 className={styles.enterpriseTitle}>ENTERPRISE</h3>
            <h2 className={styles.enterpriseSubtitle}>Are you interested in a custom-tailored plan?</h2>
            <p className={styles.enterpriseDesc}>Product is your perfect solution for working. Get started now for free</p>
            <Button type="touch" />
        </div>
    )
}
