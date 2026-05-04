import { useState } from "react";

export default function Page() { const [form, setForm] = useState({ name: "", phone: "", car: "", service: "Full Valet", date: "", message: "", });

const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => { setForm({ ...form, [e.target.name]: e.target.value }); };

const handleSubmit = (e) => { e.preventDefault();

const msg = `New Booking:%0AName: ${form.name}%0APhone: ${form.phone}%0ACar: ${form.car}%0AService: ${form.service}%0ADate: ${form.date}%0ANotes: ${form.message}`;
window.open(`https://wa.me/447988770864?text=${msg}`, "_blank");

setSubmitted(true);

};

return ( <div className="min-h-screen bg-white text-black font-sans"> {/* HERO */} <section className="px-6 py-16 text-center max-w-5xl mx-auto"> <h1 className="text-5xl font-semibold tracking-tight"> Elite Auto Detailing </h1> <p className="mt-4 text-lg text-gray-500"> Ceramic Coating • Paint Protection • Car Detailing Bolton </p> <p className="mt-6 text-gray-600 max-w-xl mx-auto"> Premium vehicle detailing designed to restore, enhance, and protect your car with a factory-fresh finish. </p>

<a
      href="#booking"
      className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-full text-sm font-medium hover:opacity-90 transition"
    >
      Book Now
    </a>
  </section>

  {/* SERVICES */}
  <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
    {[
      { title: "Full Valet", desc: "Deep interior + exterior reset", price: "From £100" },
      { title: "Paint Correction", desc: "Remove swirls & restore gloss", price: "From £180" },
      { title: "Ceramic Coating", desc: "Long-term protection & shine", price: "From £250" },
    ].map((s, i) => (
      <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition bg-white">
        <h3 className="text-xl font-medium">{s.title}</h3>
        <p className="text-gray-500 mt-2">{s.desc}</p>
        <p className="mt-4 font-semibold">{s.price}</p>
      </div>
    ))}
  </section>

  {/* BOOKING */}
  <section id="booking" className="px-6 py-16 bg-gray-50">
    <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border">
      <h2 className="text-2xl font-semibold mb-6">Book Your Detail</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Full Name" onChange={handleChange} required className="w-full p-3 border rounded-lg" />
          <input name="phone" placeholder="Phone" onChange={handleChange} required className="w-full p-3 border rounded-lg" />
          <input name="car" placeholder="Car (Make & Model)" onChange={handleChange} required className="w-full p-3 border rounded-lg" />

          <select name="service" onChange={handleChange} className="w-full p-3 border rounded-lg">
            <option>Full Valet</option>
            <option>Paint Correction</option>
            <option>Ceramic Coating</option>
          </select>

          <input type="date" name="date" onChange={handleChange} required className="w-full p-3 border rounded-lg" />
          <textarea name="message" placeholder="Notes" onChange={handleChange} className="w-full p-3 border rounded-lg" />

          <button className="w-full bg-black text-white py-3 rounded-full font-medium hover:opacity-90">
            Continue to WhatsApp
          </button>
        </form>
      ) : (
        <p className="text-green-600 font-medium">Opening WhatsApp...</p>
      )}
    </div>
  </section>

  {/* FOOTER */}
  <footer className="text-center text-gray-400 text-sm py-10">
    © {new Date().getFullYear()} Elite Auto Detailing • Bolton • Manchester
  </footer>
</div>

); }