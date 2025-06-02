import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { exhibitionData } from "@/lib/data";
import { Building, ShoppingBag, Stethoscope, GraduationCap, Baby, Users, Clock, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Partners = () => {
  const { partners } = exhibitionData;
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date('2025-08-24T09:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Countdown Timer Section */}
      <Section className="pt-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Exhibition Starts In</h2>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="bg-white/20 backdrop-blur-sm rounded-lg p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-bold">{item.value}</div>
                <div className="text-sm opacity-90">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Header Section */}
      <Section className="pt-8 bg-gradient-to-br from-pink-100 via-blue-50 to-amber-50">
        <motion.div 
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Building className="h-8 w-8 text-blue-600" />
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Companies & Products
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover the wide range of companies and products featured at the Libya Mother & Child Exhibition
          </motion.p>
        </motion.div>
      </Section>

      {/* Organizing Companies Section */}
      <Section className="bg-gradient-to-r from-blue-50 to-pink-50">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Organizing Partners
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Main Organizer */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-2 border-pink-200"
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="space-y-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center">
                  <Building className="h-10 w-10 text-pink-600" />
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  الشركة المنظمة
                </div>
                <div className="text-xl font-bold text-gray-800 leading-tight">
                  شركة ليبيا اللوجستية <br /> لتنظيم المعارض
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
              </div>
            </motion.div>

            {/* Co-organizer */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="space-y-4">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <Users className="h-10 w-10 text-blue-600" />
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Co-organizer
                </div>
                <div className="text-xl font-bold text-gray-800">
                  SERKAN ATICI
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full"></div>
              </div>
            </motion.div>
          </div>

          {/* Connection Visual */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="w-8 h-1 bg-gradient-to-r from-pink-300 to-blue-300 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-pink-400 to-blue-400 rounded-full"></div>
              <div className="w-8 h-1 bg-gradient-to-r from-blue-300 to-pink-300 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Target Customers Section */}
      <Section className="bg-white">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Target Customers & Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our exhibition brings together diverse companies serving the complete spectrum of mother and child needs
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {partnerCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
            >
              <Card className={`border-2 border-${category.color}-200 overflow-hidden`}>
                <CardHeader className={`bg-gradient-to-r from-${category.color}-50 to-${category.color}-100`}>
                  <CardTitle className={`text-2xl text-${category.color}-700 flex items-center gap-3`}>
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="h-8 w-8" />
                    </motion.div>
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {category.items.map((item, itemIndex) => (
                      <motion.div 
                        key={itemIndex}
                        className={`p-4 rounded-lg bg-${category.color}-50 hover:bg-${category.color}-100 transition-colors border border-${category.color}-200 hover:border-${category.color}-300`}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="flex items-center gap-3">
                          <motion.div 
                            className={`w-2 h-2 rounded-full bg-${category.color}-500`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.05 }}
                            viewport={{ once: true }}
                          ></motion.div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Location Map Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-blue-50">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-pink-100 rounded-full flex items-center justify-center mb-6">
              <MapPin className="h-10 w-10 text-blue-600" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Exhibition Location
          </motion.h2>
          
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Hawari Exhibition Center</h3>
                <p className="text-gray-600">Benghazi, Libya</p>
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <Calendar className="h-4 w-4" />
                  <span>August 24–26, 2025</span>
                </div>
              </div>
              
              <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.7982!2d20.1234567!3d32.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBenghazi%2C%20Libya!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Exhibition Location"
                ></iframe>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  Located in the heart of Benghazi, easily accessible by all major transportation routes.
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">🚗 Parking Available</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">🚌 Public Transport</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full">♿ Accessible</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
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
