import Image from "next/image"
import styles from "../../../styles/Pricing.module.css"

export default function ListPricing(
    {icon, title, desc}
) {
    return (
        <div className={styles.pricingList}>
            <div className={styles.pricingListTitle}>
                <Image src={icon} width={50} height={50} />   
                <h6 className={styles.pricingListSubtitle}>{title}</h6> 
            </div>  
            <p className={styles.pricingListDesc}>{desc}</p>      
        </div>
    )
}
