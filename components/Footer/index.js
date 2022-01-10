import { useContext } from 'react'
import Image from 'next/image'
import { AppContext } from '../../context/state'

export default function Footer() {
  const { mode } = useContext(AppContext)

  return (
    <div className={'max-w-5xl mx-auto rounded-lg mt-10 relative'}>
      <div className={'flex flex-col md:flex-row md:justify-between items-center text-sm py-10 ' + (mode ? 'text-white' : '')}>
        <p className="mx-auto order-2 md:order-1"> &copy; Nam Nguyen, 2021. </p>
      </div>
      <div className="absolute bottom-0 right-0">
        <Image src={'/bongo-trim.png'} width={147} height={70} />
      </div>
    </div>
  )
}