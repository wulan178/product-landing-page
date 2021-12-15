import React from 'react'
import styles from '../../styles/Pricing.module.css'
import ListQuestions from '../molecules/ListQuestions/pricingPage'

export default function Questions() {
    return (
        <div className="container mx-auto questions">
            <h2 className={styles.questionsSubtitle}>Frequently asked question</h2>
            <p className={styles.questionsDesc}>Something is not clear? You need help? Check our FAQ section</p>
            <div className="container">
                <div className="row mx-auto px-0 questionsBox">
                    <ListQuestions icon="/icons/plus_circle.svg" desc="What are my payment option?" />
                    <hr />
                    <ListQuestions icon="/icons/minus_circle.svg" desc="How can I invite collaborator to platform?" />
                    <p className={styles.questionsListDesc}>After creating your account you will have an oppurtunity to create your first project that will be associated withthe collaborators e-mail. An invitation  will be sent automatically. Then, invited user will have to confirm his account by e-mail and finish userd onboarding.</p>
                    <hr />
                    <ListQuestions icon="/icons/plus_circle.svg" desc="Can I upgrade my plan?" />
                    <hr />
                    <ListQuestions icon="/icons/plus_circle.svg" desc="Can I cancel my plan at anytime?" />
                    <hr />
                </div>
            </div>
        </div>
    )
}
