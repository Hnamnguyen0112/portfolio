import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={'max-w-5xl mx-auto rounded-lg bottom-0'}>
      <div className='relative flex flex-col md:flex-row md:justify-between items-center text-sm py-10 text-white'>
        <p className="mx-auto order-2 md:order-1"> &copy; Nam Nguyen.</p>
        <div className="absolute bottom-0 right-0">
          <Image src={'/bongo-trim.png'} width={147} height={70} />
        </div>
      </div>
    </footer>
  )
}