import React from 'react'
import Image from 'next/image'

export default function ResourcesHero() {
    return (
        <div className="container resourcesHero">
            <div className="row">
                <div className="col-lg-6 pt-3">
                    <h1 className="resourcesHeroTitle">Great Business made with Product.</h1>
                    <p className="resourcesHeroDesc">Build better customer relationships easily messaging that provides a more personal experience for you and your customers.</p>
                    <div className="joinForm">
                        <input type="text" className="form-control bg-transparent border-0 my-auto" placeholder="Enter your email address" />
                        <a href="" className="btn text-white rounded-pill px-4 roundedBtn">Join Now</a>
                    </div>
                    <div className="joinMembers">
                        <div className="membersAva">
                            <div className="membersAva1">
                                <Image src="/images/resourcesAva1.png" width={50} height={50} />
                            </div>
                            <div className="membersAva2">
                                <Image src="/images/resourcesAva2.png" width={50} height={50} />
                            </div>
                            <div className="membersAva3">
                                <Image src="/images/resourcesAva3.png" width={50} height={50} className="membersAvaImg3" />
                            </div>
                        </div>
                        <div className="membersNum">
                            Join over <span className="membersNumber">4,000</span>+ other
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-end px-0">
                    <Image src="/images/resourcesHero.png" width={541} height={482} />
                </div>
            </div>
        </div>
    )
}
