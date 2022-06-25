import { useContext } from 'react';
import { Switch } from '@headlessui/react';

import { AppContext } from '../../context/state';

export default function Mode() {
  const { mode, setMode } = useContext(AppContext);

  return (
    <div className="absolute top-10 left-0 ml-5 flex">
      <Switch
        checked={mode}
        onChange={setMode}
        className={`bg-slate-50 relative inline-flex flex-shrink-0 h-[32px] w-[68px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${mode ? 'translate-x-10' : 'translate-x-1'}
            bg-[#072740] translate-y-1 pointer-events-none inline-block h-[20px] w-[20px] rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
      <p className={'ml-3 m-auto hidden sm:block'}>
        {mode ? 'Profile?' : 'Contact?'}
      </p>
    </div>
  );
}
