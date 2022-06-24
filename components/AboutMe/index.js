import Image from 'next/image';
import MainMenu from '../MainMenu';

export default function AboutMe() {
  return (
    <div
      id="about-me"
      className="animate-fade-in-down md:my-5 mx-auto max-w-6xl min-w-0 py-10 md:py-4 px-4 rounded shadow-lg bg-white flex flex-col md:flex-row relative"
    >
      <div className="basis-1/3 mx-auto">
        <Image
          priority
          src={'/avatar.png'}
          alt="avatar"
          className="rounded-3xl"
          width={400}
          height={400}
        />
      </div>
      <div className="basis-2/3">
        <MainMenu />
        <p className="md:mx-8 mt-5 text-5xl mb-4 font-medium text-black flex">
          Hi,
          <br /> I&apos;m Nam! <span className="animate-waving-hand">👋🏻</span>
        </p>
        <p className="md:mx-4 text-lg lg:text-2xl font-light tracking-wide leading-relaxed">
          I’m a 25-year-old software engineer from Saigon, Vietnam. I write
          code, organize projects, and play Valorant.
        </p>
      </div>
    </div>
  );
}
