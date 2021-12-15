import Navbar from '../components/organisms/navbar'
import OurClients from '../components/organisms/ourClients'
import Join from '../components/organisms/Join'
import Footer from '../components/organisms/footer'
import CustomerChoose from '../components/organisms/customerChoose'
import ProductWork from '../components/organisms/productWork'
import Button from '../components/atoms/Button'
import Offers from '../components/organisms/offers'

export default function CustomerPage() {
    return (
        <>
        <Navbar />
        <OurClients />
        <CustomerChoose />
        <h5 className="workTitle">How Product Work?</h5>
        <ProductWork content="left" img="/images/step1.png" step="1" title="Apply for a product" desc="Completing our easy step-by-step application form gives you access to multiple business with multiple products. We analyse your business through our proprietary credit analysis technology" />
        <ProductWork content="right" img="/images/step2.png" step="2" title="Pay fully refundable" desc="Product will contactting you instantly to receive payment of the Application Fee. if no offer of product is available, your fee will be fully refunded." />
        <ProductWork content="left" img="/images/step3.png" step="3" title="Completion" desc="Product will continue to liase between borrower and manager to procees and complete a quick and efficient settlement" />
        <div className="container text-center">
            <Button type="touch" />
        </div>
        <Offers />
        <Join />
        <Footer />
        </>
    )
}
