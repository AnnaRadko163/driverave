"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import styles from "./page.module.css";

export default function Home() {
  const {push} = useRouter();
  const [close, setClose] = useState(false)
  function closeY(){
    setClose(true)
    setTimeout(push('/main'), 1000) 
  }
  return (
    <main onClick={() => closeY()} className={ `${styles.poster} ${ close ? 'close' : ''}`}>
      <div className={styles.poster__wrapper}>
        <Image
          src="./phone.png"
          alt="phone"
          className={styles.poster__phone}
          fill={true}
          style={{top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
          />
        <div className={styles.poster__titleWrapper}>
          <Image
            src="./DRIVERAVE.png"
            alt="title_driverave"
            className={styles.poster__title}
            fill={true}
            style={{top: '40%'}}  
            />
        </div>
      </div>
    </main>

  );
}
