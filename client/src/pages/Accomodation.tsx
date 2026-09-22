const accommodationData = [
  {
    name: 'GHS Hostel (Subject to availability)',
    address: 'Manipal University Road, Dehmi Kalan, Rajasthan 303007',
    contact: '—',
    distance: '2 km',
  },
  {
    name: 'Hotel Highway King',
    address: 'Manipal University Road, Dehmi Kalan, Rajasthan 303007',
    contact: '—',
    distance: '2 km',
  },
  {
    name: 'Bhanwar Singh Palace, Jaipur',
    address: 'NH-8, Ajmer–Jaipur Expressway, Opposite Solitaire Park, Bagru, Rajasthan 303007',
    contact: 'Phone: 0141-2955123\nMobile: +91 89059 89501 / 513 / 508\nEmail: booking@bspjaipur.com',
    distance: '2 km',
  },
  {
    name: 'S K Guest House',
    address: 'Manipal University Road, next to Hotel Highway King, Dehmi Kalan, Jaipur, Rajasthan 303007',
    contact: 'Phone: 077270 78078',
    distance: '1.4 km',
  },
  {
    name: 'Hotel Highway INN',
    address: 'NH-8, Ajmer Road, Bagru, Dehmi Kalan, Rajasthan 303007',
    contact: 'Phone: 099297 35413',
    distance: '2 km',
  },
  {
    name: 'Sterling Atharva Jaipur',
    address: 'Himmatpura, Bad ke Balaji Road, Rajasthan 303007',
    contact: 'Phone: 08094 009281',
    distance: '8 km',
  },
  {
    name: 'Hotel The Sawai',
    address: 'Jaipur–Ajmer Highway, Opposite Pink Pearl Water Park, Jaipur, Rajasthan 302026',
    contact: 'Phone: 098290 49024, 0141-2943745\nEmail: hotelthesawai@gmail.com',
    distance: '13 km',
  },
  {
    name: 'Hotel Highway Pride',
    address: 'Near Toll Plaza, Balmukandpura (Nada), Ajmer Road, Jaipur, Rajasthan 302042',
    contact: '—',
    distance: '10 km',
  },
];

export default function Accomodation() {
  return (
    <div style={{ padding: '32px 20px 48px', maxWidth: '1200px', margin: '0 auto', color: '#1f2937' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '20px', color: '#111827' }}>Accommodation</h1>

      <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '24px' }}>
        Participants will be accommodated in the University GHS Hostel (subject to availability) and in nearby hotels.
        Accommodation arrangements will be facilitated by the organizing committee; however, the accommodation charges
        will be borne by the participants themselves. Some of the available options are listed below.
      </p>

      <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#ffffff' }}>
          <thead>
            <tr style={{ background: '#f3f4f6' }}>
              <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '1px solid #e5e7eb', fontSize: '0.95rem' }}>Name</th>
              <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '1px solid #e5e7eb', fontSize: '0.95rem' }}>Address</th>
              <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '1px solid #e5e7eb', fontSize: '0.95rem' }}>Contact Details</th>
              <th style={{ padding: '14px 16px', textAlign: 'left', borderBottom: '1px solid #e5e7eb', fontSize: '0.95rem' }}>Distance</th>
            </tr>
          </thead>
          <tbody>
            {accommodationData.map((item, index) => (
              <tr key={index} style={{ background: index % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>{item.name}</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>{item.address}</td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top', whiteSpace: 'pre-line' }}>
                  {item.contact}
                </td>
                <td style={{ padding: '14px 16px', borderBottom: '1px solid #e5e7eb', verticalAlign: 'top' }}>{item.distance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
    