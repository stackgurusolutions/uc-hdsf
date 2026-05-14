import { useState } from "react";
import { GraduationCap, Users, Briefcase, Users as UsersIcon, CreditCard, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function Registration() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    category: "",
    institution: "",
    designation: "",
    paperSubmission: "",
    researchArea: "",
    specialRequirements: "",
    termsAccepted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      toast({
        title: "Terms Required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Registration Submitted",
      description: "Your registration has been submitted successfully. Payment details will be provided via email.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      category: "",
      institution: "",
      designation: "",
      paperSubmission: "",
      researchArea: "",
      specialRequirements: "",
      termsAccepted: false,
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Conference Registration</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join UC-HDFS 2026 and be part of the global conversation on Design, Innovation, and Sustainability
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Registration Fees */}
            <div className="mb-16">
                  <h2 className="text-3xl font-bold text-center mb-12">Registration Fees</h2>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

  {/* Students / Researchers */}
  <Card className="bg-gradient-to-br from-design/10 to-pink-50 shadow-lg border border-design/20">
    <CardContent className="p-6 text-center">
      <h3 className="text-xl font-bold mb-5">Students / Researchers</h3>

      <div className="space-y-3">
        
        {/* Indian Participants */}
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Indian Participants
          </p>
          <div
            className="text-2xl font-bold"
            style={{ color: "#B64A2F" }}
          >
            ₹5,000
          </div>
        </div>

        {/* Foreign Participants */}
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Foreign Participants
          </p>
          <div className="text-lg font-semibold text-gray-700">
            USD $75
          </div>
        </div>

      </div>
    </CardContent>
  </Card>

  {/* Academicians */}
  <Card className="bg-gradient-to-br from-innovation/10 to-blue-50 shadow-lg border border-innovation/20">
    <CardContent className="p-6 text-center">
      <h3 className="text-xl font-bold mb-5">Academicians</h3>

      <div className="space-y-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Indian Participants
          </p>
          <div
            className="text-2xl font-bold"
            style={{ color: "#B64A2F" }}
          >
            ₹6,000
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Foreign Participants
          </p>
          <div className="text-lg font-semibold text-gray-700">
            USD $85
          </div>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Industry */}
  <Card className="bg-gradient-to-br from-sustainability/10 to-green-50 shadow-lg border border-sustainability/20">
    <CardContent className="p-6 text-center">
      <h3 className="text-xl font-bold mb-5">Industry Participants</h3>

      <div className="space-y-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Indian Participants
          </p>
          <div
            className="text-2xl font-bold"
            style={{ color: "#B64A2F" }}
          >
            ₹6,000
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Foreign Participants
          </p>
          <div className="text-lg font-semibold text-gray-700">
            USD $85
          </div>
        </div>
      </div>
    </CardContent>
  </Card>

  {/* Attendee */}
  <Card className="bg-gradient-to-br from-accent/10 to-orange-50 shadow-lg border border-accent/20">
    <CardContent className="p-6 text-center">
      <h3 className="text-xl font-bold mb-5">Attendee Only</h3>

      <div className="space-y-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Indian Participants
          </p>
          <div
            className="text-2xl font-bold"
            style={{ color: "#B64A2F" }}
          >
            ₹2,500
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
            Foreign Participants
          </p>
          <div className="text-lg font-semibold text-gray-700">
            USD $30
          </div>
        </div>
      </div>
    </CardContent>
  </Card>

</div>

                  {/* Updated Deadline */}
                 <div className="mt-8 max-w-5xl mx-auto">
  <h2 className="text-xl font-bold text-center mb-5 text-blue-700">
    Important Instructions
  </h2>

  <div className="bg-white shadow-md rounded-xl p-5 border border-gray-200">
    <ul className="space-y-3 text-gray-700 text-sm leading-6 list-disc pl-5">
      <li>
        For successful registration, at least one author should register before the deadline.
      </li>

      <li>
        The registration fee includes conference participation, meals, and conference materials.
      </li>

      <li>
        Participants are responsible for arranging and bearing their own expenses for travel and accommodation.
      </li>

     <li>
        Co-authors who wish to attend the conference are required to register as attendees.
      </li> 

     {/*  <li>
        There is <span className="font-semibold text-green-600">no publication fee</span>.
        We do not charge for extra pages.
      </li> */}

      <li>
        After completing the payment, please save the transaction ID and payment confirmation screenshot,
        as both are required during the registration process.
      </li>

      <li>
        A certificate of paper presentation will be issued after successful registration and presentation
        of the paper.
      </li>

      <li>
        Upon confirmation of registration, the corresponding author will receive a publishing agreement
        via email. The signed and scanned copy of this agreement must be submitted as per the instructions
        provided in the email.
      </li>
    </ul>
  </div>

 {/*  <div className="text-center mt-5">
    <p className="text-sm text-red-600 font-semibold">
      Early Bird Registration Deadline: October 05, 2026
    </p>
  </div> */}
</div>
  
                </div>

                 

          {/* Payment Information */}
          <Card className="mt-16 bg-blue-50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Payment Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">International Participants</h3>
                  <p className="text-gray-600 mb-4">Payment gateway link will be provided after registration</p>
                  <Card>
                    <CardContent className="p-4">
                      <CreditCard className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-sm">USD Payment Gateway</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-4">Indian Participants</h3>
                  <p className="text-gray-600 mb-4">Payment gateway link will be provided after registration</p>
                  <Card>
                    <CardContent className="p-4">
                      <Building2 className="h-12 w-12 text-secondary mx-auto mb-2" />
                      <p className="text-sm">INR Payment Gateway</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
