import { Calendar, Trophy, BookOpen, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CallForPapers() {

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

            Explore the conference themes and research domains through the research tracks.
            
          </p>

        </div>

      </section>

      {/* Main */}
      <section className="py-20 bg-white">

        <div className="container mx-auto px-4">

          <div className="max-w-6xl mx-auto">

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

          </div>

        </div>

      </section>

    </div>
  );
}