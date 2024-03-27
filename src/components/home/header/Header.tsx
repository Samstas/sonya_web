import Image from "next/image";
import logo from "../../../../public/images/logo.svg";

export default function Header() {
  return (
    <header className=" border-red-600 bg-hero-bg bg-cover bg-center bg-no-repeat h-screen">
      <nav className="container py-4 flex justify-between items-center">
        <ul className="flex text-2xl gap-4 text-white">
          <li>home</li>
          <li>about</li>
          <li>price</li>
        </ul>
      </nav>
      <div className="flex justify-center flex-col items-center h-screen relative">
        <Image src={logo} alt="logo" className="w-[30rem] absolute top-80" />
        <h1 className="uppercase text-fontBeigeSec opacity-40  text-[14rem]">
          projects
        </h1>
      </div>
    </header>
  );
}
