import React from 'react'
import ContactUs from '../components/organisms/contactUs'
import Navbar from '../components/organisms/navbar'
import ResourcesHero from '../components/organisms/resourcesHero'
import Stories from '../components/organisms/stories'
import Footer from '../components/organisms/footer'

export default function ResourcesPage() {
    return (
        <>
        <Navbar />
        <ResourcesHero />
        <Stories />
        <ContactUs />
        <Footer />
        </>
    )
}
