import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import galleryHero from "@/assets/ruma12.jpeg";
import computerLab from "@/assets/complab.jpg";
import scienceLab from "@/assets/g2.jpg";
import music10 from "@/assets/music10.jpeg";
import music11 from "@/assets/music11.jpeg";
import music12 from "@/assets/music12.jpeg";
import music13 from "@/assets/music13.jpeg";
import music14 from "@/assets/music14.jpeg";
import music15 from "@/assets/music15.jpeg";
import music16 from "@/assets/music 16.jpeg";
import music17 from "@/assets/music 17.jpeg";
import library from "@/assets/drama.jpg";
import primary12 from "@/assets/primary 12.jpeg";
import school11 from "@/assets/learner2.jpg";
import sportsField from "@/assets/schoolteam.jpg";
import swim10 from "@/assets/swim10.jpeg";
import football10 from "@/assets/football10.jpg";
import ruma10 from "@/assets/ruma10.jpeg";
import drama10 from "@/assets/drama10.jpeg";
import footpitch from "@/assets/footpitch.jpg";
import gals from "@/assets/gals.jpg";
import boys from "@/assets/boys.jpg";
import pp2 from "@/assets/pp2.jpg";
import contactus from "@/assets/gallery/contactus.jpg"
import grad1 from "@/assets/grad1.jpg"
import pic1 from "@/assets/pic1.jpg"
import pic2 from "@/assets/pic2.jpg"
import pic3 from "@/assets/gallery/pic3.jpg"
import pic4 from "@/assets/pic4.jpg"
import pic5 from "@/assets/pic5.jpg"
import pic6 from "@/assets/pic6.jpg"
import pic7 from "@/assets/pic7.jpg"
import pic8 from "@/assets/pic8.jpg"
import pic9 from "@/assets/pic9.jpg"
import pic10 from "@/assets/pic10.jpg"
import pic11 from "@/assets/pic11.jpg"
import pic12 from "@/assets/pic12.jpg"
import pic13 from "@/assets/pic13.jpg"
import pic14 from "@/assets/pic14.jpg"
import pic15 from "@/assets/pic15.jpg"
import pic16 from "@/assets/pic16.jpg"
import pic17 from "@/assets/pic17.jpg"
import pic18 from "@/assets/pic18.jpg"
import pic19 from "@/assets/pic19.jpg"
import pic20 from "@/assets/pic20.jpg"
import pic21 from "@/assets/pic21.jpg"
import pic22 from "@/assets/pic22.jpg"
import pic23 from "@/assets/pic23.jpg"
import pic24 from "@/assets/pic24.jpg"
import pic25 from "@/assets/pic25.jpg"
import pic26 from "@/assets/pic26.jpg"
import pic27 from "@/assets/pic27.jpg"
import pic28 from "@/assets/pic28.jpg"
import pic29 from "@/assets/pic29.jpg"
import pic30 from "@/assets/pic30.jpg"
import pic31 from "@/assets/pic31.jpg"
import pic32 from "@/assets/pic32.jpg"
import pic33 from "@/assets/pic33.jpg"
import pic34 from "@/assets/pic34.jpg"
import pic35 from "@/assets/pic35.jpg"
import pic36 from "@/assets/pic36.jpg"
import pic37 from "@/assets/pic37.jpg"
import pic38 from "@/assets/pic38.jpg"
import pic39 from "@/assets/pic38.jpg"
import pic40 from "@/assets/pic40.jpg"
import pic41 from "@/assets/pic41.jpg"
import pic42 from "@/assets/pic42.jpg"

const categories = [
  "All",
  "Academics",
  "Sports",
  "Clubs",
  "Events",
  "Facilities",
  "School Life"
];

