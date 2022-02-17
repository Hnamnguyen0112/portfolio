import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'
import { Tab } from '@headlessui/react'

import MainMenu from '../components/MainMenu'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import Project from '../components/Project'
import Welcome from '../components/Welcome'
import Experience from '../components/Experience'
import Mode from '../components/Mode'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import Dialog from '../components/Dialog'
import { AppContext } from '../context/state'

import 'devtools-detect'

const project = [
  {
    name: 'Hidden Nginx',
    stack: 'Nginx | Raspberry Pi | HTML',
    description: 'A web application which deployed through a Tor hidden service on a Rasberry Pi server.',
    type: 'text',
  },
  {
    name: 'Go Generator',
    stack: 'Go',
    description: 'A PHP template generator written in Go. (Deprecated)',
    type: 'git',
    url: 'https://github.com/Hnamnguyen0112/GoGenerate',
  },
  {
    name: 'Ecommerce Boilerplate',
    stack: 'ReactJS | Tailwind',
    description: 'A React boilerplate for Ecommerce app using TailwindCSS',
    type: 'git',
    url: 'https://github.com/Hnamnguyen0112/ecommerce-react',
  },
  {
    name: 'Storybook Boilerplate',
    stack: 'NextJS | Storybook | Tailwind',
    description: 'A Storybook boilerplate base on NextJS framework using PlopJS generator',
    type: 'git',
    url: 'https://github.com/Hnamnguyen0112/storybook-generator',
  },
  {
    name: 'NestJS Graphql CQRS Starter (WIP)',
    stack: 'NestJS | GraphQL',
    description: 'A NestJS starter based on CQRS architecture',
    type: 'git',
    url: 'https://github.com/Hnamnguyen0112/nestjs-graphql-cqrs-starter',
  },
]

const experience = [
  {
    name: '.NFQ ASIA',
    date: 'Nov 2021 - present',
    position: 'Full-stack Developer',
    language: 'PHP/MySQL/Javascript development',
    skill: 'Symfony | VueJS | ReactJS | Docker | CI ',
    type: 'work',
  },
  {
    name: 'iDealogic',
    date: 'Jun 2021 - Oct 2021',
    position: 'Full-stack Developer',
    language: 'PHP/MySQL/Javascript development',
    skill: 'Lumen | ReactJS | Docker',
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
    { icon: 'devicon-typescript-plain', name: 'Typescript' },
    { icon: 'devicon-html5-plain', name: 'HTML' },
    { icon: 'devicon-go-plain', name: 'Go' },
    { icon: 'devicon-css3-plain', name: 'CSS' },
    { icon: 'devicon-javascript-plain', name: 'Javascript' },
    { icon: 'devicon-laravel-plain', name: 'Laravel' },
    { icon: 'devicon-mysql-plain', name: 'MySQL' },
    { icon: 'devicon-nestjs-plain', name: 'NestJS' },
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
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const [devtoolStatus, setDevtoolStatus] = useState(false)
  const [isWeb, setIsWeb] = useState(false)
  const [categories] = useState(['Project', 'Experience', 'Skill'])
  const { mode } = useContext(AppContext)

  const handleDevtoolDetect = (event) => {
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
      setDevtoolStatus(event.detail.isOpen)
    }
  }

  useEffect(() => {
    setIsWeb(!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent))
    window.addEventListener('devtoolschange', handleDevtoolDetect)
    return () => {
      window.removeEventListener('devtoolschange', handleDevtoolDetect)
    }
  }, [])

  return (
    <div className='max-w-screen min-h-screen px-5 pt-40  bg-[#072740] text-white flex flex-col'>
      <Head>
        <title>Nam Nguyen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Nam Nguyen Portfolio" />
        <meta property="og:image" content="https://namnguyen.vercel.app/bongo-trim.png" />
        <meta property="og:description" content="Thanks for coming" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://namnguyen.vercel.app" />
      </Head>
      {!devtoolStatus &&
      <>
        <main className={'flex-grow'}>
          <Mode />
          <MainMenu />
          {mode || <Welcome />}
          {mode || <AboutMe />}
          {mode || <div className="max-w-4xl mx-auto px-2 py-16 sm:px-0">
            <Tab.Group>
              <Tab.List className={'flex p-1 space-x-1 rounded-xl'}>
                {categories.map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full py-2.5 text-base leading-5 font-semibold text-lg rounded-lg focus:outline-none transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300',
                        selected
                          ? ('shadow-lg bg-[#022E53]')
                          : 'text-white hover:bg-white hover:text-black',
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel className={'rounded-xl px-3 focus:outline-none'}>
                  <Project project={project} />
                </Tab.Panel>
                <Tab.Panel className={'rounded-xl px-3 focus:outline-none'}>
                  <Experience experience={experience} animate={isWeb} />
                </Tab.Panel>
                <Tab.Panel className={'rounded-xl px-3 focus:outline-none'}>
                  <Skill skill={skill} />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>}
          {mode && <Contact />}
        </main>
        <Footer />
        <Dialog />
      </>}
    </div>
  )
}
