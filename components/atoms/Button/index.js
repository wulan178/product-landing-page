import React from 'react'

export default function Button(
    {text, type}
) {
    if (type == 'signin') {
        return (
            <a className="nav-link px-4 py-2 btn-signin">{text}</a>
        )
    } else if (type == 'signup') {
        return (
            <a className="nav-link px-4 py-2 btn-signup text-white">{text}</a> 
        )
    } else if (type == 'order') {
        return (
            <a className="btn-order px-4 btn text-center">Order Now</a>
        )
    } else if ( type == 'touch' ) {
        return (
            <a href="" className="btn enterpriseBtn text-white">Get in touch with us</a>
        )
    } 
    
}
