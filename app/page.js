"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const canvasRef = useRef(null);

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

  // 🌧️ RAIN ANIMATION
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const drops = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      len: Math.random() * 20 + 10,
      speed: Math.random() * 4 + 2,
      opacity: Math.random() * 0.15 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let d of drops) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(59,130,246,${d.opacity})`;
        ctx.lineWidth = 1;

        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.len);
        ctx.stroke();

        d.y += d.speed;

        if (d.y > height) {
          d.y = -20;
          d.x = Math.random() * width;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* 🌧️ RAIN CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
      />

      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_100%)]" />

      {/* CONTENT */}
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
            5+ years experience • Paint-safe techniques • Professional-grade systems
          </p>

          <p className="mt-5 text-sm text-blue-300/70">
            ⚡ Live availability — limited daily bookings
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
              <h2 className="text-xl font-semibold mb-4">Premium Pricing</h2>

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

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl space-y-4 sticky top-6">

            <input
              name="name"
              placeholder="Full name"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500/30"
            />

            <input
              name="phone"
              placeholder="Phone number"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500/30"
            />

            <input
              name="car"
              placeholder="Vehicle"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500/30"
            />

            {/* services */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              {serviceOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => toggleService(s)}
                  className={`py-3 rounded-2xl border transition ${
                    form.services.includes(s)
                      ? "bg-blue-500 text-white border-blue-400"
                      : "bg-white/5 border-white/10 text-white/80"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* date + time */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:ring-blue-500/30"
              />

              <input
                type="time"
                name="time"
                onChange={handleChange}
                className="px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:ring-blue-500/30"
              />
            </div>

            <textarea
              name="message"
              placeholder="Anything we should know?"
              rows="3"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 focus:ring-blue-500/30"
            />

            <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-2xl bg-white text-black font-semibold hover:scale-[1.02] transition shadow-[0_0_40px_rgba(59,130,246,0.25)]"
            >
              Check Availability & Secure a Slot
            </button>

            <p className="text-center text-xs text-white/40">
              Response within 1 hour • Limited availability
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}