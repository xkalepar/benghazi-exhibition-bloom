
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { exhibitionData } from "@/lib/data";

const GalleryGrid = () => {
  const [filter, setFilter] = useState("all");
  const { galleryImages } = exhibitionData;

  const categories = [
    { id: "all", label: "All" },
    { id: "families", label: "Families" },
    { id: "healthcare", label: "Healthcare" },
    { id: "venue", label: "Venue" },
    { id: "activities", label: "Activities" },
    { id: "products", label: "Products" },
  ];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={filter === category.id ? "default" : "outline"}
            onClick={() => setFilter(category.id)}
            className={`${
              filter === category.id 
                ? "bg-pink-600 hover:bg-pink-700" 
                : "border-pink-200 text-pink-600 hover:bg-pink-50"
            }`}
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <Card 
            key={image.id} 
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 font-medium capitalize">
                {image.category}
              </p>
              <p className="text-gray-800 mt-1">
                {image.alt}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No images found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
