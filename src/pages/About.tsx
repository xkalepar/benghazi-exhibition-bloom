
import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { exhibitionData } from "@/lib/data";
import { MapPin, Calendar, Target, Users, Award, Lightbulb } from "lucide-react";

const About = () => {
  const { hero, timeline } = exhibitionData;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Section className="pt-8 bg-gradient-to-br from-pink-100 via-blue-50 to-amber-50">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About the Exhibition
          </h1>
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
        </div>
      </Section>

      {/* Main Content */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-xl leading-relaxed">
              The Libya Mother and Child Exhibition is the premier trade show dedicated to mothers, children, and families in Libya. 
              Our exhibition brings together leading brands, innovative products, and essential services that support the journey of motherhood and childhood.
            </p>
            
            <p className="leading-relaxed">
              This specialized exhibition focuses on creating a comprehensive platform where families can discover the latest products, 
              services, and innovations designed specifically for mothers and children. From healthcare and nutrition to education and entertainment, 
              we showcase everything that contributes to the well-being and development of families.
            </p>

            <p className="leading-relaxed">
              Located at the prestigious Hawari Exhibition Center in Benghazi, our three-day event features over 100 exhibitors from various 
              sectors including healthcare, education, retail, and services. The exhibition serves as a vital meeting point for families, 
              healthcare professionals, educators, and businesses committed to supporting maternal and child welfare.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-pink-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-pink-600 mb-2" />
                <CardTitle className="text-pink-600">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  To create a comprehensive platform that connects families with trusted brands and innovative solutions for mother and child care.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-2" />
                <CardTitle className="text-blue-600">Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Building a supportive community where families can access resources, education, and products that enhance their quality of life.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-100 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-amber-600 mb-2" />
                <CardTitle className="text-amber-600">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Showcasing the latest innovations and technologies that support modern parenting and child development.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Timeline Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From our humble beginnings to becoming Libya's premier mother and child exhibition
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <div key={event.year} className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {event.year}
                  </div>
                </div>
                <Card className="flex-1 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-amber-500" />
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {event.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Event Details */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Event Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-pink-200">
              <CardHeader>
                <CardTitle className="text-pink-600 flex items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  When
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold text-lg">August 24–26, 2025</p>
                <p className="text-gray-600">Three full days of exhibitions, demonstrations, and networking</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>• Day 1: Opening ceremony and main exhibitions</p>
                  <p>• Day 2: Product demonstrations and workshops</p>
                  <p>• Day 3: Networking events and closing ceremony</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-600 flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Where
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="font-semibold text-lg">Hawari Exhibition Center</p>
                <p className="text-gray-600">Benghazi, Libya</p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>• Modern exhibition facilities</p>
                  <p>• Ample parking and accessibility</p>
                  <p>• Central location in Benghazi</p>
                  <p>• Full amenities and services</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
