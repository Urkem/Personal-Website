import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Uroš Milovanović | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <footer>
        <a
          href="/Uros_Milovanovic_CV.pdf"
          target="_blank"
        >
          <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </div>
  )
}
