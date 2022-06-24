import React from 'react';
import moment from 'moment';

function FirstBlock() {
  return (
    <div className="w-1/2 mx-auto my-auto">
      <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
        <div
          className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
          id="headerTerminal"
        >
          <div
            className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
            id="closebtn"
          ></div>
          <div
            className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
            id="minbtn"
          ></div>
          <div
            className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
            id="maxbtn"
          ></div>
          <div className="mx-auto pr-16" id="terminaltitle">
            <p className="text-center text-sm">iTerm2</p>
          </div>
        </div>
        <div
          className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black"
          id="console"
        >
          <p className="pb-1">
            Last login: ${moment().format('MMMM Do YYYY, h:mm:ss a')}
          </p>
          <p className="pb-1">namnguyen:~ admin$ ./init.sh</p>
          <p className="pb-1">Happy Hacking!</p>
          <p className="pb-1">...</p>
        </div>
      </div>
    </div>
  );
}

export const MemoizedFirstBlock = React.memo(FirstBlock);
