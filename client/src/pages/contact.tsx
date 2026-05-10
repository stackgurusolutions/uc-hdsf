import { useState } from "react";
import { Mail, MapPin, Calendar, Globe, Plane, Train, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Your message has been sent successfully. We will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for queries, paper submissions, and sponsorship opportunities
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">uc-hdsf.2026.muj@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Venue</h3>
                    <p className="text-gray-600">
                      Department of Fashion Design & Interior Design<br />
                      School of Architecture and Design, FoSTA<br />
                      Manipal University Jaipur<br />
                      Jaipur, Rajasthan, India - 303007
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <Calendar />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Conference Dates</h3>
                    <p className="text-gray-600">November 4-5, 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-design text-white w-12 h-12 rounded-full flex items-center justify-center">
                    <Globe />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Website</h3>
                    <p className="text-gray-600">Coming soon</p>
                  </div>
                </div>
              </div>

              {/* Travel Information */}
              <Card className="mt-12 bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Travel & Accommodation</h3>
                  <p className="text-gray-700 mb-4">
                    Manipal University Jaipur is well-connected by air, rail, and road. Participants will receive assistance for accommodation and travel arrangements.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <Card>
                      <CardContent className="p-4">
                        <Plane className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-semibold">Air</p>
                        <p className="text-xs text-gray-600">Jaipur Airport</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <Train className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <p className="text-sm font-semibold">Rail</p>
                        <p className="text-xs text-gray-600">Jaipur Junction</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-4">
                        <Car className="h-8 w-8 text-accent mx-auto mb-2" />
                        <p className="text-sm font-semibold">Road</p>
                        <p className="text-xs text-gray-600">Well Connected</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <Card className="bg-gray-50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your name"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="Your email"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="paper">Paper Submission</SelectItem>
                          <SelectItem value="registration">Registration</SelectItem>
                          <SelectItem value="sponsorship">Sponsorship</SelectItem>
                          <SelectItem value="accommodation">Accommodation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        rows={5}
                        placeholder="Your message"
                        required
                        className="mt-2"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-blue-700 text-white font-semibold">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Contacts */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Key Contacts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <Card className="shadow-lg border border-gray-200">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Dr. Deepshikha Sharma</h3>
                  <p className="text-sm text-primary">Conference Convener</p>
                  <p className="text-sm text-gray-600">Associate Professor</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border border-gray-200">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Dr. Aanchal Trehan</h3>
                  <p className="text-sm text-secondary">Conference Convener</p>
                  <p className="text-sm text-gray-600">Assistant Professor</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border border-gray-200">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Mr. Mahboob Anwer</h3>
                  <p className="text-sm text-accent">Conference Convener</p>
                  <p className="text-sm text-gray-600">Assistant Professor</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg border border-gray-200">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Mr. Harshwardhan Soni</h3>
                  <p className="text-sm text-design">Conference Secretary</p>
                  <p className="text-sm text-gray-600">Assistant Professor</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
