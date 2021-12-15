import Image from 'next/image'
import Button from '../atoms/Button'

export default function Navbar() {
    
    return (
        <nav className="container navbar navbar-expand-lg">
            <div className="container-fluid py-auto">
                <a className="navbar-brand" href="">
                    <Image className="logo" src="/icons/logo.svg" width={40} height={36} />
                    <h4 className="brand my-auto">Product</h4>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link active" aria-current="page" href="#">Product</a>
                        <a className="nav-link" href="customerPage">Customers</a>
                        <a className="nav-link" href="pricingPage">Pricing</a>
                        <a className="nav-link" href="resourcesPage">Resources</a>
                        <Button text="Sign In" type="signin" />
                        <Button text="Sign Up" type="signup" />
                        <Image src="/icons/signin-right.svg" width={24} height={24} />
                    </div>
                </div>
            </div>
        </nav>
    )
}
