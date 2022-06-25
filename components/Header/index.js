import { useState } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NextLink from '../NextLink';

export default function Header() {
  const router = useRouter();

  const [routes] = useState([
    { url: '/', name: 'About' },
    { url: '/blog', name: 'Blog' },
    { url: '/view-work', name: 'View Work' },
  ]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <NextLink href="/" className="flex items-center py-4 px-2">
                <span className="font-medium text-black text-lg">
                  Nam Nguyen
                </span>
              </NextLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            {routes.map((item, key) => (
              <Link href={item.url} key={item.name + key} passHref>
                <button
                  className={`${
                    router.asPath === item.url
                      ? 'text-cyan-600 border-b-4 border-cyan-600'
                      : 'text-black hover:text-cyan-600 transition duration-300'
                  } py-4 px-2 font-medium`}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <Menu as="div" className="inline-block relative text-left">
              <Menu.Button>
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-cyan-600 "
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="px-1 py-1">
                    {routes.map((item, key) => (
                      <Menu.Item key={item.name + key} as="div">
                        {({ active }) => (
                          <NextLink
                            href={item.url}
                            className={`${
                              active
                                ? 'bg-cyan-600 text-white'
                                : 'text-gray-900'
                            } group flex rounded-md items-center w-full px-2 py-2 text-sm btn`}
                          >
                            {item.name}
                          </NextLink>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}
