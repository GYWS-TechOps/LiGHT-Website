import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { eventsData } from "../data/eventsData";

function Initiatives() {
  const sc = useRef();
  const awardRef = useRef();
  const samaRef = useRef();

  // Touch swipe state
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Scroll by one card width on mobile, smooth scroll on desktop
  const scroll = (ref, d) => {
    if (!ref.current) return;
    
    // Check if mobile (screen width < 768px)
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
      // On mobile: scroll by one card width
      const cardWidth = ref.current.querySelector('.card-item')?.offsetWidth || 0;
      const gap = 20; // gap-5 = 20px
      const scrollAmount = cardWidth + gap;
      ref.current.scrollBy({ left: d === "l" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    } else {
      // On desktop: scroll by viewport width (smoother)
      const amt = ref.current.clientWidth;
      ref.current.scrollBy({ left: d === "l" ? -amt : amt, behavior: "smooth" });
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (ref, e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe(ref);
  };

  const handleSwipe = (ref) => {
    if (touchStart - touchEnd > 50) {
      scroll(ref, "r");
    } else if (touchEnd - touchStart > 50) {
      scroll(ref, "l");
    }
  };



  const awards = [
    { id: 1, img: "/initiativeimages/5. Innovative Centre _ LiGHT Samvedna.png", title: "Most Innovative event" },
    { id: 2, img: "/initiativeimages/1. Impactful_ LiGHT Samvedna.png", title: "Most Impactful Centre" },
    { id: 3, img: "/initiativeimages/4. Emerging Centre _ LiGHT Akola.png", title: "Emerging Centre of the Year" },
    { id: 4, img: "/initiativeimages/3. Most Events Conducted_ LiGHT Wardha.png", title: "Most Events Conducted" },
    { id: 5, img: "/initiativeimages/6. Promising Centres.png", title: "Most Promising Centre" },
  ];

  const samavesh = [
    { id: 1, img: "/initiativeimages/samavesh0.jpg", title: "Annual Meet 2022" },
    { id: 2, img: "/initiativeimages/samavesh1.jpg", title: "Annual Meet 2022" },
    { id: 3, img: "/initiativeimages/samavesh2.jpg", title: "Annual Meet 2022" },
    { id: 4, img: "/initiativeimages/samavesh3.jpg", title: "Annual Meet 2022" },
    { id: 5, img: "/initiativeimages/samavesh4.jpg", title: "Annual Meet 2022" },
    { id: 6, img: "/initiativeimages/samavesh5.jpg", title: "Annual Meet 2022" },
    { id: 7, img: "/initiativeimages/samavesh6.jpg", title: "Annual Meet 2022" },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      {/* Featured Events */}
      <div className="max-w-7xl mx-auto mb-20">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Events</h1>

        <div className="relative px-0 md:px-12">
          <button
            onClick={() => scroll(sc, "l")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full shadow-lg transition-all duration-300 items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          <div 
            ref={sc} 
            className="flex overflow-x-hidden gap-5 scroll-smooth snap-x snap-mandatory md:snap-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={(e) => handleTouchEnd(sc, e)}
          >
            {eventsData.map((e) => (
              <div
                key={e.id}
                className="card-item w-full md:w-[calc(33.333%-14px)] flex-shrink-0 snap-center md:snap-align-none"
              >
                <div className="border-4 border-[rgb(230,197,37)] rounded-xl bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-full aspect-[16/10] overflow-hidden rounded-lg mb-4">
                    <img
                      src={e.image}
                      alt={e.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="text-left">
                    <h2 className="text-xl font-bold mb-3 text-gray-800">{e.title}</h2>
                    {e.metrics?.map((metric, i) => (
                      <p key={i} className="text-sm text-gray-700 mb-2 flex items-start">
                        <span className="mr-2 text-[rgb(230,197,37)] text-lg">✦</span>
                        <span>{metric.label}: {metric.value}</span>
                      </p>
                    ))}
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">{e.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(sc, "r")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full shadow-lg transition-all duration-300 items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Awards Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Awards</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-lg">
            To felicitate the centres for their achievements, we present them with
            awards in the annual event <b>Samavesh</b>. It helps the centres keep
            up their spirit and creates healthy competition among them.
          </p>

          <div className="relative px-0 md:px-12">
            <button
              onClick={() => scroll(awardRef, "l")}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full shadow-lg transition-all duration-300 items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>

            <div 
              ref={awardRef} 
              className="flex overflow-x-hidden gap-5 scroll-smooth snap-x snap-mandatory md:snap-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(awardRef, e)}
            >
              {awards.map((a) => (
                <div
                  key={a.id}
                  className="card-item w-full md:w-[calc(33.333%-14px)] flex-shrink-0 snap-center md:snap-align-none"
                >
                  <div className="border-4 border-[rgb(230,197,37)] rounded-xl bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-50 flex items-center justify-center">
                      <img
                        src={a.img}
                        alt={a.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{a.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll(awardRef, "r")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full shadow-lg transition-all duration-300 items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Samavesh Section */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Samavesh</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 text-lg">
            Samavesh is the Annual Meet of <b>LiGHT</b> which presents each
            center's journey and initiatives. The first edition was held in May
            2022 with 160+ volunteers.
          </p>

          <div className="relative px-0 md:px-12">
            <button
            onClick={() => scroll(sc, "l")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full shadow-lg transition-all duration-300 items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
            <div 
              ref={samaRef} 
              className="flex overflow-x-hidden gap-5 scroll-smooth snap-x snap-mandatory md:snap-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => handleTouchEnd(samaRef, e)}
            >
              {samavesh.map((s) => (
                <div
                  key={s.id}
                  className="card-item w-full md:w-[calc(33.333%-14px)] flex-shrink-0 snap-center md:snap-align-none"
                >
                  <div className="border-4 border-[rgb(230,197,37)] rounded-xl bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-50 flex items-center justify-center">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{s.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll(samaRef, "r")}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white w-10 h-10 rounded-full shadow-lg transition-all duration-300 items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Initiatives;