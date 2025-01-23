import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import ContentSection from "@/components/ContentSection"
import Gallery from "@/components/Gallery"
import ProductCarousel from "@/components/ProductCarousel"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <Navigation />
      <Hero />
      <ContentSection
        title="Solutions Intelligentes"
        description="Découvrez nos solutions domotiques innovantes pour transformer votre maison en un espace de vie intelligent et luxueux."
        imageUrl="/smart-home.jpg"
        linkText="En savoir plus"
        linkHref="/solutions"
        imageLeft={true}
      />
      <ContentSection
        title="Design Élégant"
        description="Nos produits allient technologie de pointe et esthétique raffinée pour s'intégrer parfaitement à votre intérieur."
        imageUrl="/elegant-design.jpg"
        linkText="Voir nos produits"
        linkHref="/produits"
        imageLeft={false}
      />
      <Gallery />
      <ProductCarousel />
      <Footer />
    </main>
  )
}

