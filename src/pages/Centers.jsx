import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { centers } from "../data/centersData";
import "./Centers.css";
import "leaflet/dist/leaflet.css";

// Fix for default markers
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const indiaCenter = [20.5937, 78.9629];
const indiaBounds = [
  [6.4627, 68.1097], // Southwest coordinates
  [35.5044, 97.3953], // Northeast coordinates
];

const Centers = () => {
  const [activeCenter, setActiveCenter] = useState(null);
  const [hoveredCenter, setHoveredCenter] = useState(null);

  return (
    <div className="centers-page">
      <header className="centers-hero">
        <div className="hero-content">
          <h1>Our Centers</h1>
          <p className="lead">A human network across India — explore our centers and discover the impact we're making together.</p>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <strong>{centers.length}</strong>
            <span>Centers</span>
          </div>
          <div className="stat">
            <strong>{[...new Set(centers.map(c => c.state))].length}</strong>
            <span>States</span>
          </div>
          <div className="stat">
            <strong>400+</strong>
            <span>Active Members</span>
          </div>
        </div>
      </header>

      <main className="centers-main">
        <section className="map-section">
          <div className="map-header">
            <h2>Interactive Map</h2>
            <p>Click on any marker to explore our centers</p>
          </div>
          <div className="map-container">
            <MapContainer 
              center={indiaCenter} 
              zoom={5} 
              scrollWheelZoom={true} 
              style={{ height: "100%", width: "100%" }}
              maxBounds={indiaBounds}
              maxBoundsViscosity={1.0}
              minZoom={4}
              maxZoom={10}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {centers.map((center, idx) => (
                <Marker 
                  key={idx} 
                  position={[center.lat, center.lng]} 
                  eventHandlers={{ 
                    click: () => setActiveCenter(center),
                    mouseover: () => setHoveredCenter(center),
                    mouseout: () => setHoveredCenter(null)
                  }}
                >
                  <Popup>
                    <div className="popup-content">
                      <h3>{center.name}</h3>
                      <p className="popup-state">{center.state}</p>
                      <p className="popup-description">{center.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>
        
        <aside className="info-panel">
          <div className="panel-header">
            <h2>Center Details</h2>
            {hoveredCenter && !activeCenter && (
              <p className="hover-hint">Hovering: {hoveredCenter.name}</p>
            )}
          </div>
          
          {activeCenter ? (
            <div className="center-details active">
              <div className="center-badge">
                <span className="badge-dot"></span>
                <span className="badge-text">Active Center</span>
              </div>
              <h3>{activeCenter.name}</h3>
              <p className="center-state"><strong>📍 State:</strong> {activeCenter.state}</p>
              <div className="center-description">
                <h4>About this center</h4>
                <p>{activeCenter.description}</p>
              </div>
              <button 
                className="clear-selection"
                onClick={() => setActiveCenter(null)}
              >
                Clear Selection
              </button>
            </div>
          ) : (
            <div className="center-details placeholder">
              <div className="placeholder-icon">🗺️</div>
              <h3>Explore Our Centers</h3>
              <p>Click on any marker on the map to learn more about our centers across India.</p>
              
              <div className="centers-list">
                <h4>All Centers</h4>
                {centers.map((center, idx) => (
                  <button
                    key={idx}
                    className="center-item"
                    onClick={() => setActiveCenter(center)}
                  >
                    <span className="center-name">{center.name}</span>
                    <span className="center-state-small">{center.state}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>
      </main>
    </div>
  );
};

export default Centers;
