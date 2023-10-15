
"use client"

import React from 'react'
import styles from "../Style/pdfDownload.module.css"
import signalimg from "../ImageContainer/logos_google-analytics.svg"
import Image from 'next/image';
let pdfData=[
    {
      link:'http://3.135.232.212/pages/download/2023-proxy-statement-finalvF.pdf',
      title:'2023 proxy statement final vl.pdf'
    },
    {
      link:'http://3.135.232.212/pages/download/2023-proxy-statement-finalvF.pdf',
      title:'Asbury Q2.pdf'
    }, {
      link:'http://3.135.232.212/pages/download/2023-proxy-statement-finalvF.pdf',
      title:'Group Automotive Q2.pdf'
    }, 
    {
      link:'http://3.135.232.212/pages/download/2023-proxy-statement-finalvF.pdf',
      title:'Lithia Q2.pdf'
    },
    {
      link:'http://3.135.232.212/pages/download/2023-proxy-statement-finalvF.pdf',
      title:'Lithia Q2.pdf'
    },
    {
      link:'http://3.135.232.212/pages/download/2023-proxy-statement-finalvF.pdf',
      title:'Programming Q2.pdf'
    },
    {
      link:'http://3.135.232.212/pages/download/2023-proxy-statement-finalvF.pdf',
      title:'Downloading Q2.pdf'
    }

  ]
export const PdfDownload = () => {
  return (
    <div className={styles.dataConnectionsMain}>
      <div  className={`font-weight-bold text-dark fs-7 ${[styles.dataConnectionsHeading]}`}>
        <h4 className={styles.maintext}> <b>Data Connections</b> </h4>       

      </div>
        {
            pdfData.map((item)=>{
                return <div className={styles.listcontainer}>
                            <a  className={styles.listContainerAstyle} href={item.link}   download={item.link}  >
                              <div className={styles.atag} >
                                  <div  className={styles.iconSignal}>
                                    {/* <img src="http://3.135.232.212/images/icon1.png" alt="" /> */}
                                    <Image src={signalimg} alt="My logo Image" width={14} height={16} style={{color:'black'}} />

                                  </div>
                                    <p  className={styles.title} >{item.title}</p>
                              </div>
                              
                            </a>
                            
                    </div>
            })
        }
    </div>
  )
}
