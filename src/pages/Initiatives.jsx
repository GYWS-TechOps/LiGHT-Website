import React, { useRef } from "react";

function Initiatives() {
  const sc = useRef();
  const awardRef = useRef();
  const samaRef = useRef();

  // Scroll by the visible viewport width (=> 2 cards on md+, 1 on mobile)
  const scroll = (ref, d) => {
    if (!ref.current) return;
    const amt = ref.current.clientWidth;
    ref.current.scrollBy({ left: d === "l" ? -amt : amt, behavior: "smooth" });
  };

  const data = [
    {
      id: 1,
      title: "LiGHT Sindri Event",
      desc:
        "The event was based on Quality education and the strategies to tackle the challenges in current education system.",
      details: [
        "NUMBER OF TEACHERS ATTENDED : 40+",
        "TOTAL BENEFICIARIES INCLUDING STUDENTS : 70+",
      ],
      img: "public/initiativeimages/sindrievent.jpg",
    },
    {
      id: 2,
      title: "LiGHT Raipur Event",
      desc:
        "This event was conducted to raise money to donate water cooler and table fans to Kopal Vani Child Welfare Organisation in Raipur.",
      details: [
        "TOTAL NUMBER OF CHILDREN BENEFITED : 100+",
        "TOTAL FUNDS RAISED IN THE EVENT : 6771",
      ],
      img: "public/initiativeimages/raipurevent.jpg",
    },
    {
      id: 3,
      title: "LiGHT Akola Event",
      desc:
        "The event was conducted to raise money to provide a Volleyball court, and books for the library of a school named Dr. S R Patil School.",
      details: [
        "TOTAL NUMBER OF CHILDREN BENEFITED : 500+",
        "TOTAL FUNDS RAISED IN THE EVENT : 8,125",
      ],
      img: "public/initiativeimages/akolaevent.jpg",
    },
    {
      id: 4,
      title: "LiGHT Wardha Event",
      desc:
        "This event was conducted to raise funds to provide clean water facilities to children in Sankalp Orphanage in Wardha.",
      details: [
        "NO OF VOLUNTEERS WHO PARTICIPATED IN THE DRIVE: 150+",
        "NO OF REGIONS COVERED IN THE EVENT: 11+",
      ],
      img: "public/initiativeimages/Wardha ppt.jpg",
    },
    {
      id: 5,
      title: "LiGHT Samvedna Event",
      desc:
        "The program focused on providing school uniforms to the children of Bhagwaan Baba Balika Ashram Orphanage.",
      details: [
        "TOTAL NUMBER OF CHILDREN BENEFITED : 25",
        "TOTAL FUNDS RAISED IN THE EVENT : 12,500",
      ],
      img: "public/initiativeimages/samvedna event.jpg",
    },
  ];

  const awards = [
    { id: 1, img: "public/initiativeimages/5. Innovative Centre _ LiGHT Samvedna.png", title: "Most Innovative event", subtitle: "" },
    { id: 2, img: "public/initiativeimages/1. Impactful_ LiGHT Samvedna.png", title: "Most Impactful Centre", subtitle: "" },
    { id: 3, img: "public/initiativeimages/4. Emerging Centre _ LiGHT Akola.png", title: "Emerging Centre of the Year", subtitle: "" },
    { id: 4, img: "public/initiativeimages/3. Most Events Conducted_ LiGHT Wardha.png", title: "Most Events Conducted", subtitle: "" },
    { id: 5, img: "public/initiativeimages/6. Promising Centres.png", title: "Most Promising Centre", subtitle: "" },
  ];

  const samavesh = [
    { id: 1, img: "public/initiativeimages/samavesh0.jpg", title: "Annual Meet 2022", subtitle: "" },
    { id: 2, img: "public/initiativeimages/samavesh1.jpg", title: "Annual Meet 2022", subtitle: "" },
    { id: 3, img: "public/initiativeimages/samavesh2.jpg", title: "Annual Meet 2022", subtitle: "" },
    { id: 4, img: "public/initiativeimages/samavesh3.jpg", title: "Annual Meet 2022", subtitle: "" },
    { id: 5, img: "public/initiativeimages/samavesh4.jpg", title: "Annual Meet 2022", subtitle: "" },
    { id: 6, img: "public/initiativeimages/samavesh5.jpg", title: "Annual Meet 2022", subtitle: "" },
    { id: 7, img: "public/initiativeimages/samavesh6.jpg", title: "Annual Meet 2022", subtitle: "" },
  ];

  return (
    <div className="p-5 max-w-full bg-gray-50">
      {/* Featured Events */}
      <h1 className="text-3xl font-bold text-center mb-10">Featured Events</h1>

      <div className="relative">
        <button
          onClick={() => scroll(sc, "l")}
          className="bg-gray-800 text-white px-3 py-2 rounded text-lg hover:bg-gray-600 absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10"
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div ref={sc} className="flex overflow-x-hidden gap-5 scroll-smooth px-6 md:px-12">
          {data.map((e) => (
            <div
              key={e.id}
              className="w-full md:w-1/2 flex-shrink-0 border border-gray-200 rounded-lg p-3 bg-white shadow-md hover:shadow-lg transition"
            >
              {/* FILL WITHOUT DISTORTION LOOK (CROPS IF NEEDED) */}
              <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="mt-3">
                <h2 className="text-md font-semibold mb-1">{e.title}</h2>
                {e.details?.map((d, i) => (
                  <p key={i} className="text-xs text-gray-800 mb-1">
                    <span className="mr-1 text-red-500">✦</span>
                    {d}
                  </p>
                ))}
                <p className="text-gray-600 text-xs mt-2">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll(sc, "r")}
          className="bg-gray-800 text-white px-3 py-2 rounded text-lg hover:bg-gray-600 absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10"
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>

      {/* Awards Section */}
      <div className="mt-20 bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Awards</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
          To felicitate the centres for their achievements, we present them with
          awards in the annual event <b>Samavesh</b>. It helps the centres keep
          up their spirit and creates healthy competition among them.
        </p>

        <div className="relative">
          <button
            onClick={() => scroll(awardRef, "l")}
            className="bg-gray-800 text-white px-3 py-2 rounded text-lg hover:bg-gray-600 absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Scroll left"
          >
            ‹
          </button>

          <div ref={awardRef} className="flex overflow-x-hidden gap-5 scroll-smooth px-6 md:px-12">
            {awards.map((a) => (
              <div
                key={a.id}
                className="w-full md:w-1/2 flex-shrink-0 border rounded-lg shadow-md bg-white p-3 text-center"
              >
                <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg mb-2">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover object-center" />
                </div>
                <h3 className="text-md font-semibold">{a.title}</h3>
                <p className="text-xs text-gray-600">{a.subtitle}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(awardRef, "r")}
            className="bg-gray-800 text-white px-3 py-2 rounded text-lg hover:bg-gray-600 absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>

      {/* Samavesh Section */}
      <div className="mt-20 bg-gray-100 rounded-xl p-6">
        <h2 className="text-3xl font-bold text-center mb-4">Samavesh</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-6">
          Samavesh is the Annual Meet of <b>LiGHT</b> which presents each
          center's journey and initiatives. The first edition was held in May
          2022 with 160+ volunteers.
        </p>

        <div className="relative">
          <button
            onClick={() => scroll(samaRef, "l")}
            className="bg-gray-800 text-white px-3 py-2 rounded text-lg hover:bg-gray-600 absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Scroll left"
          >
            ‹
          </button>

          <div ref={samaRef} className="flex overflow-x-hidden gap-5 scroll-smooth px-6 md:px-12">
            {samavesh.map((s) => (
              <div
                key={s.id}
                className="w-full md:w-1/2 flex-shrink-0 border rounded-lg shadow-md bg-white p-3 text-center"
              >
                <div className="w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg mb-2">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover object-center" />
                </div>
                <h3 className="text-md font-semibold">{s.title}</h3>
                <p className="text-xs text-gray-600">{s.subtitle}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(samaRef, "r")}
            className="bg-gray-800 text-white px-3 py-2 rounded text-lg hover:bg-gray-600 absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-10"
            aria-label="Scroll right"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default Initiatives;
