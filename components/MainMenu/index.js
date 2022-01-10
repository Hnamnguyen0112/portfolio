import { useContext } from 'react'
import { AppContext } from '../../context/state'

export default function MainMenu() {
  const { mode } = useContext(AppContext)

  return (
    <div className="absolute top-10 right-0 mr-5 flex gap-x-4">
      <a href="https://github.com/Hnamnguyen0112" rel="noreferrer" target="_blank">
        <i className={'text-3xl devicon-github-original ' + (mode ? '' : 'colored')}/>
      </a>
      <a href="https://www.linkedin.com/in/namnguyen0112/" rel="noreferrer" target="_blank">
        <i className="text-3xl devicon-linkedin-plain colored"/>
      </a>
      <a href="https://twitter.com/_alexnguyennn" rel="noreferrer" target="_blank">
        <i className="text-3xl devicon-twitter-original colored"/>
      </a>
      <a href="mailto:alexnguyenth96@gmail.com" rel="noreferrer" target="_blank">
        <i className="text-3xl devicon-google-plain colored"/>
      </a>
    </div>
  )
}