import React from 'react'
import Image from 'next/image'
import ListPricing from '../molecules/ListPricing/pricingPage'
import styles from '../../styles/Pricing.module.css'

export default function pricingProducts() {
    return (
        <div className="container-fluid pricingProducts">
            <h2 className={styles.pricingProductsSubtitle}>Product is being used with great effects alongside:</h2>
            <div className="row">
                <div className="col-lg-6 text-center">
                    <Image src="/images/pricing.svg" width={528} height={392} />
                </div>
                <div className="col-lg-6">
                    <ListPricing icon="/icons/enterpreneur.svg" title="Enterpreneur" desc="Product is a great way to help medium and samall enterprise owners achieve their goals" />
                    <ListPricing icon="/icons/accountants.svg" title="Accountants" desc="Whether you are working on contract with clients, or on other key accounting documents, Product is for you" />
                    <ListPricing icon="/icons/universities.svg" title="Universities" desc="Organize university projects and have documents easily graded online with Product" />
                </div>
            </div>
        </div>
    )
}
