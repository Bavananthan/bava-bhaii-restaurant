"use client";
import Menu from "../components/Menu";
import About from "../components/about";
import HeroSection from "../components/Hero"
import Review from '../components/Review'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
    <Menu></Menu>
      <About></About>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}
