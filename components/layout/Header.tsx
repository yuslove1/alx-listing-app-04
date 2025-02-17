import React, { useState } from 'react';
import Button from '../common/Button';

const Header: React.FC = () => {
    // State for the selected house type. Initially empty.
    const [houseType, setHouseType] = useState('');
  
    // State for the search query entered by the user. Initially empty.
    const [searchQuery, setSearchQuery] = useState('');
  
    // State to control the visibility of the house type dropdown. Initially closed.
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    // Handler function to update the selected house type and close the dropdown.
    const handleHouseTypeChange = (type: string) => {
      setHouseType(type);
      setIsDropdownOpen(false);
    };
  
    // Handler function to update the search query state when the input changes.
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    };
  
    // Handler function to handle form submission.
    const handleSubmit = (e: React.FormEvent) => {
      // Prevent default form submission behavior.
      e.preventDefault();
      // Log the search query and house type (replace with actual search logic).
      console.log('Searching for:', searchQuery, 'House Type:', houseType);
      // TODO: Implement actual search functionality here.
    };
  
    // Function to toggle the visibility of the house type dropdown.
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

  return (
    <header className="p-4 bg-gray-100">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold mb-4 md:mb-0">Listing-App</div>

        {/* Search and Dropdown */}
        <form className="w-full md:w-auto mb-4 md:mb-0" onSubmit={handleSubmit}>
          <div className="relative flex">
            <button
              id="dropdown-button"
              onClick={toggleDropdown}
              className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              {houseType || "House type"}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className={`z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-full ${isDropdownOpen ? '' : 'hidden'
                } dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                {['Rooms', 'Mansion', 'Countryside', 'Apartment'].map((type) => (
                  <li key={type}>
                    <button
                      type="button"
                      onClick={() => handleHouseTypeChange(type)}
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {type}
                    </button>
                  </li>
                ))}
              </ul>
            </div>



            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search Houses..."
                value={searchQuery}
                onChange={handleSearchChange}
                required
              />
              <button
                type="submit"
                className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-500 hover:bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        {/* Buttons */}
        <div className="space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Button>
          <Button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sign-up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;