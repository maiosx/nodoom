import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>work in progress</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="nodoom" />
        <p className="description">
          This is an upcoming app.
        </p>
      </main>

      <Footer />
    </div>
  )
}
