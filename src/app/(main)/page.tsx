import Kategori from "./components/Kategori";
import Sponsor from "./components/Sponsor";
import Video from "./components/Video";

export default function LandingPage() {
  return (
    <>
      <div className="h-screen"></div>
      <Kategori />
      <Video />
      <Sponsor />
    </>
  );
}
