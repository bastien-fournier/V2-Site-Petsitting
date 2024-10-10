import Logo from "../assets/images/logo.png";

export default function ProfilPicture() {
  return (
    <div className="ml-0 lg:ml-40">
      <img
        className=" w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover"
        src={Logo}
        alt="Logo NaosGuard"
      />
    </div>
  );
}
