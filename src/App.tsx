import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProjectGallery } from './components/ProjectGallery';
import { ServicesSection } from './components/ServicesSection';
import { CostEstimator } from './components/CostEstimator';
import { InstagramFeed } from './components/InstagramFeed';
import { ProcessAndQuality } from './components/ProcessAndQuality';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#f3f4f6] selection:bg-[#c59d5f] selection:text-black font-sans">
      {/* Navigation Header */}
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Editorial Hero Banner */}
        <Hero onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Interactive Before & After Transformation Slider */}
        <BeforeAfterSlider />

        {/* Residential & Commercial Project Gallery */}
        <ProjectGallery />

        {/* Specialized Woodwork & Interior Services */}
        <ServicesSection onOpenConsultation={() => setConsultationOpen(true)} />

        {/* Interactive Interior Cost Estimator & Calculator */}
        <CostEstimator />

        {/* Official Instagram Profile Showcase (@khan_interior_bhiwadi) */}
        <InstagramFeed />

        {/* Process, 10-Year Warranty & Factory Quality */}
        <ProcessAndQuality />

        {/* Customer Testimonials from Bhiwadi Housing Societies */}
        <Testimonials />

        {/* Direct Contact & Consultation Booking */}
        <ContactSection />
      </main>

      {/* Modern Luxury Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp & Call CTA */}
      <FloatingCTA onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Free Site Visit Booking Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
