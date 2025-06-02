
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";
import { exhibitionData } from "@/lib/data";
import { MapPin, Calendar, ArrowRight, Users, Building, Heart } from "lucide-react";

const Index = () => {
  const { hero, categories } = exhibitionData;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-8 pb-16 bg-gradient-to-br from-pink-100 via-blue-50 to-amber-50">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-blue-600 to-amber-600 bg-clip-text text-transparent">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-medium">
              {hero.subtitle}
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {hero.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
            <div className="flex items-center space-x-2 text-pink-600">
              <Calendar className="h-6 w-6" />
              <span className="font-medium">{hero.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600">
              <MapPin className="h-6 w-6" />
              <span className="font-medium">{hero.location}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              <Link to="/gallery">
                View Gallery
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Categories Section */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Exhibition Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover a comprehensive range of products and services designed for mothers, children, and families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-pink-200"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <CardTitle className={`text-${category.color}-600`}>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {category.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <Building className="h-8 w-8 text-pink-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">100+</h3>
            <p className="text-gray-600">Exhibitors</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">5000+</h3>
            <p className="text-gray-600">Visitors Expected</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800">3</h3>
            <p className="text-gray-600">Days of Excellence</p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-pink-600 to-blue-600 text-white">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Join Us?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Be part of Libya's premier mother and child exhibition. Connect with families, showcase your products, and build lasting relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/partners">
                View Partners
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Index;
