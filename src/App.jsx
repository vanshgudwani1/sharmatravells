import React, { useState, useEffect } from 'react';

const interiorImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiyIIA61p4MS5US8UoTXjusuPZozcfqz1KGbxtX73U-eFUvBRqNrNp4Nd8r3jpzoj9l673Q0yWJ6VQvn7sElp3j2Llq8Y8vlBjY_u5CNVHZW1p6vsuBDNqIovSl_5s3-9AMBXB-NF6_6rncRzstgOlTzgIlsatjjg9FsZ_jcgFXrE7qhwFiHzRitOptjnoZKuV7ZJhQMtRGQtKF655hNpMIs3zNYR-wZg7sThHD5I5wThLz-_FGI_KBInKT_ZPD1f06xjRZyRztOw';
const dashboardImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwqO-j7beZLwdvk--7f7hYYMEhV9lblzCz36PTgx_f_fz-L11Q-6Q0QcArIRJjvFTzHouHMMMhcc7EPoGqkeEB4E4a69AAQ4FM_jGVdYL9IT75r30SQilpfTGyUhhf3kqyOD_CY833ojyNPRMsh_vZjfUbqBIVp_Ck1v6TFZV_tmAugThzQP5gMyXc17opE66MqMZCrvBoLOr-_ciSnI5zby2VlLHZXsyJKZTLPKVBytIEpM2gKuyDQlY0E9hBrTvyb-NtxFPI26Q';

