import { AppContext } from '../../context/state'
import { useContext } from 'react'

export default function Footer() {
  const { mode } = useContext(AppContext)

  return (
    <div className={'max-w-5xl mx-auto border-4 rounded-lg mt-10 ' + (mode ? 'bg-black border-white' : 'border-amber-300')}>
      <div className={'flex flex-col md:flex-row md:justify-between items-center text-sm py-10 ' + (mode ? 'text-white' : '')}>
        <p className="mx-auto order-2 md:order-1"> &copy; Nam Nguyen, 2021. </p>
      </div>
    </div>
  )
}