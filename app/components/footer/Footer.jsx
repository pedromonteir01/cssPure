import Link from "next/link";
import Image from 'next/image'
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.inicial}>

            <div className={styles.img}>
                <Image src={"/bolabasquete.png"} width={150} height={150}></Image>
            </div>

            <div className={styles.containerlinks}>
                <p className={styles.titulo}>NOSSAS PÁGINAS</p>
                <Link href={'/'} className={styles.links}>HOME</Link>
                <Link href={'/'} className={styles.links}>CADASTRO</Link>
                <Link href={'/'} className={styles.links}>CONTADOR</Link>
            </div>
            <div className={styles.copyright}>
                <p className={styles.pcopyright}>©2023 copyright</p>
            </div>
        </footer>
    )
}

export default Footer;