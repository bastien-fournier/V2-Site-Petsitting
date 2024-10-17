import CatSitting from "../components/CatSitting";
import DogSitting from "../components/DogSitting";
import DogWalk from "../components/DogWalk";

export default function AboutServices() {
  return (
    <div className="mt-10 flex flex-col gap-6 mb-10">
      <DogSitting />
      <CatSitting />
      <DogWalk />
    </div>
  );
}
