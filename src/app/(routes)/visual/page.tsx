import { Footer } from "@/components/visual/footer/Footer";
import { Header } from "@/components/visual/header/Header";
import { AboutVisual } from "@/components/visual/main/About";
import { Prices } from "@/components/visual/main/Prices";
import { SuitableFor } from "@/components/visual/main/SuitableFor";

export default function VisualPage() {
  return (
    <>
      <Header />

      <main className=" c_flex_center flex-col">
        <AboutVisual />
        <SuitableFor />
        <Prices />
      </main>

      <Footer />
    </>
  );
}
