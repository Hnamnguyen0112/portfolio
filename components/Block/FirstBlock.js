export function FirstBlock() {
  return (
    <div className="w-full mx-auto rounded-2xl bg-[#022E53] p-5 text-white font-light mb-6 lg:max-w-home-column">
      <div className="w-full flex mb-4 items-center">
        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
          <img src="https://i.pravatar.cc/100?img=1" alt="" />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-sm uppercase text-white">Kenzie Edgar.</h6>
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm leading-tight"><span
          className="text-lg leading-none italic font-bold text-gray-400 mr-1">&quot;</span>Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi
          architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span
            className="text-lg leading-none italic font-bold text-gray-400 ml-1">&quot;</span></p>
      </div>
    </div>
  )
}