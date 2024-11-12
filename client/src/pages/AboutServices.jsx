import CatSitting from "../components/CatSitting";
import DogSitting from "../components/DogSitting";
import DogWalk from "../components/DogWalk";

export default function AboutServices() {
  return (
    <div className="mt-20 flex flex-col gap-20 mb-20 m-10 ">
      <DogSitting />
      <CatSitting />
      <DogWalk />
    </div>
  );
}