const VehicleCard = ({ vehicle }) => {
  const images = vehicle.images || [vehicle.image, interiorImage, dashboardImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-surface rounded-xl overflow-hidden border border-outline-variant hover:shadow-xl transition-all group flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        {images.map((img, index) => (
          <img 
            key={index}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100 group-hover:scale-105' : 'opacity-0'}`} 
            alt={`${vehicle.name} - ${index + 1}`} 
            src={img} 
          />
        ))}
        {vehicle.type && <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase z-10">{vehicle.type}</div>}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline-md text-headline-md mb-4 uppercase">{vehicle.name}</h3>
        <ul className="space-y-2 mb-6 text-on-surface-variant font-body-md flex-grow">
          {vehicle.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-sm">check_circle</span> {feature}
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center pb-6 mb-6 border-b border-outline-variant">
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-outline">music_note</span>
            <span className="text-label-md font-label-md">Music</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-outline">map</span>
            <span className="text-label-md font-label-md">GPS</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-outline">airline_seat_recline_extra</span>
            <span className="text-label-md font-label-md">Recliner</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-outline">ac_unit</span>
            <span className="text-label-md font-label-md">AC</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex-1 bg-primary-container text-on-primary-container py-3 rounded-lg font-label-lg hover:brightness-110 transition-all">Enquiry Now</button>
          <a href="https://wa.me/918527499769" className="flex-1 bg-tertiary-container text-on-tertiary-container py-3 rounded-lg font-label-lg flex items-center justify-center hover:brightness-110 transition-all">Whatsapp</a>
        </div>
      </div>
    </div>
  );
};

const fleetData = [
  { id: 1, name: '4+1 SEATER SEDAN', image: '/images/sedan.png', features: ['Comfortable Leather Seats', 'Ample Luggage Space', 'Fully Air Conditioned', 'Trained Professional Driver'], type: 'Luxury' },
  { id: 2, name: '6+1 SEATER ERTIGA', image: '/images/sedan.png', features: ['Spacious 3-Row Seating', 'AC & Heater', 'Flexible Luggage Space', 'Perfect for Family Trips'], type: 'MUV' },
  { id: 3, name: 'KIA CARENS (6+1 SEATER)', image: '/images/sedan.png', features: ['Premium Plush Interiors', 'Smart Air Purifier', 'Advanced Safety Features', 'Dual Zone AC'], type: 'Premium' },
  { id: 4, name: 'INNOVA CRYSTA (6/7 SEATER)', image: '/images/sedan.png', features: ['Captain Seats & Extra Legroom', 'Superior Ride Comfort', 'Rear AC Vents', 'Ambient Lighting'], type: 'Premium' },
  { id: 5, name: 'MARUTI INVICTO (7 SEATER)', image: '/images/sedan.png', features: ['Luxurious Captain Seats', 'Panoramic Sunroof', 'Smart Hybrid Technology', 'Multi-zone AC'], type: 'Premium' },
  { id: 6, name: 'INNOVA HYCROSS (7 SEATER)', image: '/images/sedan.png', features: ['Self-Charging Hybrid SUV', 'Ultra-Luxury Interiors', 'Reclining Ottoman Seats', 'State-of-the-Art Safety'], type: 'Premium' },
  { id: 7, name: '12 SEATER MAHARAJA TEMPO TRAVELLER', image: '/images/traveller.png', features: ['Luxurious Maharaja Recliners', 'Premium Sound System & LCD Screen', 'AC with Individual Vents', 'ICE Box & Charging Ports'], type: 'Maharaja' },
  { id: 8, name: '12 SEATER MAHARAJA URBANIA', image: '/images/traveller.png', features: ['Ultra-Premium Luxury Cabin', 'Ergonomic Reclining Seats', 'Extra Wide Body & Legroom', 'Individual USB Ports & AC'], type: 'Luxury' },
  { id: 9, name: '15 SEATER MAHARAJA TEMPO TRAVELLER', image: '/images/traveller.png', features: ['Comfortable Maharaja Recliners', 'LED TV & Music System', 'AC & Cool Box', 'Ample Boot Space'], type: 'Maharaja' },
  { id: 10, name: '16 SEATER URBANIA', image: '/images/traveller.png', features: ['Sleek European Design Cabin', 'Plush Reclining Seats', 'Spacious Cargo Area', 'AC & Charging Points'], type: 'Luxury' },
  { id: 11, name: '16 SEATER TEMPO TRAVELLER', image: '/images/traveller.png', features: ['Comfortable Pushback Seats', 'Individual AC Vents', 'Quality Sound System', 'Reliable Group Travel'], type: 'Standard' },
  { id: 12, name: '20 SEATER TEMPO TRAVELLER', image: '/images/traveller.png', features: ['Spacious 20-Seater Layout', 'Comfortable Pushback Seats', 'Excellent Air Conditioning', 'Integrated Music System'], type: 'Standard' },
  { id: 13, name: '26 SEATER TEMPO TRAVELLER', image: '/images/traveller.png', features: ['Maximum Seating Capacity', 'Comfortable Reclining Seats', 'AC & Cool Air Vents', 'Perfect for Large Groups'], type: 'Standard' },
  { id: 14, name: '27 SEATER MINI BUS', image: '/images/bus.png', features: ['Ergonomic Highback Seats', 'AC + ICE Box', 'Ample Luggage & Boot Space', 'Pneumatic Passenger Door'], type: 'Mini Bus' },
  { id: 15, name: '29 SEATER MINI BUS', image: '/images/bus.png', features: ['Comfortable Passenger Seats', 'AC & Heater', 'Smooth Air Suspension', 'Professional Driver'], type: 'Mini Bus' },
  { id: 16, name: '33 SEATER MINI BUS', image: '/images/bus.png', features: ['Spacious 33-Seater Layout', 'Plush Highback Seats', 'AC & Ambient Lighting', 'Under-Floor Luggage Space'], type: 'Mini Bus' },
  { id: 17, name: '45 SEATER BUS', image: '/images/bus.png', features: ['Deluxe Highback Recliners', 'AC & Premium Audio System', 'Large Passenger Window Views', 'Massive Luggage Space'], type: 'Luxury Coach' },
  { id: 18, name: '49 SEATER BUS', image: '/images/bus.png', features: ['Spacious 49-Passenger Cabin', 'AC & LED Screen Entertainment', 'Comfortable Reclining Seats', 'Heavy Luggage Support'], type: 'Luxury Coach' },
  { id: 19, name: '53 SEATER BUS', image: '/images/bus.png', features: ['Maximum Coach Capacity', 'Plush Ergonomic Recliners', 'Full AC with Climate Control', 'Perfect for Corporate/School Outings'], type: 'Luxury Coach' },
];

const App = () => {

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-gutter py-3 bg-surface/95 backdrop-blur-sm border-b border-outline-variant">
        <a href="#" className="flex items-center">
          <img src="/images/logo.png" alt="Sharma Travel Agents" className="h-14 md:h-16 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex gap-8">
          <a className="text-primary font-bold border-b-2 border-primary text-label-lg font-label-lg" href="#">HOME</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-lg font-label-lg" href="#about">ABOUT</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-lg font-label-lg" href="#services">SERVICES</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-lg font-label-lg" href="#fleet">FLEET</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors text-label-lg font-label-lg" href="#contact">CONTACT</a>
        </nav>
      </header>

      <main className="mt-20 md:mt-24">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <img 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Luxury Bus" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsIgeqvD0LvVwdHLqTgUfLmkJBhWqm_0UiegjVEqKqLrlm0030A7GWfjCbcR54akkv7pOGT6dZStyxuzJATDmWp1WyPn1XSN7O2umJzr6OckYaZCp0yRs85aDt_G_EZoLGF7lkyeSwspwdaqfcB-yoFg-DcXII242ZS887HCdA01kIiLXWXjCX8V4U0WpvF7sV01HndLBF2rDCQ2_x8E4bO_wf1-76ei9tYEUU3WBw7zQVrSAv_ttKzg0znB5-_2ugCbX8riLpQGU" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface/60 to-transparent"></div>
          <div className="relative z-10 container mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white max-w-xl">
              <h1 className="font-display-lg text-display-lg mb-6">Ride in Comfort with <span className="text-secondary-fixed">Sharma Travel Agents</span></h1>
              <p className="font-body-lg text-body-lg opacity-90">The world's leading companies trust Sharma Travel Agents for high-quality Buses & Tempo Travellers on rent. We promise the best prices, trained drivers & 24/7 support.</p>
            </div>
            <div className="flex justify-end">
              <div className="bg-surface p-8 rounded-xl shadow-lg w-full max-w-md">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Get A Quick Call</h3>
                <form className="space-y-4">
                  <div>
                    <input className="w-full p-3 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container bg-white" placeholder="Your Name" type="text" />
                  </div>
                  <div>
                    <input className="w-full p-3 border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-container bg-white" placeholder="Your Number" type="tel" />
                  </div>
                  <button className="w-full bg-secondary-container text-on-secondary-container font-label-lg py-4 rounded-lg uppercase tracking-wider hover:brightness-110 transition-all" type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Highlight Banner */}
        <div className="bg-primary-container py-4 text-center">
          <h2 className="text-white font-headline-md text-headline-md">Turning Miles into Smiles with Sharma Travel Agents</h2>
        </div>

        {/* Fleet Gallery */}
        <section id="fleet" className="py-section-padding container mx-auto px-gutter">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold text-label-lg tracking-widest uppercase">Luxury Vehicle Rentals</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">Book Your Cabs, Travellers & Busses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleetData.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-section-padding bg-surface-container-low">
          <div className="container mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img className="rounded-xl h-64 w-full object-cover shadow-md" alt="Interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiyIIA61p4MS5US8UoTXjusuPZozcfqz1KGbxtX73U-eFUvBRqNrNp4Nd8r3jpzoj9l673Q0yWJ6VQvn7sElp3j2Llq8Y8vlBjY_u5CNVHZW1p6vsuBDNqIovSl_5s3-9AMBXB-NF6_6rncRzstgOlTzgIlsatjjg9FsZ_jcgFXrE7qhwFiHzRitOptjnoZKuV7ZJhQMtRGQtKF655hNpMIs3zNYR-wZg7sThHD5I5wThLz-_FGI_KBInKT_ZPD1f06xjRZyRztOw" />
                <img className="rounded-xl h-48 w-full object-cover shadow-md" alt="Highway" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMiKekYxbzOEQ88OpfQrIGcT3Pb7OTuPBFkrqz_xBvmcN81JS4_KNzbwN4awho4o8TYDa_LbyG76bImTeut8cISCEmaGwrOpdz-LCED4r_NABbg3S-XOez2QwgWAJ0r5pFCMP70STh0ykGGmtWqn-2t6hffzpjQMoIMKTO2G5kD1cdJGYVSIQWwP-9FBDHPm_E5UmjeJ6twrIcD_ntYxd4P_qS4hMxLYSkm0TffiU0lgUewa8suDj6bUO2mqtFgHRAY8-gzzVbdoE" />
              </div>
              <div className="pt-12 space-y-4">
                <img className="rounded-xl h-48 w-full object-cover shadow-md" alt="Fleet Row" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_TWobfXVK89F7e36_7qu6sRgtbXdx79_HdE4vKmh-SYMSzL8r70TsD9qr1Y7OnmJ0bqmUjjzcnUcNaQC0FJsp6JHdNurcwkAQ3BPg2gRYVlT-3DDk0Nh1mKWCBPbHXd0_FTXjGtC0zquaNW4PfN7BCHuV6ydbyZ0-C3Jh5c9IYeOxjBccUXPI1ZHI3IVEk4GKk1nz4SlC6FNVaU3Pk_o0p5epmRl7xMpS2Dhf67cXqCB1qlSwERp4hvskCtxe4tYcqq-YDqJa7Bw" />
                <img className="rounded-xl h-64 w-full object-cover shadow-md" alt="Dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwqO-j7beZLwdvk--7f7hYYMEhV9lblzCz36PTgx_f_fz-L11Q-6Q0QcArIRJjvFTzHouHMMMhcc7EPoGqkeEB4E4a69AAQ4FM_jGVdYL9IT75r30SQilpfTGyUhhf3kqyOD_CY833ojyNPRMsh_vZjfUbqBIVp_Ck1v6TFZV_tmAugThzQP5gMyXc17opE66MqMZCrvBoLOr-_ciSnI5zby2VlLHZXsyJKZTLPKVBytIEpM2gKuyDQlY0E9hBrTvyb-NtxFPI26Q" />
              </div>
            </div>
            <div>
              <span className="text-primary font-bold text-label-lg tracking-widest uppercase">About Us</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2 mb-6">Welcome to <span className="text-primary">Sharma Travel Agents</span></h2>
              <div className="space-y-6 text-on-surface-variant font-body-lg">
                <p>Welcome to <span className="font-bold">Sharma Travel Agents</span> – your trusted partner for safe, comfortable, and affordable travel across India. Based in Delhi, we specialize in offering a wide range of vehicles on rent, tailored to every travel need, from family trips and group outings to weddings, corporate tours, and airport transfers.</p>
                <p>Our fleet includes <span className="font-bold">4+1 seater sedans</span>, premium MUVs & SUVs (Ertiga, Kia Carens, Innova Crysta, Maruti Invicto, Innova Hycross), 12 to 15 seater Maharaja Tempo Travellers, 12 to 16 seater Urbanias, 16 to 26 seater Tempo Travellers, 27 to 33 seater mini buses, and 45 to 53 seater luxury buses.</p>
                <p>At Sharma Travel Agents, we prioritize convenience and transparency. Booking your ride is simple via call or message, and you can pay using cash, card, or online transfer. Our professional drivers ensure your journey is safe, timely, and enjoyable.</p>
              </div>
              <div className="mt-10 flex gap-8">
                <div className="flex flex-col">
                  <span className="text-headline-md font-bold text-primary">15+</span>
                  <span className="text-label-md uppercase opacity-60">Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-headline-md font-bold text-primary">500+</span>
                  <span className="text-label-md uppercase opacity-60">Fleet Vehicles</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-headline-md font-bold text-primary">10k+</span>
                  <span className="text-label-md uppercase opacity-60">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-section-padding container mx-auto px-gutter">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-4 mb-4">
              <img alt="Google" className="h-6 opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcYP3nl4bXMznrZIr6PVCOU-x8vLdOwrLZMlFwqAJHD6Kyrp9k_R0ENF7nx5PSLhXuOUM28faX9g06-h5sJDVRx1ghW_4zawyakmryQidKfguv5ZOjGDr-xRuxif2gPiYzVP2AaNhiDFiTik1JLTCG3JRm5wFEHNmEBMZUhvlF6N1ZI6c0dNCkxjWmxe3iUmjmjTATXY-Rolo4b6Eosd7nbtqAfttFYo-TxkouoUsrEGFs1iH1HC7GMe7TskdNmhuJEx6pwZHKHx8" />
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="font-bold text-on-surface-variant">4.9/5 Based on 500+ reviews</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg">What Our Travelers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant shadow-sm relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">RS</div>
                <div>
                  <div className="font-bold">Ravi Sharma</div>
                  <div className="text-label-md text-on-surface-variant">Delhi</div>
                </div>
              </div>
              <div className="flex text-secondary-container mb-3 scale-75 origin-left">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="italic text-on-surface-variant">"I booked a Maharaja Traveller for our Himachal trip, and everything was perfectly managed. The driver was very professional and the vehicle was spotless."</p>
              <span className="material-symbols-outlined absolute top-8 right-8 text-outline opacity-20 text-4xl">format_quote</span>
            </div>
            {/* Review 2 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant shadow-sm relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold">PM</div>
                <div>
                  <div className="font-bold">Priya Mehta</div>
                  <div className="text-label-md text-on-surface-variant">Gurugram</div>
                </div>
              </div>
              <div className="flex text-secondary-container mb-3 scale-75 origin-left">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="italic text-on-surface-variant">"Sharma Travel Agents made our Delhi to Agra trip so easy! The vehicle was very comfortable and the booking process was smooth for our group."</p>
              <span className="material-symbols-outlined absolute top-8 right-8 text-outline opacity-20 text-4xl">format_quote</span>
            </div>
            {/* Review 3 */}
            <div className="bg-surface p-8 rounded-xl border border-outline-variant shadow-sm relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold">AV</div>
                <div>
                  <div className="font-bold">Anil Verma</div>
                  <div className="text-label-md text-on-surface-variant">Noida</div>
                </div>
              </div>
              <div className="flex text-secondary-container mb-3 scale-75 origin-left">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="italic text-on-surface-variant">"Our Rajasthan group tour with Sharma Travel Agents was superb! The 45 seater bus was spacious and clean. Excellent service and support."</p>
              <span className="material-symbols-outlined absolute top-8 right-8 text-outline opacity-20 text-4xl">format_quote</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="w-full bg-on-surface text-surface-container-lowest py-section-padding px-gutter">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="text-headline-md font-headline-md font-bold text-surface-container-lowest">Sharma Travel Agents</div>
            <p className="text-surface-variant opacity-80 text-body-md">Experience Royal Travel with Sharma Travel Agents. We are a premier travel agency offering premium Cabs, Maharaja Tempo Travellers, and Luxury Bus rentals across India.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container transition-colors" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container transition-colors" href="#"><span className="material-symbols-outlined text-sm">language</span></a>
              <a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary-container transition-colors" href="#"><span className="material-symbols-outlined text-sm">mail</span></a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-headline-md text-headline-md text-secondary-fixed">Our Vehicle</h4>
            <ul className="grid grid-cols-2 gap-y-3">
              <li><a className="text-surface-variant opacity-80 hover:text-secondary-fixed hover:underline transition-colors text-label-md" href="#">4+1 SEATER SEDAN</a></li>
              <li><a className="text-surface-variant opacity-80 hover:text-secondary-fixed hover:underline transition-colors text-label-md" href="#">6/7 SEATER MUV</a></li>
              <li><a className="text-surface-variant opacity-80 hover:text-secondary-fixed hover:underline transition-colors text-label-md" href="#">12 SEATER TRAVELLER</a></li>
              <li><a className="text-surface-variant opacity-80 hover:text-secondary-fixed hover:underline transition-colors text-label-md" href="#">26 SEATER TRAVELLER</a></li>
              <li><a className="text-surface-variant opacity-80 hover:text-secondary-fixed hover:underline transition-colors text-label-md" href="#">Buses</a></li>
              <li><a className="text-surface-variant opacity-80 hover:text-secondary-fixed hover:underline transition-colors text-label-md" href="#">Luxury Coaches</a></li>
            </ul>
          </div>
          {/* Address */}
          <div className="space-y-6 lg:col-span-2">
            <h4 className="font-headline-md text-headline-md text-secondary-fixed">Contact Us</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="text-label-lg font-bold text-surface-container-lowest uppercase tracking-wider">Branch office</div>
                <p className="text-surface-variant opacity-80 text-body-md flex gap-2">
                  <span className="material-symbols-outlined text-primary-fixed">location_on</span>
                  Third Floor, 138 B/2, Mohammadpur Village, Bhikaji Cama Palace, New Delhi - 110066
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-label-lg font-bold text-surface-container-lowest uppercase tracking-wider">Head office</div>
                <p className="text-surface-variant opacity-80 text-body-md flex gap-2">
                  <span className="material-symbols-outlined text-primary-fixed">location_on</span>
                  K-88, Sham Nagar, Nearby subhash nagar metro station, New Delhi 110018
                </p>
                <div className="space-y-2 mt-4">
                  <p className="text-surface-variant opacity-80 text-body-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed">phone_in_talk</span>
                    +91 8527499769
                  </p>
                  <p className="text-surface-variant opacity-80 text-body-md flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed">mail</span>
                    sirbusdelhi@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-16 pt-8 border-t border-outline flex flex-col md:flex-row justify-between items-center gap-4 text-surface-variant opacity-60 text-label-md">
          <div>© Sharma Travel Agents. All Right Reserved.</div>
          <div className="flex gap-8">
            <a className="hover:text-secondary-fixed transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-secondary-fixed transition-colors" href="#">Terms & Conditions</a>
          </div>
        </div>
      </footer>

      {/* Floating Call Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a href="tel:+918527499769" className="bg-primary-container text-on-primary-container w-16 h-16 rounded-full shadow-2xl flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">call</span>
        </a>
      </div>
    </div>
  );
};

export default App;
