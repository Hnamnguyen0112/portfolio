import Head from 'next/head'
import { useEffect, useState } from 'react'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import Welcome from '../components/Welcome'
import 'devtools-detect'

export default function Home() {
  const [devtoolStatus, setDevtoolStatus] = useState(false)
  const project = [
    {
      name: 'Hidden Nginx',
      title: 'xdu2hnn6qkmv44kwgv74w6e5cgprdrmgab4lppgnh6nvub6vvd7vuiad.onion',
      description: 'A web application which deployed through a Tor hidden service on a Rasberry Pi server.',
    },
    {
      name: 'Go Generator',
      title: 'https://github.com/Hnamnguyen0112/GoGenerate',
      description: 'A PHP template generator written in Go.',
    },
  ]

  const handleDevtoolDetect = (event) => {
    if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
      setDevtoolStatus(event.detail.isOpen)
    }
  }

  useEffect(() => {
    window.addEventListener('devtoolschange', handleDevtoolDetect)
    return () => {
      window.removeEventListener('devtoolschange', handleDevtoolDetect)
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Nam Nguyen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={devtoolStatus ? 'hidden' : 'block'}>
        <MainMenu />
        <Welcome />
        <AboutMe />
        <Project project={project} />
        <Footer />
      </div>
    </div>
  )
}
