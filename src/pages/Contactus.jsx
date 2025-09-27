import React, { useState } from "react";
import bgImage from "../components/Contactus/images.jpeg";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwTaGKvbNmaFeGKYeYbB9oDhyWshZd9K72waqiNKzscjRfD9JCqmg2MrwMRN2dpmUHCDQ/exec';

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify({name, email, message}),
    });
    const data = await response.json();

    if (data.result === 'success') {
      alert("Message sent successfully! ✅");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      throw new Error(data.message || "An unknown error occurred.");
    }
  } catch (error) {
    alert("Error sending message. Please try again. ❌");
    console.error("Error!", error.message);
  } finally {
    setLoading(false);
    }
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-64 flex flex-col justify-center items-start px-12 text-white"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2">Contact With Us</h1>
          <p className="text-lg max-w-xl">
            Help today because tomorrow you may be the one who needs more helping!
          </p>
          <div className="flex items-center gap-2 mt-4 text-sm">
            <button
              onClick={() => (window.location.href = "https://light.gyws.org/index.php")}
              className="font-bold hover:underline"
            >
              HOME
            </button>
            <span className="text-y ellow-400">/</span>
            <span className="text-yellow-400 font-semibold">CONTACT</span>
          </div>
        </div>
      </div>

      {/* Contact Form Card */}
      <div className="flex justify-between p-8 bg-amber-50 rounded-xl shadow-md max-w-5xl mx-auto mt-8">
        {/* Left Side - Get in Touch */}
        <div className="w-1/2 pr-6">
          <h2 className="text-lg font-bold mb-4">GET IN TOUCH</h2>
          <p className="text-gray-600 mb-2">
            Gopali (No-shooting Area), P.O. - Salua, Dist. - Paschim Medinipur,
            West Bengal, Pin-721145.
          </p>
          <p className="text-gray-600 mb-2">📞 +91 9123192841 </p>
          <p className="text-gray-600">✉️ gywsociety@gmail.com</p>
        </div>

        {/* Right Side - Query Form */}
        <div className="w-1/2 pl-6">
          <h2 className="text-lg font-bold mb-4">QUERY HERE</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <textarea
              type="query"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className={`bg-yellow-400 text-white px-6 py-3 rounded-lg hover:bg-yellow-500 transition ${
                loading && "opacity-70 cursor-not-allowed"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;