
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    tap: { scale: 0.95 },
    hover: { scale: 1.05 }
  };

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={`${
                filter === category.id 
                  ? "bg-pink-600 hover:bg-pink-700" 
                  : "border-pink-200 text-pink-600 hover:bg-pink-50"
              } transition-all duration-300`}
            >
              {category.label}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${filter}-${image.id}`}
              variants={itemVariants}
              layout
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <motion.div 
                  className="aspect-square overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div 
                  className="p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-sm text-gray-600 font-medium capitalize">
                    {image.category}
                  </p>
                  <p className="text-gray-800 mt-1">
                    {image.alt}
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredImages.length === 0 && (
        <motion.div 
          className="text-center py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-gray-500 text-lg">No images found for this category.</p>
        </motion.div>
      )}
    </div>
  );
};

export default GalleryGrid;
