import Image from 'next/image'
import MainMenu from '../MainMenu'

export default function AboutMe() {
  return (
    <div id="about-me" className='md:my-20 mx-auto max-w-6xl min-w-0 p-4 rounded shadow-lg bg-white flex flex-col md:flex-row relative'>
      <div className="basis-1/3 mx-auto">
        <Image src={'/avatar.png'} alt="avatar" className="rounded-3xl" width={400} height={400} />
      </div>
      <div className="basis-2/3">
        <MainMenu/>
        <p className='md:mx-8 mt-5 text-4xl mb-4 font-medium text-black flex'>Hi there! <span className="animate-waving-hand">👋🏻</span></p>
        <p className='md:mx-4 text-lg lg:text-2xl font-light tracking-wide leading-relaxed'>
          Fuelled by a passion for designing compelling products, I have a deep desire to excel and continuously improve in my work. Learn more about my journey below.
        </p>
      </div>
    </div>
  )
}
