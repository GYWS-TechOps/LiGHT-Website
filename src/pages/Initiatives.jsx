import React, { useRef } from "react";
import "./Initiatives.css";

function Initiatives() {
  const sc = useRef();

  const s = (d) => {
    if (sc.current) {
      let amt = 320;
      if (d === "l") sc.current.scrollBy({ left: -amt, behavior: "smooth" });
      else sc.current.scrollBy({ left: amt, behavior: "smooth" });
    }
  };

  // Minimal change: generate lorem
  const lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit Fusce sed mauris vitae turpis sodales ullamcorper Integer in urna nec elit condimentum rhoncus Nullam at risus vel metus pharetra viverra in vitae nunc";

  let data = [
    { id: 1, title: "Event Wardha", desc: lorem, img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600" },
    { id: 2, title: "Event Sindhri", desc: lorem, img: "https://images.unsplash.com/photo-1508614999368-9260051291ea?w=600" },
    { id: 3, title: "Event Samvedna", desc: lorem, img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600" },
    { id: 4, title: "Event Tirupati", desc: lorem, img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600" },
    { id: 5, title: "Event Gaya", desc: lorem, img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600" }
  ];

  return (
    <div>
      <h1>Initiatives</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => s("l")}>&lt;</button>
        <div style={{ display: "flex", overflowX: "auto" }} ref={sc}>
          {data.map((e) => (
            <div key={e.id} style={{ minWidth: "300px", border: "1px solid #ccc", margin: "10px" }}>
              <img src={e.img} style={{ width: "100%" }} />
              <h2>{e.title}</h2>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
        <button onClick={() => s("r")}>&gt;</button>
      </div>
    </div>
  );
}

export default Initiatives;
