import CustomCursor from "@/components/CustomCursor";
import FloatingElements from "@/components/FloatingElements";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SignatureOfferings from "@/components/SignatureOfferings";
import CustomCakeSection from "@/components/CustomCakeSection";
import GallerySection from "@/components/GallerySection";
import WhyNanteSection from "@/components/WhyNanteSection";
import GlassFeatureSection from "@/components/GlassFeatureSection";
import LocationSection from "@/components/LocationSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CustomCursor />
      <FloatingElements />
      <Navbar />
      <main>
        <HeroSection />
        <SignatureOfferings />
        <CustomCakeSection />
        <GallerySection />
        <WhyNanteSection />
        <GlassFeatureSection />
        <LocationSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
