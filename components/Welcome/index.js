import Image from 'next/image'

export default function Welcome() {
  return (
    <div className={'mx-auto max-w-xl'}>
      <div className="flex">
        <p className="text-6xl font-bold my-auto mr-auto">Nam Nguyen</p>
        <Image src={'/avatar.jpeg'} alt="avatar" className="rounded-full" width={150} height={150} />
      </div>
      <p className="text-xl mt-10">
        <span className="text-3xl font-semibold">👋 Hey! I&apos;m Nam, but you can call me Alex</span>
        <br />
        nice to meet you btw!
      </p>
    </div>
  )
}