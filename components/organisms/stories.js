import React from 'react'
import Image from 'next/image'
import ListStories from '../molecules/ListStories/storiesPage'

export default function Stories() {
    return (
        <div className="container stories">
            <h2 className="storiesTitle">Latest Stories</h2>
            <p className="storiesDesc">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className="row storiesRow">
                <ListStories cover="/images/stories1.png" owner="Wahid Ari" date="03 March 2019" title="Increasing Prosperity With Positive Thinking" />
                <ListStories cover="/images/stories2.png" owner="Wahid Ari" date="03 March 2019" title="Motivation Is The First Step To Success" />
                <ListStories cover="/images/stories3.png" owner="Wahid Ari" date="03 March 2019" title="Success Steps For Your Personal Or Business" />
                <ListStories cover="/images/stories4.png" owner="Wahid Ari" date="03 March 2019" title="Increasing Prosperity With Positive Thinking" />
                <ListStories cover="/images/stories5.png" owner="Wahid Ari" date="03 March 2019" title="Motivation Is The First Step To Success" />
                <ListStories cover="/images/stories6.png" owner="Wahid Ari" date="03 March 2019" title="Success Steps For Your Personal Or Business" />
            </div>
            <div className="moreStories mx-auto">
                <a href="" className="moreStories">
                    <p className="text-center my-auto">More Stories</p>
                    <Image src="/icons/moreArrow.svg" width={20} height={20} />
                </a>
            </div>
        </div>
    )
}
