"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Image from "next/image";
import BlurFade from "./magicui/blur-fade";

interface HongKongMapProps {
  delay?: number;
}

// Location data remains the same
const locations = {
  "Red Incense Burner Summit": {
    name: "Red Incense Burner Summit (紅香爐峰)",
    description: "Great views of Hong Kong",
    coordinates: [22.282, 114.197], // Lat, Lon for Leaflet
    type: "nature"
  },
  "James Bond Filming Location Monument": {
    name: "James Bond Filming Location Monument (007撮影記念碑)",
    description: "Good Times cycling from Fukuoka to Kagoshima in 2018",
    coordinates: [31.373, 130.200], // Corrected coordinates for better placement
    type: "nature"
  },
  "Sani": {
    name: "Sani",
    description: "Nice place for brunch. Good idea for first date.",
    coordinates: [-37.777, 144.971], // Corrected coordinates
    type: "Urban"
  },
  "Wellington Harbour": {
    name: "Wellington harbour",
    description: "Scootered here in 2021 on my solo visit.",
    coordinates: [-41.300, 174.806], // Corrected coordinates
    type: "nature"
  },
  "Taipei 101": {
    name: "Taipei 101",
    description: "Always fun to visit Taipei",
    coordinates: [25.034, 121.565], // Corrected coordinates
    type: "Urban"
  }
};

// Custom icon definitions
const natureIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const urbanIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const HongKongMap = ({ delay = 0 }: HongKongMapProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fix for Leaflet marker icons in Next.js
  useEffect(() => {
    if (isClient) {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });
    }
  }, [isClient]);

  if (!isClient) {
    return (
      <BlurFade delay={delay}>
        <div className="flex justify-center">
          <div className="bg-card border rounded-lg p-6 w-full max-w-4xl">
            <div className="h-96 flex items-center justify-center">
              Loading Hong Kong Map...
            </div>
          </div>
        </div>
      </BlurFade>
    );
  }

  return (
    <BlurFade delay={delay}>
      <div className="flex justify-center">
        <div className="bg-card border rounded-lg p-6 w-full max-w-4xl">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-full h-96 max-w-4xl rounded-lg overflow-hidden border">
              <MapContainer 
                center={[5, 110]} // Center of Hong Kong
                zoom={2} 
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
              >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                subdomains={['a', 'b', 'c', 'd']}
                maxZoom={20}
              />
                {Object.entries(locations).map(([key, location]) => (
                  <Marker
                    key={key}
                    position={location.coordinates as [number, number]}
                    icon={location.type === 'nature' ? natureIcon : urbanIcon}
                  >
                    <Popup>
                      <span className="font-semibold">{location.name}</span>
                      <br />
                      {location.description}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Image 
                  src={natureIcon.options.iconUrl} 
                  alt="Nature" 
                  width={16} 
                  height={16} 
                  className="w-4 h-auto"
                />
                <span>Nature</span>
              </div>
              <div className="flex items-center space-x-2">
                <Image 
                  src={urbanIcon.options.iconUrl} 
                  alt="Urban" 
                  width={16} 
                  height={16} 
                  className="w-4 h-auto"
                />
                <span>Urban</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

// Make sure to export the component as default if it's the only export
export default HongKongMap; 