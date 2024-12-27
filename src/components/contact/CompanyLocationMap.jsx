import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const CompanyLocationMap = () => {
  // Define the company's latitude and longitude
  const companyLocation = { lat: 51.505, lng: -0.09 };  // Change these coordinates to your company's location

  return (
    <div style={{ height: '300px', width: '100%' }}>  {/* Adjust the height and width as needed */}
      <MapContainer
        center={companyLocation}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={companyLocation}>
          <Popup>
            <strong>Company Name</strong><br />
            Address or additional details here.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CompanyLocationMap;
