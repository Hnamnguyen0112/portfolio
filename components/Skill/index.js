export default function Skill(props) {
  const { tech, tool } = props.skill

  return (
    <div className='rounded-lg font-semibold text-white px-5 py-10 shadow-lg bg-[#022E53]'>
      <div className="flex flex-wrap">
        <p className='w-full text-center text-2xl mb-5 text-[#55FCD3]'>Tool I use</p>
        <div className="w-full justify-center flex flex-wrap gap-x-4 gap-y-2 mb-10">
          {tool && !!tool.length && tool.map((item, key) =>
            <span key={key} className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex py-2 px-4 rounded-xl align-middle'>
              <i className={"text-3xl colored " + item.icon}/>
              <p className={"m-auto text-md ml-2"}>{item.name}</p>
            </span>
          )}
        </div>
        <p className='w-full text-center text-2xl mb-5 text-[#55FCD3]'>Tech I know</p>
        <div className="w-full justify-center flex flex-wrap gap-x-4 gap-y-2">
          {tech && !!tech.length && tech.map((item, key) =>
            <span key={key} className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex py-2 px-4 rounded-xl align-middle'>
              <i className={"text-3xl colored " + item.icon}/>
              <p className={"m-auto text-md ml-2"}>{item.name}</p>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}