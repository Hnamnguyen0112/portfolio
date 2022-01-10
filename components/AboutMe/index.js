import { useContext } from 'react'
import { AppContext } from '../../context/state'

export default function AboutMe() {
  const { mode } = useContext(AppContext)

  return (
    <div id="about-me"
         className={'mt-20 mx-auto max-w-xl min-w-0 p-4 rounded-lg border-4 ' + (mode ? 'text-white border-white bg-black' : 'border-sky-200 bg-sky-100')}>
      <p className="text-xl mb-4 font-semibold">#About me</p>
      <p>
        I&apos;m building diverse & highly accessible applications for everyone, also working as a Software Engineer
        in Vietnam.
      </p>
    </div>
  )
}