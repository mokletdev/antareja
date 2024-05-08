import Kategori from "./components/Kategori";
import Sponsor from "./components/Sponsor";
import Video from "./components/Video";
import Daftar from "./components/Daftar";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Juri from "./components/Juri";
import Throwback from "./components/Throwback";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Kategori />
      <Video />
      <Timeline />
      <Juri />
      <Throwback />
      <Daftar />
      <Sponsor />
    </>
  );
}
