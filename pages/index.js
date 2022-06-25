import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import Skill from '../components/Skill';
import Layout from '../layouts';

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
];

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
};

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <Skill skill={skill} />
      <Contact />
    </Layout>
  );
}
