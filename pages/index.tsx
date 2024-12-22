import React from "react";
import {  PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/PIll";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-96 bg-cover bg-center flex flex-col items-center justify-center text-black"
        
      >
        <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
        <p className="text-xl">The best prices for over 2 million properties worldwide.</p>
      </div>
v  
      {/* Filter Section */}
      <FilterSection />

      {/* Listing Section */}
      <ListingSection />
    </div>
  );
};

const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);
  const filters = ["Top Villa", "Self Checkin", "Free WiFi", "Luxury"];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };

  return (
    <div className="flex gap-4 py-8 justify-center">
      {filters.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          onClick={() => handleFilterClick(filter)}
          isActive={activeFilter === filter}
        />
      ))}
    </div>
  );
};

const ListingSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-8">
      {PROPERTYLISTINGSAMPLE.map((property) => (
        <div
          key={property.id}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{property.name}</h2>
            <p className="text-gray-600">Price: ${property.price}/night</p>
            <p className="text-yellow-500">Rating: {property.rating}⭐</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
