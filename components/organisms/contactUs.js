import React from 'react'
import Image from 'next/image'

export default function ContactUs() {
    return (
        <div className="container contactUs">
            <h2 className="contactUsTitle">Contact Us</h2>
            <p className="mx-auto contactUsDesc">Need more detailed information? Get in touch with us.</p>
            <div className="container px-0 socmed">
                <Image src="/icons/ig.svg" width={50} height={50} />
                <Image src="/icons/fb.svg" width={50} height={50} />
                <Image src="/icons/twt.svg" width={50} height={50} />
            </div>
            <div className="container text-center">
                <Image src="/images/map.png" width={871} height={323} />
            </div>
            <div className="container sendMsg">
                <h6 className="text-center sendMsgTitle">Send a message</h6>
                <input type="text" id="name" className="form-control msgForm" placeholder="Your Name" />
                <input type="email" id="email" className="form-control msgForm" placeholder="Your Email" />
                <textarea id="textarea" className="form-control msgText" placeholder="Your Message"></textarea>
                <a href="" className="btn text-white rounded-pill px-3 roundedBtn sendBtn">Send</a>

            </div>
        </div>
    )
}
