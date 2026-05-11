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

        {/* 1 */}
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

        {/* 2 */}
        <Card className="shadow-lg">
          <CardContent className="p-8 text-center">
             <img 
              src={catherine} 
              alt="Prof. Catherine Harper" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg" 
            />
            <h3 className="text-xl font-bold mb-2">Prof. Catherine Harper</h3>
            <p className="text-gray-600">
              Provost & Pro Vice-Chancellor, The British University in Egypt,
              Chair Professor of Design, Woxsen University, India<br/>
              Co-Editor-in-Chief, <em>TEXTILE: Cloth & Culture</em>
            </p>
          </CardContent>
        </Card>

        {/* 3 */}
        <Card className="shadow-lg">
          <CardContent className="p-8 text-center">
             <img 
              src={jay} 
              alt="Prof. Jay Thakkar" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg" 
            />
            <h3 className="text-xl font-bold mb-2">Prof. Jay Thakkar</h3>
            <p className="text-gray-600">
              Curator, Researcher & Professor<br/>
              Faculty of Design, CEPT University
            </p>
          </CardContent>
        </Card>

        {/* 4 */}
        <Card className="shadow-lg">
          <CardContent className="p-8 text-center">
             <img 
              src={shiv} 
              alt="Prof. Shivaji" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg" 
            />
            <h3 className="text-xl font-bold mb-2">Prof. Shivaji</h3>
            <p className="text-gray-600">
              Associate Professor & Head<br/>
              Department of Design, IIT Hyderabad
            </p>
          </CardContent>
        </Card>

        {/* 5 */}
        <Card className="shadow-lg">
          <CardContent className="p-8 text-center">
             <img 
              src={madan} 
              alt="Mr. Madan Meena" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg" 
            />
            <h3 className="text-xl font-bold mb-2">Mr. Madan Meena</h3>
            <p className="text-gray-600">
              Director, Adivasi Academy, Tejgadh, Gujarat<br/>
              Trustee, Bhasha Research & Publication Centre<br/>
              Executive Member, Kota Heritage Society<br/>
              Member, Rajasthan Lalit Kala Academy
            </p>
          </CardContent>
        </Card>

        {/* 6 (Already exists - keep enhanced) */}
        <Card className="shadow-lg">
          <CardContent className="p-8 text-center">
            <img 
              src={vandanaPhoto} 
              alt="Prof. Vandana Kabra Bhandari" 
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg" 
            />
            <h3 className="text-xl font-bold mb-2">Prof. Dr. Vandana Kabra Bhandari</h3>
            <p className="text-gray-600">
              Researcher & Educator<br/>
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
