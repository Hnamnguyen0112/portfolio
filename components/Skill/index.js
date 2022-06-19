export default function Skill(props) {
  const { tech, tool } = props.skill

  return (
    <div className='my-20 mx-auto max-w-6xl min-w-0 rounded-lg bg-transparent flex flex-col lg:flex-row'>
      <div className="basis-1/3 px-5 xl:p-0">
        <p className='text-4xl mb-4 font-normal text-black'>My Career So Far</p>
        <p className="font-light tracking-wide leading-relaxed text-justify">
          Always up for a challenge, I have worked for lean companies. With over years of experience, I worked my way up to Fullstack Engineer at B13 Technology where I developed 10+ webapps. Currently, I build and develop web applications at NFQ.
        </p>
      </div>
      <div className="basis-2/3 p-4">
        <div className="w-full justify-center flex flex-wrap gap-x-4 gap-y-2">
          {tool && !!tool.length && tool.map((item, key) =>
            <span key={key} className='transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex py-2 px-4 rounded-xl align-middle'>
              <i className={"text-3xl colored " + item.icon}/>
              <p className={"m-auto text-md ml-2"}>{item.name}</p>
            </span>
          )}
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
