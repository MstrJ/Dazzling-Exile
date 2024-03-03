"use client";
import SparklesPreview from "../components/sparklesComponent";
import { BtnLogin } from "../components/buttons";
import AboutUs from "../components/aboutUs";
export default function Home() {
  return (
    <div className="">
      <SparklesPreview>
        <BtnLogin />
      </SparklesPreview>
      <AboutUs />
    </div>
  );
}
