import Content from "@/components/shared/Content";
import Footer from "@/components/shared/Footer";
import Showcase from "@/components/shared/Showcase";
import Topbar from "@/components/shared/Topbar";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="min-h-screen bg-neutral-100">
        <Topbar />
        <div>
          <div className="">
            <Showcase />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
