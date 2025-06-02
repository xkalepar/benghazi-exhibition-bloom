
import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { exhibitionData } from "@/lib/data";
import { Building, ShoppingBag, Stethoscope, GraduationCap, Baby } from "lucide-react";

const Partners = () => {
  const { partners } = exhibitionData;

  const partnerCategories = [
    {
      title: "Mother & Child Supplies",
      icon: Baby,
      items: partners.motherChildSupplies,
      color: "pink",
      description: "Essential products for everyday mother and child care"
    },
    {
      title: "Healthcare & Nutrition", 
      icon: Stethoscope,
      items: partners.healthcareNutrition,
      color: "blue",
      description: "Medical care and nutritional solutions for families"
    },
    {
      title: "Toys & Accessories",
      icon: ShoppingBag,
      items: partners.toysAccessories,
      color: "amber",
      description: "Educational and entertaining products for children"
    },
    {
      title: "Hospitals & Schools",
      icon: GraduationCap,
      items: partners.hospitalsSchools,
      color: "green",
      description: "Professional services and educational institutions"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Section className="pt-8 bg-gradient-to-br from-pink-100 via-blue-50 to-amber-50">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Building className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Companies & Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the wide range of companies and products featured at the Libya Mother & Child Exhibition
          </p>
        </div>
      </Section>

      {/* Target Customers Section */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Target Customers & Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our exhibition brings together diverse companies serving the complete spectrum of mother and child needs
          </p>
        </div>

        <div className="space-y-12">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <Card className={`border-2 border-${category.color}-200 overflow-hidden`}>
                <CardHeader className={`bg-gradient-to-r from-${category.color}-50 to-${category.color}-100`}>
                  <CardTitle className={`text-2xl text-${category.color}-700 flex items-center gap-3`}>
                    <category.icon className="h-8 w-8" />
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <div 
                        key={itemIndex}
                        className={`p-4 rounded-lg bg-${category.color}-50 hover:bg-${category.color}-100 transition-colors border border-${category.color}-200 hover:border-${category.color}-300`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full bg-${category.color}-500`}></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Partner Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Partner With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join Libya's premier mother and child exhibition and connect with your target audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Building className="h-8 w-8 text-pink-600" />
              </div>
              <CardTitle className="text-pink-600">Direct Access</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect directly with families and healthcare professionals actively seeking your products and services.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-blue-600">Brand Visibility</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Showcase your brand to thousands of visitors over three days in a focused, professional environment.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-amber-600" />
              </div>
              <CardTitle className="text-amber-600">Networking</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Build valuable partnerships with other businesses and professionals in the mother and child industry.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-pink-600 to-blue-600 text-white">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Showcase Your Products?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join us at the Libya Mother & Child Exhibition 2025 and connect with families who need your products and services.
          </p>
          <div className="space-y-4">
            <p className="text-lg font-semibold">
              For partnership inquiries and booth reservations:
            </p>
            <p className="text-lg">
              📧 partnerships@libyamotherandchild.com
            </p>
            <p className="text-lg">
              📞 +218 XX XXX XXXX
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Partners;
