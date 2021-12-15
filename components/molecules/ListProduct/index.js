import Image from 'next/image'

export default function ListProduct(
    {icon, title, subtitle}
) {
    return (
        <div className="col-lg-3">
            <Image src={icon} width={51} height={50} />
            <h6 className="product-title">{title}</h6>
            <p className="product-desc">{subtitle}</p>
        </div>
    )
}
