import { Card, CardContent } from "@/components/ui/card";
import vaitheeswaran from "@assets/image_1755327096372.png";
import nitiNipunSharma from "@assets/image_1755327134984.png";
import karunakar from "@assets/image_1755327160450.png";
import amitSoni from "@assets/image_1755327170741.png";
import nituBhatnagar from "@assets/image_1755327205249.png";
import kuldeepSangwan from "@assets/image_1755327253106.png";
import pooja from "@assets/1142.jpg";
import barsa from "@assets/808.jpg";
import kusum from "@assets/616.jpg";
import richaJagatramka from "@assets/image_1755327339690.png";
import deepshikhaSharma from "@assets/image_1755327418005.png";
import aanchalTrehan from "@assets/image_1755327441919.png";
import mahboobAnwer from "@assets/image_1755327458839.png";
import aanchal from "@assets/604.jpg";

import pratibha from "@assets/pratiba1.jpeg";
import snehSingh from "@assets/68.jpg";

import ning from "@assets/619.jpg"



export default function orgnizingcommittee() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Organizing Committee</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Meet the organizing committee behind UC-HDFS 2026
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Leadership Hierarchy */}
          <div className="space-y-16">
            {/* Chief Patron */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Chief Patron</h2>
              <Card className="bg-gradient-to-br from-primary/10 to-blue-50 shadow-lg max-w-md mx-auto">
                <CardContent className="p-8 text-center">
                  <img 
                    src={vaitheeswaran} 
                    alt="Mr. S. Vaitheeswaran" 
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg" 
                  />
                  <h3 className="text-xl font-bold mb-2">Mr. S. Vaitheeswaran</h3>
                  <p className="text-primary font-semibold">Chairperson</p>
                  <p className="text-gray-600">Manipal University Jaipur, Rajasthan, India</p>
                </CardContent>
              </Card>
            </div>

            {/* Patron */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Patron</h2>
              <Card className="bg-gradient-to-br from-secondary/10 to-green-50 shadow-lg max-w-md mx-auto">
                <CardContent className="p-8 text-center">
                  <img 
                    src={nitiNipunSharma} 
                    alt="Dr. Niti Nipun Sharma" 
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg" 
                  />
                  <h3 className="text-xl font-bold mb-2">Dr. Niti Nipun Sharma</h3>
                  <p className="text-secondary font-semibold">President</p>
                  <p className="text-gray-600">Manipal University Jaipur, Rajasthan, India</p>
                </CardContent>
              </Card>
            </div>

            {/* Co-Patrons */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Co-Patrons</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="shadow-lg border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={karunakar} 
                      alt="Dr. Karunakar A. Kotegar" 
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200 shadow-md" 
                    />
                    <h3 className="font-bold mb-2">Dr. Karunakar A. Kotegar</h3>
                    <p className="text-accent font-semibold">Pro-President</p>
                    <p className="text-sm text-gray-600">Manipal University Jaipur</p>
                  </CardContent>
                </Card>
                <Card className="shadow-lg border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={amitSoni} 
                      alt="Dr. Amit Soni" 
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200 shadow-md" 
                    />
                    <h3 className="font-bold mb-2">Dr. Amit Soni</h3>
                    <p className="text-accent font-semibold">Registrar</p>
                    <p className="text-sm text-gray-600">Manipal University Jaipur</p>
                  </CardContent>
                </Card>
                <Card className="shadow-lg border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={nituBhatnagar} 
                      alt="Dr. Nitu Bhatnagar" 
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200 shadow-md" 
                    />
                    <h3 className="font-bold mb-2">Dr. Nitu Bhatnagar</h3>
                    <p className="text-accent font-semibold">Provost</p>
                    <p className="text-sm text-gray-600">Manipal University Jaipur</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Conference Chairs */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Conference Chairs</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-design/10 to-pink-50 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={kuldeepSangwan} 
                      alt="Dr. Kuldeep Sangwan" 
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-design/20 shadow-md" 
                    />
                    <h3 className="font-bold mb-2">Dr. Kuldeep Sangwan</h3>
                    <p className="text-accent font-semibold">Dean,FoSTA</p>
                    <p className="text-sm text-gray-600">Manipal University Jaipur</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-innovation/10 to-blue-50 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={pooja} 
                      alt="Dr. Pooja Lalit Kumar " 
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-innovation/20 shadow-md" 
                    />
                    <h3 className="font-bold mb-2">Dr. Pooja Lalit Kumar </h3>
                    <p className="text-accent font-semibold">Director</p>
                    <p className="text-sm text-gray-600">School of Architecture and Design</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-sustainability/10 to-green-50 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <img 
                      src={pratibha} 
                      alt="Dr. Pratibha" 
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-sustainability/20 shadow-md" 
                    />
                    <h3 className="font-bold mb-2">Dr. Pratibha Mishra </h3>
                    <p className="text-accent font-semibold">Head</p>
                    <p className="text-sm text-gray-600">Department of Fashion Design & Interior Design</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Organizing Committee */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-8">Organizing Committee</h2>
              <Card className="bg-gray-50">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Conveners */}
                   <div className="md:col-span-2 lg:col-span-4 mb-6">
  <h3 className="text-xl font-bold mb-4 text-center">
    Conference Conveners
  </h3>

  <div className="grid md:grid-cols-2 gap-4 justify-center max-w-2xl mx-auto">
    
    <Card>
      <CardContent className="p-4 text-center">
        <img
          src={deepshikhaSharma}
          alt="Dr. Deepshikha Sharma"
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-primary/20 shadow-md"
        />
        <h4 className="font-semibold">Dr. Deepshikha Sharma</h4>
        <p className="text-sm text-primary">
          Department of Fashion Design
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4 text-center">
        <img
          src={snehSingh}
          alt="Dr Sneh Singh"
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-primary/20 shadow-md"
        />
        <h4 className="font-semibold">Dr. Sneh Singh</h4>
        <p className="text-sm text-primary">
          Department of Interior Design
        </p>
      </CardContent>
    </Card>

  </div>
</div>
                    
                    {/* Secretary */}

                    <div className="md:col-span-2 lg:col-span-4 mb-6">
  <h3 className="text-xl font-bold mb-4 text-center">
    Organizing Secretary(s)
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

    <Card>
      <CardContent className="p-4 text-center">
        <img
          src={mahboobAnwer}
          alt="Mr. Mahboob Anwer"
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-primary/20 shadow-md"
        />
        <h4 className="font-semibold">Mr. Mahboob Anwer</h4>
        <p className="text-sm text-primary">
          Department of Fashion Design
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4 text-center">
        <img
          src={barsa}
          alt="Ms. Barsa Mohanty"
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-primary/20 shadow-md"
        />
        <h4 className="font-semibold">Ms. Barsa Mohanty</h4>
        <p className="text-sm text-primary">
          Department of Interior Design
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4 text-center">
        <img
          src={aanchal}
          alt="Dr. Aanchal Trehan"
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-primary/20 shadow-md"
        />
        <h4 className="font-semibold">Dr. Aanchal Trehan</h4>
        <p className="text-sm text-primary">
          Department of Fashion Design
        </p>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-4 text-center">
        <img
          src={kusum}
          alt="Dr. Kusum Kanwar"
          className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-primary/20 shadow-md"
        />
        <h4 className="font-semibold">Dr. Kusum Kanwar</h4>
        <p className="text-sm text-primary">
          Department of Media, Communication and Fine Arts
        </p>
      </CardContent>
    </Card>

  </div>
</div>


                                        
                    {/* Additional Committee Members */}
                    <div className="md:col-span-2 lg:col-span-4">
                      <h3 className="text-xl font-bold mb-4 text-center">Committee Members</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardContent className="p-4">
                            <h4 className="font-semibold">Mr.Ningthoujam Tondonsana Singh
</h4>
                            <p className="text-sm text-gray-600">Department of Interior Design</p>
                          </CardContent>
                        </Card>
                        {/* <Card>
                          <CardContent className="p-4">
                            <h4 className="font-semibold">All Faculty Members</h4>
                            <p className="text-sm text-gray-600">Department of Fashion Design, SA&D, FoSTA</p>
                          </CardContent>
                        </Card> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
