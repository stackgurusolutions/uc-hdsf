import { Card, CardContent } from "@/components/ui/card";
import { Globe } from "lucide-react"

import vandanaPhoto from "@assets/vandana.jpg";
import mujPhoto from "@assets/muj1.jpg";
import bharat from "@assets/Bharat.jpg";
import catherine from "@assets/catherine.png";
import jay from "@assets/jay.webp";
import shiv from "@assets/ShivaJi.jpeg"
import madan from "@assets/Selfie-Madan-Meena.jpg"



export default function Speakers() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Distinguished Speakers</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            ICDIS 2025 is honored to host distinguished keynote speakers from reputed academic and research institutions worldwide
          </p>
        </div>
      </section>
       <section className="py-20 bg-white">
  <div className="container mx-auto px-4">

    {/* Keynote Speakers */}
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">
        Keynote Speakers
      </h2>

     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  <Card className="shadow-lg">
                    <CardContent className="p-8 text-center">
                      <img
                        src={bharat}
                        alt="Dr. Bharat Dahiya"
                        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                      />
                      <h3 className="text-xl font-bold mb-2">Dr. Bharat Dahiya</h3>
                      <p className="text-gray-600">
                        Director, Research Center for Sustainable Development and Innovation,
                        School of Global Studies, Thammasat University, Bangkok
                      </p>
                    </CardContent>
                  </Card>
                     <Card className="shadow-lg">
                    <CardContent className="p-8 text-center">
                      <img
                        src={jessicaPhoto}
                        alt="Prof. Jessica Hemmings"
                        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                      />
                      <h3 className="text-xl font-bold mb-2">Prof. Jessica Hemmings</h3>
                      <p className="text-gray-600">
                        Craft, HDK-Valand University of Gothenburg, & Professor, Oslo School of Architecture & Design
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="shadow-lg">
                    <CardContent className="p-8 text-center">
                      <img
                        src={vinodPhoto}
                        alt="Prof. Catherine Harper"
                        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                      />
                      <h3 className="text-xl font-bold mb-2">Dr. Vinod Gupta</h3>
                      <p className="text-gray-600">
                        Space Design Consultants
                      </p>
                    </CardContent>
                  </Card>
                 
                  <Card className="shadow-lg">
                    <CardContent className="p-8 text-center">
                      <img
                        src={vandanaPhoto}
                        alt="Prof. Vandana Kabra Bhandari"
                        className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                      />
                      <h3 className="text-xl font-bold mb-2">Prof. Dr. Vandana Kabra Bhandari</h3>
                      <p className="text-gray-600">
                        Researcher & Educator<br />
                        Former Dean, NIFT
                      </p>
                    </CardContent>
                  </Card>

                </div> 
    </div>

  </div>
</section>
    
    </div>
  );
}
