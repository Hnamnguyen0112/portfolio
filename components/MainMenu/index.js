export default function MainMenu() {
  return (
    <div className="flex gap-x-4 justify-center md:justify-end flex-row">
      <a
        href="https://github.com/Hnamnguyen0112"
        rel="noreferrer"
        target="_blank"
        className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex py-2 rounded-xl align-middle"
      >
        <i className="text-2xl md:text-3xl devicon-github-original colored" />
      </a>
      <a
        href="https://www.linkedin.com/in/namnguyen0112/"
        rel="noreferrer"
        target="_blank"
        className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex py-2 rounded-xl align-middle"
      >
        <i className="text-2xl md:text-3xl devicon-linkedin-plain colored" />
      </a>
      <a
        href="https://twitter.com/alexth0112"
        rel="noreferrer"
        target="_blank"
        className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex py-2 rounded-xl align-middle"
      >
        <i className="text-2xl md:text-3xl devicon-twitter-original colored" />
      </a>
      <a
        href="mailto:alexnguyenth96@gmail.com"
        rel="noreferrer"
        target="_blank"
        className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-medium flex py-2 rounded-xl align-middle"
      >
        <i className="text-2xl md:text-3xl devicon-google-plain colored" />
      </a>
    </div>
  );
}
