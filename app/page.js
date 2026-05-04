
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

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = `New Booking Request:%0AName: ${form.name}%0APhone: ${form.phone}%0ACar: ${form.car}%0AService: ${form.service}%0ADate: ${form.date}%0ANotes: ${form.message}`;
    window.open(`https://wa.me/447988770864?text=${msg}`, "_blank");

    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#000", color: "#fff", padding: 20, minHeight: "100vh" }}>
      <h1>ELITE AUTO DETAILING</h1>
      <p>Car Detailing Bolton • Ceramic Coating • Paint Protection</p>

      <h2>Book Now</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10, maxWidth: 400 }}>
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} required />
          <input name="car" placeholder="Car" onChange={handleChange} required />

          <select name="service" onChange={handleChange}>
            <option>Mini Valet</option>
            <option>Full Valet</option>
            <option>Full Detail</option>
            <option>Ceramic Coating</option>
          </select>

          <input type="date" name="date" onChange={handleChange} required />
          <textarea name="message" placeholder="Notes" onChange={handleChange} />

          <button type="submit">Send WhatsApp Booking</button>
        </form>
      ) : (
        <p>Redirecting to WhatsApp...</p>
      )}

      <p style={{ marginTop: 20 }}>
        Bolton • Manchester • Stockport • Paint Correction • Ceramic Coating
      </p>
    </div>
  );
}