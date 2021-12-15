import Image from "next/image"
import React from 'react'
import ListQuick from "../molecules/ListQuick"

export default function Quick() {
    return (
        <div className="container-fluid text-center quick-container">
            <h1 className="quick-title text-center">Quick & Easy Process</h1>
            <h6 className="quick-desc mx-auto text-center">Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?</h6>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-5 pl-5">
                    <ListQuick ava="/images/Avator1.svg" position="left" desc="I can take care of your pitch"/>
                    <ListQuick ava="/images/Avator2.svg" position="right" desc="I can design you website"/>
                </div>
                <div className="col-lg-5 pl-5">
                    <ListQuick ava="/images/Avator4.svg" position="right" desc="I can prototype your app"/>
                    <ListQuick ava="/images/Avator3.svg" position="left" desc="I can help marketing strategy"/>
                </div>
                <div className="col-lg-1"></div>
            </div>
            <a className="btn btn-quick text-white" href="">Contact our expert</a> 
        </div>
    )
}
