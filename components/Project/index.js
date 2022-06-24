export default function Project(props) {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
      {props.project &&
        props.project.map((item, key) => (
          <div key={key} className="w-full p-6 rounded shadow-lg bg-[#022E53]">
            <div id="header" className="flex items-center mb-4">
              <div className="w-20 rounded-full border-4 pt-1 border-gray-300">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  shapeRendering="geometricPrecision"
                  viewBox="0 0 24 24"
                  className="contact"
                  height="70"
                  width="70"
                  style={{ color: '#fff' }}
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </div>
              <div
                id="header-text"
                className="leading-5 ml-6 w-2/3 break-words flex flex-wrap"
              >
                <h4
                  id="name"
                  className="w-full text-xl font-semibold text-[#55FCD3]"
                >
                  {item.name}
                </h4>
                <h4 id="name" className="w-full text-sm font-medium">
                  {item.stack}
                </h4>
              </div>
            </div>
            <div className="flex flex-wrap">
              <q className="italic text-white w-full">{item.description}</q>
              {item.type === 'git' && (
                <a
                  href={item.url}
                  target="_blank"
                  className="bg-white mt-3 border-2 border-white rounded-3xl p-2 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-black"
                  rel="noreferrer"
                >
                  Github
                </a>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}
