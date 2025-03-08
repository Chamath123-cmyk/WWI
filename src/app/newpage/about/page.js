import Header from "@/components/Home/Header";
import HeroSection from '@/components/Home/a.HeroSection'
import AboutSection from '@/components/Home/a.About'
import Ourmision from '@/components/Home/a.ourmision'
import Expertise from '@/components/Home/a.Expertise'
import Stories from '@/components/Home/a.cStories'
import QuickLinks from '@/components/Home/QuickLinks';

export default function GemsPage() {
  return (
    <>
      <Header /> 
      <HeroSection />
      <AboutSection />
      <Ourmision />
      <Expertise />
      <Stories />
      <QuickLinks />

    </>
  );
}
