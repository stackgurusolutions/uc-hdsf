import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Calendar,
  MapPin,
  Users,
  FileText,
  Trophy,
  BookOpen,
  Globe,
  CheckCircle,
  Upload
} from "lucide-react";
import sdg6 from "@assets/E_SDG_PRINT-07.jpg";
import sdg9 from "@assets/E_SDG_PRINT-09.jpg";
import sdg12 from "@assets/E_SDG_PRINT-12.jpg";
import sdg15 from "@assets/E_SDG_PRINT-15.jpg";
import sdg17 from "@assets/E_SDG_PRINT-17.jpg";

import vandanaPhoto from "@assets/vandana.jpg";
import mujPhoto from "@assets/muj1.jpg";
import bharat from "@assets/Bharat.jpg";
import catherine from "@assets/catherine.png";
import jay from "@assets/jay.webp";
import shiv from "@assets/ShivaJi.jpeg"
import madan from "@assets/Selfie-Madan-Meena.jpg"


import conferenceBg from "@assets/conference_bg.png"; // <-- import the image

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
     <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">UC-HDSF 2026</h1>
          <p className="text-2xl md:text-3xl mb-4 text-blue-100">
           International Conference on Urban Cultures: Heritage, Design & Sustainable Futures 
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="text-accent" />
              <span className="text-lg">Oct 22-23, 2026</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-accent" />
              <span className="text-lg">Manipal University Jaipur, India</span>
            </div>
          </div>
            <p className="text-lg md:text-xl font-semibold mb-6">Organized by: Department of Fashion Design & Interior Design, School of Architecture & Design, FoSTA</p>          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/registration">
              <Button className="bg-accent hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                Register Now
              </Button>
            </Link>
            <Link href="/authors">
              <Button className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                Submit Paper
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
{/*
<section className="relative py-20 text-black">
  
  <div
    className="absolute inset-0 bg-cover bg-center opacity-70 z-0"
    style={{ backgroundImage: `url(${conferenceBg})` }}
  ></div>

  // Overlay content 
  <div className="relative container mx-auto px-4 text-center z-10">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">ICDIS 2025</h1>
  
 <div className="mx-auto bg-orange/10 rounded-lg p-10 max-w-5xl text-center">
  // Conference Name *
  <p className="text-3xl md:text-4xl font-extrabold mb-8 text-white-800">
    International Conference on Design, Innovation, and Sustainability
  </p>

  //* Date & Venue 
  <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12 text-lg font-semibold text-blue-900">
    <div className="flex items-center space-x-3">
      <Calendar className="text-accent w-6 h-6" />
      <span>November 4-5, 2025</span>
    </div>
    <div className="flex items-center space-x-3">
      <MapPin className="text-accent w-6 h-6" />
      <span>Manipal University Jaipur, India</span>
    </div>
  </div>
</div>



    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
       <br></br>
      <Link href="/registration">
        <Button className="bg-accent hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
          Register Now
        </Button>
      </Link>
      <Link href="/authors">
        <Button className="bg-white/10 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold backdrop-blur-sm">
          Submit Paper
        </Button>
      </Link>
    </div>
  </div>
</section>
*/}


      {/* Conference Themes */}
      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Conference Tracks
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Track 1 */}
      <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="text-4xl mb-4">🏙️</div>
          <h3 className="text-xl font-bold mb-4">Heritage and Urbanism</h3>
          <ul className="space-y-2 text-sm">
            <li>• Vernacular architecture and traditional knowledge systems</li>
            <li>• Urban heritage conservation and regeneration</li>
            <li>• Cultural landscapes and historic urban typologies</li>
            <li>• Folklore, spatial memory, and placemaking</li>
          </ul>
        </CardContent>
      </Card>

      {/* Track 2 */}
      <Card className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="text-4xl mb-4">🧵</div>
          <h3 className="text-xl font-bold mb-4">Craft and Material Cultures</h3>
          <ul className="space-y-2 text-sm">
            <li>• Material heritage and innovation</li>
            <li>• Vernacular interiors and spatial traditions</li>
            <li>• Craft clusters and artisan ecosystems</li>
            <li>• Craft revival and industry collaboration</li>
            <li>• Biophilic design and adaptive reuse</li>
          </ul>
        </CardContent>
      </Card>

      {/* Track 3 */}
      <Card className="bg-gradient-to-br from-pink-500 to-rose-600 text-white border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="text-4xl mb-4">👗</div>
          <h3 className="text-xl font-bold mb-4">Fashion, Textile & Cultural Heritage</h3>
          <ul className="space-y-2 text-sm">
            <li>• Traditional textile and fashion aesthetics</li>
            <li>• Dress narratives and cultural identity</li>
            <li>• Folklore in textile craft</li>
            <li>• Heritage conservation and indigenous clothing</li>
            <li>• Cross-cultural fashion narratives</li>
          </ul>
        </CardContent>
      </Card>

      {/* Track 4 */}
      <Card className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="text-4xl mb-4">🧠</div>
          <h3 className="text-xl font-bold mb-4">Human-Centred Design & Well-being</h3>
          <ul className="space-y-2 text-sm">
            <li>• Anthropometry and vernacular ergonomics</li>
            <li>• Inclusive and culturally responsive design</li>
            <li>• Neuroaesthetics and spatial perception</li>
            <li>• Healing and restorative environments</li>
          </ul>
        </CardContent>
      </Card>

      {/* Track 5 */}
      <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="text-4xl mb-4">🌱</div>
          <h3 className="text-xl font-bold mb-4">Sustainable Technologies & Innovation</h3>
          <ul className="space-y-2 text-sm">
            <li>• Digital heritage documentation and preservation</li>
            <li>• AI, parametric design, and AR/VR applications</li>
            <li>• Circular design and traditional knowledge systems</li>
            <li>• Sustainable materials and smart textiles</li>
            <li>• Zero-waste practices and resilient built environments</li>
          </ul>
        </CardContent>
      </Card>

    </div>
  </div>
