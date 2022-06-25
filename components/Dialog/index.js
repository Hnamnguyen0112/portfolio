import { Fragment, useContext } from 'react';
import { Dialog as TDialog, Transition } from '@headlessui/react';

import { AppContext } from '../../context/state';

export default function Dialog() {
  const { dialog, setDialog, dialogContent } = useContext(AppContext);

  return (
    <Transition appear show={dialog} as={Fragment}>
      <TDialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setDialog(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <TDialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <TDialog.Title
                as="h3"
                className="text-xl font-semibold leading-6 text-gray-900"
              >
                {dialogContent.title}
              </TDialog.Title>
              <div className="mt-2">
                <p className="text-md text-gray-500">{dialogContent.message}</p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={() => setDialog(false)}
                >
                  {dialogContent.close}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </TDialog>
    </Transition>
  );
}
