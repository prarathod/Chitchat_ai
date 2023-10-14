"use client"
import React from 'react'
import styles from "../Style/mostaskques.module.css"
import '../Style/font.module.css'

const dummyData=[
    {
        question:'What is the companys exposure to interest rate risk and foreign currency exchange rate risk'
    },
    {
        question:'What is the companys exposure to interest rate risk and foreign currency exchange rate risk'
    },
    {
        question:'What is the companys exposure to interest rate risk and foreign currency exchange rate risk'
    },
    {
        question:'What is the companys exposure to interest rate risk and foreign currency exchange rate risk'
    },
    {
        question:'What is the companys exposure to interest rate risk and foreign currency exchange rate risk'
    },
    {
        question:'What is the companys exposure to interest rate risk and foreign currency exchange rate risk'
    },
    {
        question:'What is the companys exposure to interest rate risk and foreign currency exchange rate risk'
    },
    {
        question:'What is the companys exposure to interest rate risk and foreign currency exchange rate risk'
    },
    {
        question:'What is the companys exposure to interest rate risk and foreign currency exchange rate risk'
    },
    {
        question:'What is the companys exposure to interest rate risk and foreign currency exchange rate risk'
    },
]

export const MostAskQues = () => {
  return (
    <div className={styles.pdfBox} >
        <h3 className={styles.pdfheading} >You May Ask?</h3>
        {
            dummyData.map((item)=>{
                return <div className={styles.boxwrapper}>
                            <p className={styles.textinsidebox} >{item.question}</p>
                      </div>
            })
        }
    </div>
  )
}