</section>

      {/* Important Dates */}
      <section className="py-20 bg-gray-100">
        <section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Important Dates
    </h2>

    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 1 */}
        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center">
                <FileText />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Abstract Submission</h3>
                <p className="text-primary font-bold">June 05, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 2 */}
        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center">
                <Trophy />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Acceptance Notification</h3>
                <p className="text-secondary font-bold">June 25, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 3 */}
        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center">
                <FileText />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Full Paper Submission</h3>
                <p className="text-accent font-bold">August 10, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4 */}
        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <CheckCircle />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Full Paper Decision</h3>
                <p className="text-blue-600 font-bold">September 10, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5 */}
        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <Upload />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Camera-Ready Submission</h3>
                <p className="text-purple-600 font-bold">October 05, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 6 */}
        <Card className="bg-white shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <Users />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Early Bird Registration</h3>
                <p className="text-green-600 font-bold">October 05, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  </div>
</section>
      </section>

      {/* About Section 
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About ICDIS 2025</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The International Conference on Design, Innovation, and Sustainability (ICDIS-2025) aims to address key research challenges in the areas of design, innovation, and sustainability, with a strong focus on aligning with the United Nations Sustainable Development Goals (SDGs). The conference provides a platform to showcase significant research and foster discussions across various disciplines related to sustainable design and innovation practices. Eminent keynote speakers from around the world will share their expertise, insights, and perspectives on future directions.   </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <p className="text-gray-600">Days of Conference</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <p className="text-gray-600">Expected Papers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">200+</div>
                <p className="text-gray-600">Expected Participants</p>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">About UC-HDSF 2026</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        The Department of Fashion Design & Department of Interior Design, School of Architecture & Design, FoSTA, Manipal University Jaipur, India is organizing the International Conference on Urban Cultures: Heritage, Design & Sustainable Futures (UC-HDSF 2026) on October 22–23, 2026. The conference invites industry professionals, academicians, researchers, and students to submit original, high-quality, and previously unpublished research papers. The conference aims to explore the intersection of cultural heritage, design practices, and sustainable development within the framework of contemporary human settlements. It seeks to address critical challenges related to urban transformation, cultural continuity, and future-oriented design innovation. UC-HDSF 2026 will provide an interdisciplinary platform for dialogue across architecture, interiors, craft, fashion, and human-centred design, encouraging knowledge exchange between academia, industry, and policy domains. Eminent keynote speakers from across the globe will share their expertise and perspectives on emerging trends and future directions.
Selected papers will be considered for publication in a Scopus-indexed conference proceeding in the form of book. 
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
        <div>
          <div className="text-3xl font-bold text-primary mb-2">2</div>
          <p className="text-gray-600">Days of Conference</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-secondary mb-2">50+</div>
          <p className="text-gray-600">Expected Papers</p>
        </div>
        <div>
          <div className="text-3xl font-bold text-accent mb-2">200+</div>
          <p className="text-gray-600">Expected Participants</p>
        </div>
      </div>

      {/* SDG Logos */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
        <img src={sdg6} alt="SDG 1 No Poverty" className="w-16 h-16" />
       <img src={sdg9} alt="SDG 7 Affordable Clean Energy" className="w-16 h-16" />
        <img src={sdg12} alt="SDG 9 Industry Innovation and Infrastructure" className="w-16 h-16" />
        <img src={sdg15} alt="SDG 12 Responsible Consumption" className="w-16 h-16" />
        <img src={sdg17} alt="SDG 13 Climate Action" className="w-16 h-16" />
       </div>
    </div>

    {/* Publication Info */}
            <Card className="mt-12 bg-gray-50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Publication and Indexing</h2>
                <p className="text-gray-700 mb-4">
                 The proceedings of the conference are proposed to be published in the Scopus indexed Springer book series. The proposed title of the book is “Urban Cultures: Heritage, Design & Sustainable Futures.” with an ISBN (subject to approval), following the publisher’s quality review process.
                <br/>
                In addition, a special issue “Heritage, Craft and Sustainability” in a reputed journal TEXTILE: Cloth & Culture (Taylor & Francis).
                currently in process for extended versions of selected papers.
                                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Abstract Book
                  </div>
                  <div className="bg-secondary text-white px-4 py-2 rounded-lg flex items-center">
                    <Trophy className="mr-2 h-4 w-4" />
                    Scopus Journals
                  </div>
                </div>
              </CardContent>
            </Card>
  </div>
</section>


      {/* Speakers Section */}
      <section className="py-20 bg-gray-50">

         <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Distinguished Speakers</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            UC-HDSF 2026 is honored to host distinguished keynote speakers from reputed academic and research institutions worldwide
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

        
      </section>

{/* University Section */}
<section className="py-20 bg-gray-100">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Manipal University Jaipur</h2>

    <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      
      {/* Left: University Image */}
      <div className="md:w-1/3">
        <img
          src={mujPhoto} // <-- replace with your university image
          alt="Manipal University Jaipur"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: University Info */}
      <div className="md:w-2/3 p-8 text-left">
        <h3 className="text-2xl font-bold mb-4">Manipal University Jaipur</h3>
        <p className="text-gray-700 mb-4">
          Manipal University Jaipur (MUJ) is a prestigious academic institution in India, committed to excellence in teaching, research, and innovation.
        </p>
        <p className="text-gray-700 mb-4">
          MUJ provides state-of-the-art facilities, a diverse and inclusive environment, and a platform for students and researchers to explore creative and impactful solutions in design, innovation, and sustainability.
        </p>
        <p className="text-gray-700">
          For more information, visit the official website:
          <a href="https://jaipur.manipal.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 ml-2 hover:underline">
            www.jaipur.manipal.edu/
          </a>
          {/* Social / Website Links */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.jaipur.manipal.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Globe className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/manipaluniversityjaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-800 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.instagram.com/jaipurmanipal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="w-6 h-6 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </p>
      </div>
    </div>
  </div>
</section>




    </div>
  );
}
