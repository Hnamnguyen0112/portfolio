import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={'bottom-0 rounded-lg relative py-10 text-center'}>
      <p className="mx-auto"> &copy; Alex Nguyen.</p>
      <div className="absolute bottom-0 right-0">
        <Image
          alt="footer-image"
          src={'/bongo-trim.png'}
          width={147}
          height={70}
        />
      </div>
    </footer>
  );
}
