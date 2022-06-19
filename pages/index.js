import { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import Dialog from '../components/Dialog'

import 'devtools-detect'
import NextLink from '../components/NextLink'
import Header from '../components/Header'

const experience = [
  {
    name: '.NFQ ASIA',
    date: 'Jun 2021 - Present',
    position: 'Full-stack Developer',
    language: 'PHP/MySQL/Javascript development',
    skill: 'Symfony | VueJS | ReactJS | Docker | CI ',
    type: 'work',
  },
  {
    name: 'Neolab VN',
    date: 'Jul 2020 - May 2021',
    position: 'Full-stack Developer',
    language: 'PHP/MySQL/Javascript development',
    skill: 'Laravel | VueJS | Docker',
    type: 'work',
  },
  {
    name: 'Ambition VN',
    date: 'May 2019 - June 2020',
    position: 'Full-stack Developer',
    language: 'PHP/MySQL/Javascript development',
    skill: 'Laravel | VueJS | Docker',
    type: 'work',
  },
  {
    name: 'LeanTech',
    date: 'Feb 2018 - Apr 2019',
    position: 'Intern & Developer',
    language: 'PHP/MySQL/Javascript development',
    skill: 'Golang | ReactJS | Docker',
    type: 'work',
  },
  {
    name: 'FPT APTECH',
    date: 'Feb 2017 - Aug 2018',
    position: 'IT Student',
    language: '',
    skill: '',
    type: 'education',
  },
]

const skill = {
  tech: [
    { icon: 'devicon-go-plain', name: 'Go' },
    { icon: 'devicon-laravel-plain', name: 'Laravel' },
    { icon: 'devicon-mysql-plain', name: 'MySQL' },
    { icon: 'devicon-nestjs-plain', name: 'NestJS' },
    { icon: 'devicon-nodejs-plain', name: 'NodeJS' },
    { icon: 'devicon-nginx-original', name: 'Nginx' },
    { icon: 'devicon-react-original', name: 'ReactJS' },
    { icon: 'devicon-tailwindcss-plain', name: 'Tailwindcss' },
    { icon: 'devicon-storybook-plain', name: 'Storybook' },
    { icon: 'devicon-vuejs-plain', name: 'VueJS' },
    { icon: 'devicon-graphql-plain', name: 'GraphQL' },
  ],
  tool: [
    { icon: 'devicon-azure-plain', name: 'Azure Devops' },
    { icon: 'devicon-docker-plain', name: 'Docker' },
    { icon: 'devicon-git-plain', name: 'Git' },
    { icon: 'devicon-jira-plain', name: 'Jira' },
    { icon: 'devicon-ubuntu-plain', name: 'Ubuntu' },
    { icon: 'devicon-kubernetes-plain', name: 'Kubernetes' },
    { icon: 'devicon-amazonwebservices-original colored', name: 'AWS' },
    { icon: 'devicon-grafana-original colored', name: 'Grafana' },
  ],
}

export default function Home() {
  const [devtoolStatus, setDevtoolStatus] = useState(false)

  const handleDevtoolDetect = (event) => {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      // setDevtoolStatus(event.detail.isOpen)
    }
  }

  useEffect(() => {
    window.addEventListener('devtoolschange', handleDevtoolDetect)
    return () => {
      window.removeEventListener('devtoolschange', handleDevtoolDetect)
    }
  }, [])

  return (
    <div className='max-w-screen min-h-screen bg-gray-100'>
      <Head>
        <title>Nam Nguyen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&amp;display=swap" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Nam Nguyen Portfolio" />
        <meta property="og:image" content="https://namnguyen.vercel.app/bongo-trim.png" />
        <meta property="og:description" content="Thanks for coming" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://namnguyen.vercel.app" />
      </Head>
      {!devtoolStatus &&
      <>
        <main>
          <Header />
          <AboutMe />
          <Skill skill={skill} />
          <Contact />
        </main>
        <Footer />
        <Dialog />
      </>}
    </div>
  )
}
