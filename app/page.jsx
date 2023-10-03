
import styles from './page.module.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <h1>BEM VINDO AO NOSSO SITE!</h1>
        <div className={styles.container2}>
          <br></br>
          <h2>Conheça a nossa equipe:</h2>
          <br></br>
          <h3> Os membros são:</h3>
          <p>  Ana Julia de 17 anos</p>
          <p>  Felipe Miotto de 17 anos</p>
          <p>  João Pedro de 16 anos</p>
          <p>  Marcelo Gabriel de 16 anos</p>
          <p>  Pedro Monteiro de 17 anos</p>
          <p>  Raissa Godoy de 18 anos</p>
          <h3>Espero que gostem de nosso site :)</h3>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