const galleryItems = [
  { id: 1, image: computerLab, title: "ICT Laboratory", category: "Facilities" },
  { id: 30, image: pic41, title: "Boys Football Team", category: "Sports" },
  { id: 2, image: primary12, title: "Outdoor Activities", category: "Academics" },
  { id: 3, image: school11, title: "Outdoor Activities", category: "Academics" },
  { id: 4, image: scienceLab, title: "Agriculture Practical", category: "Academics" },
  { id: 5, image: library, title: "Drama festivals", category: "Clubs" },
  { id: 6, image: sportsField, title: "Football Match", category: "Sports" },
  { id: 7, image: computerLab, title: "Coding Class", category: "Clubs" },
  { id: 8, image: scienceLab, title: "Intergrated Science practical", category: "Academics" },
  { id: 9, image: football10, title: "Soccer Training", category: "Sports" },
  { id: 10, image: swim10, title: "Outdoor Activities", category: "Academics" },
  { id: 11, image: music10, title: "Drama festivals", category: "Events" },
  { id: 12, image: music11, title: "Music festivals", category: "Events" },
  { id: 13, image: music12, title: "Music festivals", category: "Events" },
  { id: 44, image: pic42, title: "Best Moments", category: "School Life" },
  { id: 45, image: pic33, title: "Best Moments", category: "School Life" },
  { id: 14, image: music13, title: "Music festivals", category: "Events" },
  { id: 15, image: music14, title: "Music festivals", category: "Events" },
  { id: 16, image: music15, title: "Music festivals", category: "Events" },
  { id: 17, image: music16, title: "Music festivals", category: "Events" },
  { id: 35, image: pic10, title: "Best Moments", category: "School Life" },
  { id: 36, image: pic12, title: "Best Moments", category: "School Life" },
  { id: 18, image: music17, title: "Music festivals", category: "Events" },
  { id: 19, image: ruma10, title: "Academic Trips", category: "Academics" },
  { id: 20, image: drama10, title: "Drama festivals", category: "Events" },
  { id: 21, image: footpitch, title: "Football Pitch", category: "Facilities" },
  { id: 22, image: gals, title: "Break Sessions", category: "Events" },
  { id: 23, image: boys, title: "Break Sessions", category: "Events" },
  { id: 24, image: pp2, title: "Break Sessions", category: "Events" },
  { id: 25, image: pic1, title: "PP2 Graduation Ceremony", category: "Events" },
  { id: 38, image: pic13, title: "Best Moments", category: "School Life" },
  { id: 39, image: pic14, title: "Best Moments", category: "School Life" },
  { id: 40, image: pic23, title: "Best Moments", category: "School Life" },
  { id: 26, image: grad1, title: "PP2 Graduation Ceremony", category: "Events" },
  { id: 27, image: pic2, title: "Basketball Training", category: "Sports" },
  { id: 28, image: pic40, title: "Football", category: "Sports" },
  { id: 31, image: pic38, title: "Athletics", category: "Sports" },
  { id: 32, image: pic3, title: "Best Moments", category: "School Life" },
  { id: 33, image: pic7, title: "Best Moments", category: "School Life" },
  { id: 34, image: pic8, title: "Best Moments", category: "School Life" },
  { id: 37, image: pic11, title: "Best Moments", category: "School Life" },
  { id: 41, image: pic35, title: "Best Moments", category: "School Life" },
  { id: 42, image: pic36, title: "Best Moments", category: "School Life" },
  { id: 43, image: pic37, title: "Best Moments", category: "School Life" },
  { id: 46, image: contactus, title: "Best Moments", category: "School Life" },
  { id: 47, image: pic15, title: "Best Moments", category: "School Life" },
  { id: 48, image: pic16, title: "Best Moments", category: "School Life" },

];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${galleryHero})` }}
        >
          <div className="absolute inset-0 bg-secondary/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <p className="font-heading font-semibold text-base sm:text-lg mb-2">Our Gallery</p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            School Life in Pictures
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto opacity-90">
            Explore moments that capture the vibrant spirit of our school community
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="border-none shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(item.id)}
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <p className="font-heading font-semibold text-secondary text-sm sm:text-base">{item.title}</p>
                  <p className="text-[10px] sm:text-xs text-primary">{item.category}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-primary transition-colors"
                aria-label="Close"
              >
                ×
              </button>
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="mt-4 text-center text-white">
                <h3 className="font-heading text-2xl font-bold mb-1">{selectedItem.title}</h3>
                <p className="text-primary">{selectedItem.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No images found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
