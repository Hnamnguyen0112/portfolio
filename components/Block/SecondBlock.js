import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export function SecondBlock() {
  const [quotes] = useState([
    { question: 'What is my ability?', answer: "Create a project from scratch, install all the stuffs needed (framework, library, package, etc.), setup standard rule (code style?).\n\nCICD? Yes, I write pipelines to deliver the application to any environment.\n...\nLast but not least, play professionally as a team and in any position." },
    { question: 'What do I need?', answer: 'Open environment (for sure).\n\nProfessional team.\n\nInteresting project.' },
    { question: '', answer: '' },
  ])
  return (
    <div className="w-full flex-grow p-2 mx-auto rounded-2xl lg:max-w-home-column">
      {quotes && quotes.map((item, key) =>
        <Disclosure key={key} as={'div'} className={'mb-2 bg-[#022E53]'}>
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-[#55FCD3] rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{item.question}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-[#55FCD3]`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white whitespace-pre-line">{item.answer}</Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )}
    </div>
  )
}