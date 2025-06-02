
import Section from "@/components/Section";
import GalleryGrid from "@/components/GalleryGrid";
import { Camera } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Section className="pt-8 bg-gradient-to-br from-pink-100 via-blue-50 to-amber-50">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
            <Camera className="h-8 w-8 text-pink-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Exhibition Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore moments from previous exhibitions and get a glimpse of what awaits you at the Libya Mother & Child Exhibition
          </p>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="bg-white">
        <GalleryGrid />
      </Section>

      {/* Info Section */}
      <Section className="bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Capture Your Own Moments
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us at the upcoming exhibition and be part of creating new memories. Share your experience with the hashtag #LibyaMotherChildExpo2025
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">📸</div>
              <h3 className="font-semibold text-gray-800">Photo Opportunities</h3>
              <p className="text-gray-600 text-sm">Professional photo booths and scenic backdrops</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎥</div>
              <h3 className="font-semibold text-gray-800">Live Coverage</h3>
              <p className="text-gray-600 text-sm">Follow our social media for live updates</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="font-semibold text-gray-800">Photo Contest</h3>
              <p className="text-gray-600 text-sm">Win prizes for the best exhibition photos</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Gallery;
