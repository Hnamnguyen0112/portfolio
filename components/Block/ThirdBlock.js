import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export function ThirdBlock() {
  return (
    <div className="w-full flex-grow p-2 mx-auto rounded-2xl lg:max-w-home-column">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-[#55FCD3] bg-[#022E53] rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>What is your refund policy?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'transform rotate-180' : ''
                } w-5 h-5 text-[#55FCD3]`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              If you&apos;re unhappy with your purchase for any reason, email us
              within 90 days and we&apos;ll refund you in full, no questions asked.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button
              className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-[#55FCD3] bg-[#022E53] rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
              <span>Do you offer technical support?</span>
              <ChevronUpIcon
                className={`${
                  open ? 'transform rotate-180' : ''
                } w-5 h-5 text-[#55FCD3]`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              No.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}