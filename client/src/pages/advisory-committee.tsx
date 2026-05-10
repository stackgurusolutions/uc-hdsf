import { Card, CardContent } from "@/components/ui/card";

export default function AdvisoryCommittee() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Advisory Committee</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Distinguished experts providing guidance and oversight for ICDIS 2025
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* International Advisory Committee */}
            <div>
    <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
      <Card className="bg-gradient-to-br from-primary/10 to-blue-50 shadow-lg">
  <CardContent className="p-8 text-center">
    <h3 className="text-xl font-bold mb-2">Dr. António da Cruz Rodrigues</h3>
    <p className="text-primary font-semibold mb-2">Director in Communication Design</p>
    <p className="text-gray-600">University of Lusófona, Porto, Portugal</p>
  </CardContent>
</Card>

<Card className="bg-gradient-to-br from-primary/10 to-blue-50 shadow-lg">
  <CardContent className="p-8 text-center">
    <h3 className="text-xl font-bold mb-2">Dr. Sumit Mandal</h3>
    <p className="text-primary font-semibold mb-2">Associate Professor</p>
    <p className="text-gray-600">Department of Design and Merchandising</p>
    <p className="text-gray-600">Oklahoma State University, USA</p>
  </CardContent>
</Card>

<Card className="bg-gradient-to-br from-primary/10 to-blue-50 shadow-lg">
  <CardContent className="p-8 text-center">
    <h3 className="text-xl font-bold mb-2">Dr S Chandrasekaran</h3>
    <p className="text-primary font-semibold mb-2">Senior Lecturer & Head</p>
    <p className="text-gray-600">Mcnally School of Fine Arts, Lasalle College of Arts</p>
    <p className="text-gray-600">University of the Arts Singapore</p>
  </CardContent>
</Card>

<Card className="bg-gradient-to-br from-accent/10 to-orange-50 shadow-lg">
  <CardContent className="p-8 text-center">
    <h3 className="text-xl font-bold mb-2">Prof. Dhiraj Kumar</h3>
    <p className="text-primary font-semibold mb-2">Director</p>
    <p className="text-gray-600">UID, Gurugram, India</p>
  </CardContent>
</Card>

<Card className="bg-gradient-to-br from-accent/10 to-orange-50 shadow-lg">
  <CardContent className="p-8 text-center">
    <h3 className="text-xl font-bold mb-2">Dr. Prakash C</h3>
    <p className="text-primary font-semibold mb-2">Director</p>
    <p className="text-gray-600">Indian Institute of Handloom Technology, Ministry of Textiles, Govt. of India</p>
    <p className="text-gray-600">Fulia, West Bengal, India</p>
  </CardContent>
</Card>

<Card className="bg-gradient-to-br from-accent/10 to-orange-50 shadow-lg">
  <CardContent className="p-8 text-center">
    <h3 className="text-xl font-bold mb-2">Dr Sanjeevani Ayachit</h3>
    <p className="text-primary font-semibold mb-2">Director</p>
    <p className="text-gray-600">Symbiosis Institute of Design, Symbiosis International University</p>
    <p className="text-gray-600">Pune, India</p>
  </CardContent>
</Card>

<Card className="bg-gradient-to-br from-accent/10 to-orange-50 shadow-lg">
  <CardContent className="p-8 text-center">
    <h3 className="text-xl font-bold mb-2">Dr. Vaibbhavi Ranavaade</h3>
    <p className="text-primary font-semibold mb-2">Dean</p>
    <p className="text-gray-600">Chitkara University, Chandigarh, India</p>
  </CardContent>
</Card>

<Card className="bg-gradient-to-br from-accent/10 to-orange-50 shadow-lg">
  <CardContent className="p-8 text-center">
    <h3 className="text-xl font-bold mb-2">Dr. Saurabh Tewari</h3>
    <p className="text-primary font-semibold mb-2">Assistant Professor</p>
    <p className="text-gray-600">Department of Design, IIT Delhi, India</p>
  </CardContent>
</Card>


    </div>

  </div>
  

           
          </div>
        </div>
      </section>

   
    </div>
  );
}