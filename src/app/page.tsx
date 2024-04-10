import { Footer } from "@/components/home/footer/Footer";
import { Header } from "@/components/home/header/Header";
import { Greeting } from "@/components/home/main/Greeting";
import { ServicesList } from "@/components/home/main/ServicesList";

export default function Main() {
  return (
    <>
      <Header />

      <main className=" c_flex_center flex-col ">
        <Greeting />
        <ServicesList />
      </main>

      <Footer />
    </>
  );
}
