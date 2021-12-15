import React from 'react'
import Image from 'next/image'
import Button from '../atoms/Button'

export default function Footer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="footer-brand">
                        <Image src="/icons/logo.svg" width={32} height={29} />
                        <h5 className="footer-product my-auto">Product</h5>
                    </div>
                    <div className="socmed">
                        <div className="socmed-icon">
                            <Image className="mr-3" src="/icons/ig.svg" width={40} height={40} />
                        </div>
                        <div className="socmed-icon">
                            <Image className="mr-3" src="/icons/fb.svg" width={40} height={40} />
                        </div>
                        <div className="socmed-icon">
                            <Image className="mr-3" src="/icons/twt.svg" width={40} height={40} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer-nav">
                        <ul>
                            <li><span className="fw-bold">Resource</span></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="footer-nav">
                        <ul>
                            <li><span className="fw-bold">Legal Stuff</span></li>
                            <li><a href="">Disclaimer</a></li>
                            <li><a href="">Financing</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <p className="footer-desc">knowing you're always on the best energy deal.</p>
                    <input type="text" className="form-control shadow" id="signup" />
                    <label className="btn px-0" for="signup">
                        <Button type="signup" text="Sign up Now" />
                    </label>
                </div>
            </div>
            <div className="copyright text-center">Made With Love By Figmaland All Right Reserved
            </div>
        </div>
    )
}
