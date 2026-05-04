"use client";

import { useState } from "react";

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: "",
    services: [],
    date: "",
    time: "",
    message: "",
  });

  const serviceOptions = [
    "Full Valet",
    "Machine Polish",
    "Paint Correction",
    "Ceramic Coating",
  ];

  const toggleService = (service) => {
    setForm((prev) => {
      const exists = prev.services.includes(service);

      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const msg =
      `NEW ELITE AUTO BOOKING\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Car: ${form.car}\n` +
      `Services: ${form.services.join(", ")}\n` +
      `Date: ${form.date}\n` +
      `Time: ${form.time}\n` +
      `Notes: ${form.message}`;

    window.open(
      `https://wa.me/447988770864?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden selection:bg-blue-500/30">

      {/* 🔵 PREMIUM BLUE AMBIENT BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* main centre glow */}
        <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[220px] rounded-full" />

        {/* left drift */}
        <div className="absolute top-[15%] left-[-25%] w-[750px] h-[750px] bg-blue-400/10 blur-[200px] rounded-full" />

        {/* right drift */}
        <div className="absolute bottom-[-35%] right-[-25%] w-[850px] h-[850px] bg-blue-600/10 blur-[240px] rounded-full" />

        {/* subtle white highlight (wet glass feel) */}
        <div className="absolute top-[40%] left-[55%] -translate-x-1/2 w-[500px] h-[500px] bg-white/5 blur-[180px] rounded-full" />

        {/* dark gradient overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-14">

        {/* HERO */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Elite Auto Detailing
          </h1>

          <p className="text-white/60 mt-4 text-lg">
            Premium Automotive Detailing • Bolton & surrounding areas
          </p>

          <p className="text-white/40 text-sm mt-2">
            5+ years experience • Paint-safe techniques • Professional-grade systems only
          </p>

          {/* badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-white/70">
            {[
              "Mobile / Collection Service",
              "Fully Insured",
              "5★ Finish Standard",
              "Limited Daily Slots",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-5 text-sm text-blue-300/70">
            ⚡ Live availability — limited daily bookings
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h2 className="text-xl font-semibold mb-4">Premium Service Pricing</h2>

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
                  <span>Ceramic Coating</span><span>from £250</span>
                </div>
              </div>

              <p className="text-xs text-blue-300/60 mt-2">
                Most bookings fall between £120–£180
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="font-semibold mb-2">What We Do</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Every detail is a full reset — deep interior restoration, paint decontamination,
                machine polishing and finishing work designed to restore a near factory-fresh condition.
              </p>
            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl space-y-4 sticky top-6">

            <input
              name="name"
              placeholder="Full name"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-blue-500/30"
            />

            <input
              name="phone"
              placeholder="Phone number"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-blue-500/30"
            />

            <input
              name="car"
              placeholder="Vehicle (e.g. BMW 330d)"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-blue-500/30"
            />

            {/* MULTI SELECT */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              {serviceOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleService(s)}
                  className={`py-3 rounded-2xl border transition ${
                    form.services.includes(s)
                      ? "bg-blue-500 text-white border-blue-400"
                      : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* DATE + TIME */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500/30"
              />

              <input
                type="time"
                name="time"
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500/30"
              />
            </div>

            <textarea
              name="message"
              placeholder="Anything we should know?"
              rows="3"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500/30"
            />

            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] active:scale-[0.99] transition shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >
              Check Availability & Secure a Slot
            </button>

            <p className="text-center text-xs text-white/40">
              Response usually within 1 hour • Limited daily availability
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}