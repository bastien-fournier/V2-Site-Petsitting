import Welcome from "../components/Welcome";
import HomePicture from "../components/HomePicture";
import Services from "../components/Services";
import PetPictures from "../components/PetPictures";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" max-w-6xl  flex flex-col lg:flex-row justify-center items-center text-center lg:text-left mt-10 m-10  lg:p-10 lg:gap-24">
        <div className="lg:w-1/2 lg:flex lg:justify-end lg:-ml-10">
          <HomePicture />
        </div>
        <div className="lg:w-1/2 lg:pl-10 lg:pr-10 mt-5 lg:mt-0">
          <Welcome />
        </div>
      </div>

      <div className="w-full max-w-6xl mb-10 ">
        <Services />
      </div>
      <div className=" max-w-6xl mb-16  ">
        <PetPictures />
      </div>
    </div>
  );
}
