
import { useState } from "react";
import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send the data to a server
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@libyamotherandchild.com",
      subDetails: "partnerships@libyamotherandchild.com",
      color: "pink"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+218 XX XXX XXXX",
      subDetails: "Available 9 AM - 6 PM",
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Hawari Exhibition Center",
      subDetails: "Benghazi, Libya",
      color: "amber"
    },
    {
      icon: Clock,
      title: "Exhibition Hours",
      details: "August 24-26, 2025",
      subDetails: "9:00 AM - 8:00 PM",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Section className="pt-8 bg-gradient-to-br from-pink-100 via-blue-50 to-amber-50">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
            <Mail className="h-8 w-8 text-pink-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for exhibition information, partnership opportunities, or any questions about the Libya Mother & Child Exhibition
          </p>
        </div>
      </Section>

      {/* Contact Info Cards */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={info.title} 
              className={`text-center hover:shadow-lg transition-all duration-300 border-2 border-${info.color}-200 hover:border-${info.color}-300`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className={`mx-auto w-12 h-12 bg-${info.color}-100 rounded-full flex items-center justify-center mb-2`}>
                  <info.icon className={`h-6 w-6 text-${info.color}-600`} />
                </div>
                <CardTitle className={`text-${info.color}-600`}>{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-gray-800">{info.details}</p>
                <p className="text-sm text-gray-600 mt-1">{info.subDetails}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <Card className="border-2 border-pink-200">
            <CardHeader>
              <CardTitle className="text-2xl text-pink-600 flex items-center gap-2">
                <Send className="h-6 w-6" />
                Contact Form
              </CardTitle>
              <CardDescription>
                Please provide as much detail as possible so we can assist you better.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please tell us how we can help you..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-pink-600 hover:bg-pink-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Additional Info */}
      <Section className="bg-white">
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Follow Us for Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay connected with the latest news and updates about the Libya Mother & Child Exhibition
          </p>
          
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold">f</span>
              </div>
              <p className="text-sm text-gray-600">Facebook</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-pink-600 font-bold">@</span>
              </div>
              <p className="text-sm text-gray-600">Instagram</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold">in</span>
              </div>
              <p className="text-sm text-gray-600">LinkedIn</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-800 mb-2">Partnership Inquiries</h3>
            <p className="text-gray-600 mb-4">
              Interested in becoming an exhibitor or sponsor? Contact our partnerships team directly:
            </p>
            <p className="font-medium text-pink-600">
              📧 partnerships@libyamotherandchild.com
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
