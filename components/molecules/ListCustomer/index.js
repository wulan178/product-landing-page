import Image from 'next/image'

export default function ListCustomers(
    {icon, desc}
) {
    return (
        <>
        <div className="row list-customers mx-0">
            <div className="col-lg-1 pt-1 px-0">
                <Image src={icon} width={35} height={35} />
            </div>
            <div className="col-lg-11 customers-desc">{desc}</div>
        </div>
        </>
    )
}