import Welcome from "../components/Welcome";
import HomePicture from "../components/HomePicture";
import Services from "../components/Services";
import PetPictures from "../components/PetPictures";

export default function HomePage() {
  return (
    <div>
      <div className="bg-secondary flex flex-col lg:flex-row justify-center items-center text-center lg:text-left mt-20 lg:mt-20 p-5 lg:p-10 rounded-lg shadow-2xl">
        <div className="lg:w-1/2 lg:flex lg:justify-end lg:-ml-10">
          <HomePicture />
        </div>
        <div className="lg:w-1/2 lg:pl-10 lg:pr-10 mt-5 lg:mt-0">
          <Welcome />
        </div>
      </div>
      <div>
        <PetPictures />
      </div>
      <div>
        <Services />
      </div>
    </div>
  );
}
