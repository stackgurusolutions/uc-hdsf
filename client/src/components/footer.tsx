import { Link } from "wouter";

export default function Footer() {
  return (
   <footer className="bg-[#1D2E5E15] text-black py-12">
  <div className="container mx-auto px-4">
    
    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
      
      {/* About */}
      <div>
        <h3 className="text-xl font-bold mb-4">UC-HDSF 2026</h3>
        <p className="text-black-300 text-sm">
          International Conference on Urban Cultures: Heritage, Design & Sustainable Futures
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link href="/" className="text-black-300 hover:text-black transition-colors">Home</Link></li>
          <li><Link href="/callforpaper" className="text-black-300 hover:text-black transition-colors">Call for Papers</Link></li>
          <li><Link href="/#speakers" className="text-black-300 hover:text-black transition-colors">Speakers</Link></li>
          <li><Link href="/organizingcommittee" className="text-black-300 hover:text-black transition-colors">Organizing Committee</Link></li>
         {/*  <li><Link href="/advisory-committee" className="text-black-300 hover:text-black transition-colors">Advisory Committee</Link></li> 
          <li><Link href="/technical-program-committee" className="text-black-300 hover:text-black transition-colors">TPC Committee</Link></li>*/}
          <li><Link href="/registration" className="text-black-300 hover:text-black transition-colors">Registration</Link></li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-semibold mb-4">Contact</h4>
        <p className="text-black-300 text-sm leading-relaxed">
          Email:  uc.hdsf@gmail.com<br/>
                  Manipal University Jaipur<br/>
          Rajasthan, India
        </p>
      </div>

    </div>

    {/* Bottom */}
    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-black-400">
      <p>
        &copy; UC-HDSF 2026 - International Conference on Urban Cultures: Heritage, Design & Sustainable Futures. All rights reserved.
      </p>
    </div>

  </div>
</footer>
  );
}
