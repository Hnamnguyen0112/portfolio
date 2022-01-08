import Head from 'next/head'
import { useEffect, useState } from 'react'
import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import Welcome from '../components/Welcome'
import Experience from '../components/Experience'
import 'devtools-detect'

export default function Home() {
  const [devtoolStatus, setDevtoolStatus] = useState(false)
  const project = [
    {
      name: 'Hidden Nginx',
      title: 'xdu2hnn6qkmv44kwgv74w6e5cgprdrmgab4lppgnh6nvub6vvd7vuiad.onion',
      description: 'A web application which deployed through a Tor hidden service on a Rasberry Pi server.',
      type: 'text'
    },
    {
      name: 'Go Generator',
      title: 'https://github.com/Hnamnguyen0112/GoGenerate',
      description: 'A PHP template generator written in Go.',
      type: 'git'
    },
    {
      name: 'Papaya Pro',
      title: 'https://pro.papaya.asia',
      description: 'Products that integrate applications from the largest and most reputable insurers.',
      type: 'web'
    },
  ]

  const experience = [
    {
      name: '.NFQ ASIA',
      date: 'Nov 2021 - present',
      position: 'Full-stack Developer',
      language: 'PHP/MySQL/Javascript development',
      skill: 'Symfony | VueJS | ReactJS | Docker | CI ',
      type: 'work'
    },
    {
      name: 'iDealogic',
      date: 'Jun 2021 - Oct 2021',
      position: 'Full-stack Developer',
      language: 'PHP/MySQL/Javascript development',
      skill: 'Lumen | ReactJS | Docker',
      type: 'work'
    },
    {
      name: 'Neolab VN',
      date: 'Jul 2020 - May 2021',
      position: 'Full-stack Developer',
      language: 'PHP/MySQL/Javascript development',
      skill: 'Laravel | VueJS | Docker',
      type: 'work'
    },
    {
      name: 'Ambition VN',
      date: 'May 2019 - June 2020',
      position: 'Full-stack Developer',
      language: 'PHP/MySQL/Javascript development',
      skill: 'Laravel | VueJS | Docker',
      type: 'work'
    },
    {
      name: 'LeanTech',
      date: 'Feb 2018 - Apr 2019',
      position: 'Intern & Developer',
      language: 'PHP/MySQL/Javascript development',
      skill: 'Golang | ReactJS | Docker',
      type: 'work'
    },
    {
      name: 'FPT APTECH',
      date: 'Feb 2017 - Aug 2018',
      position: 'Student',
      language: '',
      skill: '',
      type: 'education'
    },
  ]

  const handleDevtoolDetect = (event) => {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
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
        <Experience experience={experience} />
        <Footer />
      </div>
    </div>
  )
}
