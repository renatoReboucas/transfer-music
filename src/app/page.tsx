import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default Index;
