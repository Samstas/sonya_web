import Image from "next/image";
import logo from "../../../../public/images/logo2.svg";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-main-hero-bg bg-cover bg-center bg-no-repeat h-screen ">
      <nav className="c_main_container py-4 flex justify-between items-center">
        <ul className="flex text-2xl gap-4 text-white">
          <li>
            <Link href="/" className="c_hover_link">
              главная
            </Link>
          </li>
          <li>
            <Link href="/visual" className="c_hover_link">
              визуал
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center flex-col  h-full">
        <Image src={logo} alt="logo" className="w-[30rem] mb-[-14rem]" />
        <h1 className="uppercase text-fontBeigeSec opacity-40  text-[14rem] ">
          projects
        </h1>
      </div>
    </header>
  );
}
