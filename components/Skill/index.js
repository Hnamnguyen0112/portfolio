export default function Skill(props) {
  const { tech, tool } = props.skill;

  return (
    <div className="my-20 mx-auto max-w-6xl min-w-0 rounded-lg bg-transparent flex flex-col lg:flex-row">
      <div className="basis-1/3 px-5 xl:p-0 animate-fade-in-left">
        <p className="text-4xl mb-4 font-normal text-black">My Career So Far</p>
        <p className="font-light tracking-wide leading-relaxed text-justify">
          As the Co-Founder of Annotab AI, an advanced AI Annotation Tool, I
          leads the development of transformative solutions in data annotation.
          <br />
          <br />
          Alongside this entrepreneurial role, I serves as a Lead Software
          Engineer for several side projects, demonstrating a deep passion for
          technology and innovation.
          <br />
          <br /> Known for pushing the boundaries of the digital landscape, I
          combines technical expertise with visionary leadership to drive
          success across various ventures.
        </p>
      </div>
      <div className="basis-2/3 p-4 animate-fade-in-right my-auto">
        <div className="w-full justify-center flex flex-wrap gap-x-4 gap-y-2">
          {tool &&
            !!tool.length &&
            tool.map((item, key) => (
              <span
                key={key}
                className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex py-2 px-4 rounded-xl align-middle"
              >
                <i className={'text-3xl colored ' + item.icon} />
                <p className={'m-auto text-md ml-2'}>{item.name}</p>
              </span>
            ))}
          {tech &&
            !!tech.length &&
            tech.map((item, key) => (
              <span
                key={key}
                className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex py-2 px-4 rounded-xl align-middle"
              >
                <i className={'text-3xl colored ' + item.icon} />
                <p className={'m-auto text-md ml-2'}>{item.name}</p>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
