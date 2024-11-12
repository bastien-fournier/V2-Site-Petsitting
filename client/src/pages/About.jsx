import AboutDescription from "../components/AboutDescription";
import AboutPicture from "../components/AboutPicture";
import NaosAndJunkie from "../components/NaosAndJunkie";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center mb-16">
      <div className=" max-w-6xl flex flex-col lg:flex-row justify-center items-center text-center lg:text-left m-10 lg:p-10 lg:gap-24">
        <div className="lg:w-1/2 lg:flex lg:justify-end lg:-ml-10">
          <AboutPicture />
        </div>
        <div className="lg:w-1/2 lg:pl-10 lg:pr-10 mt-5 lg:mt-0">
          <AboutDescription />
        </div>
      </div>
      <div>
        <NaosAndJunkie />
      </div>
    </div>
  );
}
