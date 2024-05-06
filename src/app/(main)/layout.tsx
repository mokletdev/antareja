import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="">
        {children}
        <Footer />
      </main>
    </>
  );
}
