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

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit Fusce sed mauris vitae turpis sodales ullamcorper Integer in urna nec elit condimentum rhoncus Nullam at risus vel metus pharetra viverra in vitae nunc";

  let data = [
    {
      id: 1,
      title: "LiGHT Wardha Event",
      desc: "This event was conducted to raise funds to provide clean water facilities to children in Sankalp Orphanage in Wardha.",
      details: [
        "NO OF VOLUNTEERS WHO PARTICIPATED IN THE DRIVE: 150+",
        "NO OF REGIONS COVERED IN THE EVENT: 11+",
      ],
      img: "/initiativeimages/Wardha ppt.jpg",
    },
    {
      id: 2,
      title: "LiGHT Akola Event",
      desc: "The event was conducted to raise money to provide a Volleyball court, and books for the library of a school named Dr. S R Patil School.",
      details: [
        "TOTAL NUMBER OF CHILDREN BENEFITED : 500+",
        "TOTAL FUNDS RAISED IN THE EVENT : 8,125",
      ],
      img: "/initiativeimages/akolaevent.jpg",
    },
    {
      id: 3,
      title: "LiGHT Sindri Event",
      desc: "The event was based on Quality education and the strategies to tackle the challenges in current education system.",
      details: [
        "NUMBER OF TEACHERS ATTENDED : 40+",
        "TOTAL BENEFICIARIES INCLUDING STUDENTS : 70+",
      ],
      img: "/initiativeimages/sindrievent.jpg",
    },
    {
      id: 4,
      title: "LiGHT Raipur Event",
      desc: "This event was conducted to raise money to donate water cooler and table fans to Kopal Vani Child Welfare Organisation in Raipur.",
      details: [
        "TOTAL NUMBER OF CHILDREN BENEFITED : 100+",
        "TOTAL FUNDS RAISED IN THE EVENT : 6771",
      ],
      img: "/initiativeimages/raipurevent.jpg",
    },
    {
      id: 5,
      title: "LiGHT Samvedna Event",
      desc: "The program focused on providing school uniforms to the children of Bhagwaan Baba Balika Ashram Orphanage.",
      details: [
        "TOTAL NUMBER OF CHILDREN BENEFITED : 25",
        "TOTAL FUNDS RAISED IN THE EVENT : 12,500",
      ],
      img: "/initiativeimages/samvedna event.jpg",
    },
       {
      id: 6,
      title: "LiGHT Gwalior Thatipur",
      desc: "The event was conducted to raise money to help underprivileged students and school by distributing blackboards, dustbins and waterfilter.",
      details: [
        "TOTAL NUMBER OF CHILDREN BENEFITED : 250+",
        "TOTAL FUNDS RAISED IN THE EVENT : 5848",
      ],
      img: "/initiativeimages/gwaliorthathipurevent.jpg",
    },

    {
      id: 7,
      title: "Event Gaya",
      desc: lorem,
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
    },
  ];

  return (
    <div>
      <h1>Initiatives</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => s("l")}>&lt;</button>
        <div style={{ display: "flex", overflowX: "auto" }} ref={sc}>
          {data.map((e) => (
            <div
              key={e.id}
              style={{
                minWidth: "300px",
                border: "1px solid #ccc",
                margin: "10px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <img src={e.img} style={{ width: "100%", borderRadius: "10px" }} />
              <h2>{e.title}</h2>
              {e.details &&
                e.details.map((d, i) => (
                  <p key={i}>
                    <b>📌 {d}</b>
                  </p>
                ))}
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
