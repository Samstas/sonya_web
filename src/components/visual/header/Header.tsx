import Image from "next/image";
import logo from "../../../../public/images/logo2.svg";
import Link from "next/link";

const navLinks = [
  { name: "главная", path: "/" },
  { name: "визуал", path: "/visual" },
];

export function Header() {
  return (
    <header className="bg-visual-hero-bg bg-cover bg-center bg-no-repeat h-screen ">
      <nav className="c_main_container py-4 flex justify-between items-center">
        {/* navigation links */}
        <ul className="flex text-2xl gap-4 text-white">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link href={path} className="c_hover_link">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex justify-center items-center flex-col  h-full">
        <Image src={logo} alt="logo" className="w-[30rem] mb-[-14rem]" />
        <h1 className="uppercase text-fontBeigeSec opacity-40  text-[14rem] ">
          visual
        </h1>
      </div>
    </header>
  );
}
