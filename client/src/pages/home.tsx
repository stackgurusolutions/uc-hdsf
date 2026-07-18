import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageSlider from "../components/ImageSlider";

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
import sdg3 from "@assets/E_SDG_PRINT-03.jpg";
import sdg4 from "@assets/E_SDG_PRINT-04.jpg";
import sdg8 from "@assets/E_SDG_PRINT-08.jpg";
import sdg9 from "@assets/E_SDG_PRINT-09.jpg";
import sdg11 from "@assets/E_SDG_PRINT-11.jpg";
import sdg12 from "@assets/E_SDG_PRINT-12.jpg";
import sdg13 from "@assets/E_SDG_PRINT-13.jpg";

import vandanaPhoto from "@assets/vandana.jpg";
import mujPhoto from "@assets/muj1.jpg";
import bharat from "@assets/Bharat.jpg";
import catherine from "@assets/catherine.png";
import jay from "@assets/jay.webp";
import shiv from "@assets/ShivaJi.jpeg"
import madan from "@assets/Selfie-Madan-Meena.jpg"
import vinodPhoto from "@assets/vinodPhoto.jpg";


import conferenceBg from "@assets/conference_bg.png"; // <-- import the image

export default function Home() {

  
  return (
    <div>

      {/* ================= HERO ================= */}
    <section className="relative overflow-hidden">

  {/* Desktop Banner */}
  <div className="hidden md:block relative">
    <img
      src="/landing.jpeg"
      alt="Conference Banner"
      className="w-full h-auto"
    />
  </div>

  {/* Mobile Banner */}
  <div className="md:hidden relative h-[60vh] overflow-hidden">
    <img
      src="/landing.jpeg"
      alt="Conference Banner"
      className="absolute inset-0 w-full h-full object-cover object-left"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/0 z-0" />

  {/* Content */}
  <div className="absolute inset-0 z-10 flex items-center justify-center">
    <div className="container mx-auto px-4 text-center">

      <p
        className="
          text-xl md:text-4xl
          mb-4
          text-black
          leading-tight
          italic
          font-semibold
        "
        style={{ fontFamily: "Cambria, Georgia, serif" }}
      >
        International Conference on
        <br />
        <span className="block mt-2">
          Urban Cultures: Heritage, Design & Sustainable Futures
        </span>
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-black">

        <div className="flex items-center gap-2">
          <Calendar className="text-black w-5 h-5" />
          <span className="font-medium">
            Oct 22–23, 2026
          </span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin className="text-black w-5 h-5" />
          <span className="font-medium">
            Manipal University Jaipur, India
          </span>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">

        <Link href="/registration">
          <Button className="bg-[#F59E0B] hover:bg-[#d97706] px-8 py-4 text-lg rounded-full">
            Register Now
          </Button>
        </Link>

        <Link href="/guidelines">
          <Button
            className="
              bg-black/10
              text-black
              border-2
              border-black
              hover:bg-white
              hover:text-black
              px-8
              py-4
              text-lg
              rounded-full
              backdrop-blur-sm
              transition-all
            "
          >
            Submit Full Paper
          </Button>
        </Link>

      </div>

    </div>
  </div>

</section>
                

      {/* <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">

      <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/landing.jpeg')" }}
            />

        <div className="absolute inset-0 bg-gradient-to-b" />

        <div className="relative container mx-auto px-4 text-center z-0">

          <p
            className="
    text-3xl md:text-3xl
    mb-4
    text-black
    leading-tight
    italic
    font-semibold
  "
            style={{ fontFamily: "Cambria, Georgia, serif" }}
          >
            International Conference on
            <br />

            <span className="block mt-2">
              Urban Cultures: Heritage, Design & Sustainable Futures
            </span>
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-black">

            <div className="flex items-center gap-2">
              <Calendar className="text-black w-5 h-5" />

              <span className="text-black font-medium">
                Oct 22–23, 2026
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="text-black w-5 h-5" />

              <span className="text-black font-medium">
                Manipal University Jaipur, India
              </span>
            </div>

          </div>

           <p className="text-lg md:text-xl font-semibold mb-8 text-black">
            Organized by: Department of Fashion Design & Interior Design, School of Architecture & Design, FoSTA
          </p> 

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/registration">
              <Button className="bg-[#F59E0B] hover:bg-[#d97706] px-8 py-4 text-lg rounded-full">
                Register Now
              </Button>
            </Link>

            <Link href="/authors">
              <Button
                className="
    bg-black/10
    text-black
    border-2
    border-black
    hover:bg-white
    hover:text-black
    active:bg-white
    active:text-black
    focus:bg-white
    focus:text-black
    px-8
    py-4
    text-lg
    rounded-full
    backdrop-blur-sm
    transition-all
  "
              >
                Submit Paper
              </Button>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Important Dates */}
      {/* ================= IMPORTANT DATES ================= */}
      <section className="py-24 bg-[#F7F5F2]">

        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-2">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Important Dates</h2>
     {/*        <div className="w-24 h-[2px] bg-black mx-auto mt-4"></div> */}

          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

            {[
              {
                title: "Abstract Submission",
                date: "05 JUNE 2026",
              },
              {
                title: "Acceptance Notification",
                date: "25 JUNE 2026",
              },
              {
                title: "Full Paper Submission",
                date: "01 AUGUST 2026",
              },
              {
                title: "Full Paper Decision",
                date: "10 SEPTEMBER 2026",
              },
              {
                title: "Camera-Ready Submission",
                date: "25 SEPTEMBER 2026",
              },
              {
                title: "Early Bird Registration",
                date: "10 AUGUST 2026",
              }
            ].map((item, index) => (

              <Card
                key={index}
                className="
            bg-white
            border
            border-[#D6D1CB]
            rounded-lg
            shadow-sm
            hover:shadow-md
            transition-all
            duration-300
          "
              >

                <CardContent className="p-4 flex flex-col items-center text-center">

                  {/* Icon */}
                  <div className="mb-4">

                    <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-black" />
                    </div>

                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-black leading-snug mb-3">
                    {item.title}
                  </h3>

                  {/* Date */}
                  <p
                    className="
      text-xs
      tracking-[0.15em]
      uppercase
      text-gray-600
      font-medium
    "
                  >
                    {item.date}
                  </p>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

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
            <p className="text-gray-600 text-justify">
          
              The Department of Fashion Design & Department of Interior Design,
              School of Architecture & Design, FoSTA, Manipal University Jaipur,
              India is organizing the International Conference on
              <span className="font-semibold text-black">
                {" "}Urban Cultures: Heritage, Design & Sustainable Futures (UC-HDSF 2026)
              </span>
              on October 22–23, 2026.

              The conference invites industry professionals, academicians,
              researchers, and students to submit original, high-quality,
              and previously unpublished research papers.

              The conference aims to explore the intersection of cultural heritage,
              design practices, and sustainable development within the framework
              of contemporary human settlements. It seeks to address critical
              challenges related to urban transformation, cultural continuity,
              and future-oriented design innovation.

              UC-HDSF 2026 will provide an interdisciplinary platform for dialogue
              across architecture, interiors, craft, fashion, and human-centred
              design, encouraging knowledge exchange between academia, industry,
              and policy domains.

              Eminent keynote speakers from across the globe will share their
              expertise and perspectives on emerging trends and future directions.
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
              <img src={sdg3} alt="SDG 3 Good Health and Well-being" className="w-16 h-16" />
              <img src={sdg4} alt="SDG 4 Quality Education" className="w-16 h-16" />
               <img src={sdg8} alt="SDG 8 Decent Work and Economic Growth" className="w-16 h-16" />
              <img src={sdg9} alt="SDG 9 Industry Innovation and Infrastructure" className="w-16 h-16" />
              <img src={sdg11} alt="SDG 11 Sustainable Cities and Communities" className="w-16 h-16" />
              <img src={sdg12} alt="SDG 12 Responsible Consumption" className="w-16 h-16" />
              <img src={sdg13} alt="SDG 13 Climate Action" className="w-16 h-16" />
             
            </div>
          </div>

          {/* Publication Info */}
          <Card className="mt-12 bg-gray-50">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Publication and Indexing</h2>
              <p className="text-gray-700 mb-4">
                All selected papers will be published in Springer (Scopus-indexed) book series under the proposed title: Urban Cultures- Heritage, Design & Sustainable Futures.
                <br />A limited number of high-quality papers will be considered for a special issue in TEXTILE: Cloth and Culture (Taylor & Francis, Scopus Q2).
                Extended versions will be required for journal consideration.
                All submissions will undergo double-blind peer review.
              </p>
               <img
                  src="/pub-logo.png"
                  alt="Publication and Indexing"
                className="w-64 md:w-80 mx-auto object-contain mb-6"
                />


              {/* <div className="flex flex-wrap gap-4">
                <div className="bg-primary text-white px-4 py-2 rounded-lg flex items-center">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Abstract Book
                </div>
                <div className="bg-primary text-white px-4 py-2 rounded-lg flex items-center">
                  <Trophy className="mr-2 h-4 w-4" />
                  Scopus Journals
                </div>
              </div> */}
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



          <section id="speakers" className="py-20 bg-white">
            <div className="container mx-auto px-4">

              {/* Keynote Speakers */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-12">
                  Keynote Speakers(To be Decided)
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


      <section className="bg-trustnet-bg-light py-20">
  <div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-bold text-center mb-8">


      ABOUT JAIPUR
      <div className="w-20 h-1 bg-[#B6671D] mx-auto mt-3 rounded-full"></div>
    </h2>




      <ImageSlider />
      </div>
</section>
{/* ================= MOVING IMAGE SLIDER ================= */}

      <section className="bg-trustnet-bg-light py-20">
  <div className="max-w-6xl mx-auto px-6">


    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
      VENUE
      <div className="w-20 h-1 bg-[#B6671D] mx-auto mt-3 rounded-full"></div>
    </h2>


    {/* Description */}
    <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-14">
      The conference will be held at Manipal University Jaipur, a premier
      institution known for its state-of-the-art facilities and beautiful campus.
    </p>


    {/* Image + Map */}
    <div className="grid md:grid-cols-2 gap-8 items-center">


      {/* Campus Video */}
<div className="rounded-xl overflow-hidden shadow-lg">
  <video
    className="w-full h-80 object-cover transition duration-300"
    src="/MUJ_Venue.webm"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

      {/* Google Map Embed */}
      <div className="rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Manipal University Jaipur Location"
          src="https://www.google.com/maps?q=Manipal+University+Jaipur&output=embed"
          width="100%"
          height="320"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>


    </div>


    {/* Address 
    <div className="mt-10 text-center">
      <p className="text-lg text-gray-800">
        <span className="font-semibold">Address:</span> Manipal University Jaipur,
        Dehmi Kalan, Near GVK Toll Plaza, Jaipur-Ajmer Express Highway,
        Jaipur, Rajasthan 303007, India
      </p>
    </div>*/}


  </div>
</section>

                    

      
    </div>
  );
}