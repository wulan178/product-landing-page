import Enterprise from '../components/organisms/enterprise'
import Navbar from '../components/organisms/navbar'
import Pricing from '../components/organisms/pricing'
import PricingProduct from '../components/organisms/pricingProduct'
import Questions from '../components/organisms/questions'
import Join from '../components/organisms/Join'
import Footer from '../components/organisms/footer'

export default function PricingPage() {
    return (
        <>
        <Navbar/>
        <Pricing />
        <Enterprise />
        <PricingProduct />
        <Questions />
        <Join />
        <Footer />
        </>
    )
}
