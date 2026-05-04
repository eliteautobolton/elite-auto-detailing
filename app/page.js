"use client";

import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: "",
    service: "Full Valet",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const msg = `NEW BOOKING:%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Car: ${form.car}%0A
Service: ${form.service}%0A
Date: ${form.date}%0A
Notes: ${form.message}`;

    window.open(
      `https://wa.me/447988770864?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-12">

        {/* HERO */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-semibold tracking-tight">
            Elite Auto Detailing
          </h1>

          <p className="text-white/60 mt-3 text-lg">
            Premium Detailing • Bolton & surrounding areas
          </p>

          <div className="mt-6 inline-flex gap-2 text-sm text-white/70">
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
              Collection/Delivery Service
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
              Fully Insured
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
              5★ Finish Standard
            </span>
          </div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT: PRICING / POSITIONING */}
          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h2 className="text-xl font-semibold mb-4">Premium Services</h2>

              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Full Valet</span><span>from £120</span>
                </div>
                <div className="flex justify-between">
                  <span>Machine Polish</span><span>from £140</span>
                </div>
                <div className="flex justify-between">
                  <span>Paint Correction</span><span>from £240</span>
                </div>
                <div className="flex justify-between">
                  <span>Ceramic Coating</span><span>from £100</span>
                </div>
              </div>

              <p className="text-xs text-white/40 mt-4">
                Final price depends on vehicle condition
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="font-semibold mb-2">Why Elite Auto?</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                We don’t do cheap washes. Every detail is a full reset — restoring your
                vehicle to a near factory-fresh finish using professional-grade products
                and machine techniques.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="font-semibold mb-2">Expectation</h3>
              <p className="text-white/60 text-sm">
                This is a premium service. Limited daily slots to maintain quality.
              </p>
            </div>

          </div>

          {/* RIGHT: FORM */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl space-y-4">

            <input
              name="name"
              placeholder="Full name"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/20"
            />

            <input
              name="phone"
              placeholder="Phone number"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/20"
            />

            <input
              name="car"
              placeholder="Vehicle (e.g. BMW 330d)"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/20"
            />

            {/* Service selector */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              {["Full Valet", "Machine Polish", "Paint Correction", "Ceramic Coating"].map((s) => (
                <button
                  key={s}
                  onClick={() => setForm({ ...form, service: s })}
                  className={`py-3 rounded-2xl border transition ${
                    form.service === s
                      ? "bg-white text-black"
                      : "bg-white/5 border-white/10 text-white/80"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10"
            />

            <textarea
              name="message"
              placeholder="Anything we should know?"
              rows="3"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10"
            />

            <button
              onClick={handleSubmit}
              className="w-full py-3 rounded-2xl bg-white text-black font-medium hover:scale-[1.02] transition"
            >
              Request Booking via WhatsApp
            </button>

            <p className="text-center text-xs text-white/40">
              Response typically within 1 hour
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}