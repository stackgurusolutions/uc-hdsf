import { Calendar, Trophy, BookOpen, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Authors() {

  const trackStyles = [
    {
      bg: "bg-[#B8523010]",
      border: "border-[#B85230]",
      text: "text-[#B85230]",
      icon: "1.",
    },
    {
      bg: "bg-[#8E754010]",
      border: "border-[#8E7540]",
      text: "text-[#8E7540]",
      icon: "2.",
    },
    {
      bg: "bg-[#B8523010]",
      border: "border-[#B85230]",
      text: "text-[#B85230]",
      icon: "3.",
    },
    {
      bg: "bg-[#1D2E5E10]",
      border: "border-[#1D2E5E]",
      text: "text-[#1D2E5E]",
      icon: "4.",
    },
    {
      bg: "bg-[#2A9D8F10]",
      border: "border-[#2A9D8F]",
      text: "text-[#2A9D8F]",
      icon: "5.",
    },
  ];

  return (
    <div>

      {/* Hero */}
      <section className="py-20 bg-primary border-b border-[#DDD6CE]">

        <div className="container mx-auto px-4 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Call for Papers
          </h1>

          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Submit your original research and contribute to global discussions on
            heritage, design, culture, and sustainable futures.
          </p>

        </div>

      </section>

      {/* Main */}
      <section className="py-20 bg-white">

        <div className="container mx-auto px-4">

          <div className="max-w-6xl mx-auto">

            {/* Submission Guidelines */}
            <Card className="bg-white border border-[#D6D1CB] shadow-sm rounded-xl mb-16 overflow-hidden">

              <CardContent className="p-10">

                <div className="mb-10">

                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    Submission Guidelines
                  </h2>

                  <div className="w-20 h-[2px] bg-black"></div>

                </div>

                <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mb-10">
                  Researchers, academicians, and professionals are invited to submit
                  research abstracts and full papers for oral and poster presentations.
                  Selected presentations will be recognized under the
                  <span className="font-semibold text-black">
                    {" "}Best Paper Category{" "}
                  </span>
                  and
                  <span className="font-semibold text-black">
                    {" "}Outstanding Research Category.
                  </span>
                </p>

                <div className="grid md:grid-cols-2 gap-8">

                  {/* Requirements */}
                  <div className="border border-[#D6D1CB] rounded-lg p-8 bg-[#FAFAFA]">

                    <div className="flex items-center gap-3 mb-6">

                      <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                        <FileText className="w-5 h-5 text-black" />
                      </div>

                      <h3 className="text-xl font-semibold text-black">
                        Submission Requirements
                      </h3>

                    </div>

                    <ul className="space-y-4 text-gray-700">

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>Original and unpublished research work</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>High-quality academic and scholarly content</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>Compliance with conference formatting guidelines</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>All submissions undergo peer review</span>
                      </li>

                    </ul>

                  </div>

                  {/* Formats */}
                  <div className="border border-[#D6D1CB] rounded-lg p-8 bg-[#FAFAFA]">

                    <div className="flex items-center gap-3 mb-6">

                      <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                        <Users className="w-5 h-5 text-black" />
                      </div>

                      <h3 className="text-xl font-semibold text-black">
                        Presentation Formats
                      </h3>

                    </div>

                    <ul className="space-y-4 text-gray-700">

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>Oral presentations</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>Poster presentations</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>Panel discussions</span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                        <span>Interactive academic sessions</span>
                      </li>

                    </ul>

                  </div>

                </div>

              </CardContent>

            </Card>

            {/* Research Topics */}
            <div>

              <div className="text-center mb-14">

                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                  Research Tracks
                </h2>

                <div className="w-20 h-[2px] bg-black mx-auto"></div>

              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {[
                  {
                    title: "Heritage and Urbanism",
                    items: [
                      "Vernacular architecture and traditional knowledge systems",
                      "Urban heritage conservation and regeneration",
                      "Cultural landscapes and historic urban typologies",
                      "Folklore, spatial memory, and placemaking",
                    ],
                  },
                  {
                    title: "Craft and Material Cultures",
                    items: [
                      "Material heritage and innovation",
                      "Vernacular interiors and spatial traditions",
                      "Craft clusters and artisan ecosystems",
                      "Craft revival and industry collaboration",
                      "Biophilic design and adaptive reuse",
                    ],
                  },
                  {
                    title: "Fashion, Textile & Cultural Heritage",
                    items: [
                      "Traditional textile and fashion aesthetics",
                      "Dress narratives and cultural identity",
                      "Folklore in textile craft",
                      "Heritage conservation and indigenous clothing",
                      "Cross-cultural fashion narratives",
                    ],
                  },
                  {
                    title: "Human-Centred Design & Well-being",
                    items: [
                      "Anthropometry and vernacular ergonomics",
                      "Inclusive and culturally responsive design",
                      "Neuroaesthetics and spatial perception",
                      "Healing and restorative environments",
                    ],
                  },
                  {
                    title: "Sustainable Technologies & Innovation",
                    items: [
                      "Digital heritage documentation and preservation",
                      "AI, parametric design, and AR/VR applications",
                      "Circular design and traditional knowledge systems",
                      "Sustainable materials and smart textiles",
                      "Zero-waste practices and resilient built environments",
                    ],
                  },
                ].map((track, index) => (

                  <Card
                    key={index}
                    className={`${trackStyles[index].bg} ${trackStyles[index].border} border shadow-sm rounded-xl`}
                  >

                    <CardContent className="p-8">

                      <h3
                        className={`text-xl font-semibold mb-5 flex items-center gap-2 ${trackStyles[index].text}`}
                      >
                        <span>{trackStyles[index].icon}</span>
                        {track.title}
                      </h3>

                      <ul className="space-y-3 text-sm text-[#1B1410] leading-relaxed">

                        {track.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                            <span>{item}</span>
                          </li>
                        ))}

                      </ul>

                    </CardContent>

                  </Card>
                ))}

              </div>

            </div>

            {/* Publication */}
            <Card className="mt-16 bg-[#FAFAFA] border border-[#D6D1CB] shadow-sm rounded-xl">

              <CardContent className="p-10">

                <h2 className="text-3xl font-bold text-black mb-6">
                  Publication & Indexing
                </h2>

                <div className="w-20 h-[2px] bg-black mb-8"></div>

                <p className="text-gray-700 leading-relaxed text-lg mb-8">
                 All selected papers will be published in Springer (Scopus-indexed) book series under the proposed title: Urban Cultures- Heritage, Design & Sustainable Futures (ISBN subject to approval).
                  <br/>A limited number of high-quality papers will be considered for a special issue in TEXTILE: Cloth and Culture (Taylor & Francis, Scopus Q2). Extended versions will be required for journal consideration. All submissions will undergo double-blind peer review.
                </p>
              <img
                  src="/pub-logo.png"
                  alt="Publication and Indexing"
                className="w-64 md:w-80 mx-auto object-contain mb-6"
                />
             {/*    <div className="flex flex-wrap gap-4">

                  <div className="bg-black text-white px-5 py-3 rounded-lg flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Abstract Book
                  </div>

                  <div className="bg-[#B85230] text-white px-5 py-3 rounded-lg flex items-center">
                    <Trophy className="mr-2 h-4 w-4" />
                    Scopus Indexed Proceedings
                  </div>

                </div> */}

              </CardContent>

            </Card>

          </div>

        </div>

      </section>

    </div>
  );
}