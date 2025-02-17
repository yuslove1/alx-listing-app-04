import React, { useState } from 'react';
import { PROPERTYLISTINGSAMPLE } from '../constants';
import PropertyCard from '../components/common/Card';
import Pill from '../components/common/Pill';

const Home: React.FC = () => {
  // State to store the currently selected filters.  Starts as an empty array.
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Array of available filter labels to display as pills.
  const filterLabels = ['Top Villa', 'Self Checkin', 'Amazing Pools', 'Beachfront', 'Cabins'];

  // Handler function for when a filter pill is clicked.
  const handleFilterClick = (label: string) => {
    // Check if the clicked filter is already selected.
    if (selectedFilters.includes(label)) {
      // If already selected, remove it from the selectedFilters array.
      setSelectedFilters(selectedFilters.filter((filter) => filter !== label));
    } else {
      // If not selected, add it to the selectedFilters array.
      setSelectedFilters([...selectedFilters, label]);
    }
  };

  // Filter the properties based on the selected filters.
  // If no filters are selected, display all properties.
  const filteredProperties = selectedFilters.length > 0
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
        // Check if any of the selected filters are present in the property's categories.
        selectedFilters.some((filter) => property.category.includes(filter))
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ 
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D')` 
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">Find your favorite place here!</h1>
          <p className="text-lg text-center">The best prices for over 2 million properties worldwide.</p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Filter By</h2>
        <div className="flex flex-wrap">
          {filterLabels.map((label) => (
            <Pill
              key={label}
              label={label}
              onClick={handleFilterClick}
              selected={selectedFilters.includes(label)}
            />
          ))}
        </div>
      </div>

      {/* Property Listings */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;