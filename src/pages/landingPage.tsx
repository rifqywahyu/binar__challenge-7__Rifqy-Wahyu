import Navbar from "../components/layout/navbar";
import MainPage from "../components/layout/mainSection";
import Services from "../components/layout/services";
import WhyUs from "../components/layout/whyus";
import Testi from "../components/layout/testimonial";
import CTA from "../components/layout/cta";
import FAQ from "../components/layout/faq";
import Footer from "../components/layout/footer";

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <Services />
      <WhyUs />
      <Testi />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
