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
    const msg = `New Booking:%0A
Name: ${form.name}%0A
Phone: ${form.phone}%0A
Car: ${form.car}%0A
Service: ${form.service}%0A
Date: ${form.date}%0A
Message: ${form.message}`;

    window.open(
      `https://wa.me/447988770864?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-black to-black" />

      {/* Card */}
      <div className="relative w-full max-w-xl">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-semibold tracking-tight">
            Elite Auto Detailing
          </h1>
          <p className="text-white/50 mt-2">
            Premium mobile detailing • Stockport & surrounding areas
          </p>
        </div>

        {/* Glass Card */}
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-6 space-y-4">

          <input
            name="name"
            placeholder="Full name"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/20 placeholder-white/40"
          />

          <input
            name="phone"
            placeholder="Phone number"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/20 placeholder-white/40"
          />

          <input
            name="car"
            placeholder="Car (e.g. BMW 330d)"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/20 placeholder-white/40"
          />

          {/* Service buttons */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            {["Full Valet", "Mini Valet", "Interior Detail", "Ceramic Coating"].map(
              (s) => (
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
              )
            )}
          </div>

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/20"
          />

          <textarea
            name="message"
            placeholder="Anything we should know?"
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 outline-none focus:ring-2 focus:ring-white/20 placeholder-white/40"
          />

          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-2xl bg-white text-black font-medium hover:scale-[1.02] active:scale-[0.99] transition"
          >
            Send Booking via WhatsApp
          </button>

          <p className="text-center text-xs text-white/40">
            Replies usually within 1 hour
          </p>

        </div>
      </div>
    </div>
  );
}