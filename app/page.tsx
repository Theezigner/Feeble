import CloudLayers from "./components/iconAndSvg/cloudLayers";
import HeroBody from "./components/bodyMain/hero";
import BirdDecorations from "./components/birds/birdDecorations";

export default function Home() {
  return (
    <main
      className="relative flex flex-col items-center mx-auto overflow-x-hidden"
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), linear-gradient(0deg, #007AFF, #007AFF)",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      {/* Decorative birds */}
      <BirdDecorations />

      {/* Main content */}
      <div className="mt-6 md:mt-8 lg:mt-10 w-full">
        <HeroBody />
      </div>

      {/* Background clouds */}
      <CloudLayers />
    </main>
  );
}
