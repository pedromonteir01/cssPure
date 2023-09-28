import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
function Header() {
  return (
    <div className={styles.header}>
        <div>
            <Image src={'/baska.png'} width={58} height={58} ></Image>
        </div>
        <div className={styles.links}>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Home</Link>
        </div>
    </div>
  )
}

export default Header