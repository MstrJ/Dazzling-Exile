"use client";
import SparklesPreview from "../components/sparklesComponent";
import { BtnLogin } from "../components/buttons";
import AboutUs from "../components/aboutUs";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div className="h-screen scroll-smooth snap-y snap-mandatory  overflow-y-scroll">
      <SparklesPreview>
        <BtnLogin />
      </SparklesPreview>
      <AboutUs />
      <Footer />
    </div>
  );
}
