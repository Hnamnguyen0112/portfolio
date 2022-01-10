import { useContext } from 'react'
import { AppContext } from '../../context/state'

export default function Skill(props) {
  const { mode } = useContext(AppContext)
  const { tech, tool } = props.skill

  return (
    <div className={'rounded-lg font-semibold text-white px-5 py-14 ' + (mode ? '' : 'bg-sky-300')}>
      <div className="flex flex-wrap">
        <p className="w-full text-center text-2xl mb-5">Tool I use</p>
        <div className="w-full justify-center flex flex-wrap gap-x-4 gap-y-2 mb-10">
          {tool && !!tool.length && tool.map((item, key) =>
            <span key={key} className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex bg-gray-100 py-2 px-4 rounded-xl text-gray-500 align-middle">
              <i className={"text-3xl " + item.icon}/>
              <p className={"m-auto text-md ml-2"}>{item.name}</p>
            </span>
          )}
        </div>
        <p className="w-full text-center text-2xl mb-5">Tech I know</p>
        <div className="w-full justify-center flex flex-wrap gap-x-4 gap-y-2">
          {tech && !!tech.length && tech.map((item, key) =>
            <span key={key} className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex bg-gray-100 py-2 px-4 rounded-xl text-gray-500 align-middle">
              <i className={"text-3xl " + item.icon}/>
              <p className={"m-auto text-md ml-2"}>{item.name}</p>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}