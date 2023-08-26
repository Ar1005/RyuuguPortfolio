import Content from "@/components/shared/Content";
import Footer from "@/components/shared/Footer";
import Topbar from "@/components/shared/Topbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-neutral-100">
        <Topbar />
        <div>
          <Content />
        </div>
      </div>
      <Footer />
    </main>
  );
}
