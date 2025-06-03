
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import MenuSection from '../components/MenuSection';
import GallerySection from '../components/GallerySection';
import HorairesSection from '../components/HorairesSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MenuSection />
      <GallerySection />
      <HorairesSection />
      <Footer />
    </div>
  );
};

export default Index;
