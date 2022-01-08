export default function Project(props) {
  return (
    <div className="max-w-5xl mx-auto mt-20">
      <p className="text-3xl">#Project</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {props.project && props.project.map((item, key) =>
          <div key={key} className="w-full bg-black border border-white p-6 rounded-lg shadow-lg">
            <div id="header" className="flex items-center mb-4">
              <div className="w-20 rounded-full border-2 border-gray-300">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                     shapeRendering="geometricPrecision" viewBox="0 0 24 24" className="contact" height="76"
                     width="76"
                     style={{ color: '#fff' }}>
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </div>
              <div id="header-text" className="leading-5 ml-6 w-2/3 break-words flex flex-wrap">
                <h4 id="name" className="w-full text-xl font-semibold">{item.name}</h4>
              </div>
            </div>
            <div id="quote">
              <q className="italic text-white">{item.description}</q>
            </div>
          </div>,
        )}
      </div>
    </div>
  )
}